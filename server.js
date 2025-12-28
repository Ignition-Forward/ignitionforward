import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(cors());
app.use(express.json());

// Logging utility based on LOG_LEVEL
const LOG_LEVELS = { error: 0, warn: 1, info: 2, debug: 3 };
const currentLevel = LOG_LEVELS[process.env.LOG_LEVEL] ?? LOG_LEVELS.info;

const log = {
  error: (...args) => currentLevel >= LOG_LEVELS.error && console.error(`[ERROR] ${new Date().toISOString()}`, ...args),
  warn: (...args) => currentLevel >= LOG_LEVELS.warn && console.warn(`[WARN]  ${new Date().toISOString()}`, ...args),
  info: (...args) => currentLevel >= LOG_LEVELS.info && console.log(`[INFO]  ${new Date().toISOString()}`, ...args),
  debug: (...args) => currentLevel >= LOG_LEVELS.debug && console.log(`[DEBUG] ${new Date().toISOString()}`, ...args),
};

// Lazy-initialized clients
let _resend = null;
const getResend = () => {
  if (!_resend) {
    log.info('Initializing Resend client');
    _resend = new Resend(process.env.RESEND_API_KEY);
    log.debug('Resend client initialized');
  }
  return _resend;
};

let _supabase = null;
const getSupabase = () => {
  if (!_supabase) {
    log.info('Initializing Supabase client');
    log.debug('Supabase URL:', process.env.SUPABASE_URL?.substring(0, 30) + '...');
    _supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );
    log.debug('Supabase client initialized');
  }
  return _supabase;
};

const getToEmail = () => process.env.CONTACT_TO_EMAIL || 'hello@ignitionforward.com';

// Health check endpoint
app.get('/health', (req, res) => {
  log.debug('Health check requested');
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.post('/api/contact', async (req, res) => {
  const startTime = Date.now();
  log.info('Contact form submission received');

  try {
    const { name, email, company, role, segment, message } = req.body;
    log.debug('Contact form data:', { name, email, company, role, segment, hasMessage: !!message });

    if (!name || !email || !company || !role || !segment) {
      log.warn('Contact form validation failed - missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    log.debug('Starting parallel DB insert and email send');

    // Run DB insert and email send in parallel
    const [dbResult, emailResult] = await Promise.allSettled([
      // Save to Supabase for tracking
      getSupabase().from('contacts').insert({ name, email, company, role, segment, message }),
      // Send email notification
      getResend().emails.send({
        from: 'Ignition Forward <contact@ignitionforward.com>',
        to: [getToEmail()],
        replyTo: email,
        subject: `New Contact: ${name} from ${company}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Segment:</strong> ${segment}</p>
          <p><strong>Message:</strong></p>
          <p>${message || '(No message provided)'}</p>
        `,
      }),
    ]);

    // Log DB result
    if (dbResult.status === 'rejected' || dbResult.value?.error) {
      log.error('Supabase insert failed:', dbResult.status === 'rejected' ? dbResult.reason : dbResult.value.error);
    } else {
      log.debug('Supabase insert successful');
    }

    // Email is critical - fail if it doesn't send
    if (emailResult.status === 'rejected') {
      log.error('Resend email failed:', emailResult.reason);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    if (emailResult.value.error) {
      log.error('Resend email error:', emailResult.value.error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    const duration = Date.now() - startTime;
    log.info(`Contact form processed successfully in ${duration}ms`, { emailId: emailResult.value.data.id });
    res.json({ success: true, id: emailResult.value.data.id });
  } catch (error) {
    log.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Track page visits - logs to Supabase
app.post('/api/track', async (req, res) => {
  try {
    const { page, referrer, userAgent, screenWidth, screenHeight } = req.body;
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;

    log.debug('Page visit tracked:', { page, ip: ip?.substring(0, 10) + '...', referrer });

    // Insert into page_visits table
    const { error } = await getSupabase().from('page_visits').insert({
      page,
      referrer: referrer || null,
      user_agent: userAgent || null,
      ip_address: ip || null,
      screen_width: screenWidth || null,
      screen_height: screenHeight || null,
      visited_at: new Date().toISOString(),
    });

    if (error) {
      log.error('Failed to track visit:', error);
      // Don't fail the request - tracking is non-critical
    }

    res.json({ success: true });
  } catch (error) {
    log.error('Track endpoint error:', error);
    res.json({ success: false }); // Don't fail client-side
  }
});

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
  log.info(`API server started on port ${PORT}`);
  log.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
  log.info(`Log level: ${process.env.LOG_LEVEL || 'info'}`);
  log.debug('Resend API key configured:', !!process.env.RESEND_API_KEY);
  log.debug('Supabase URL configured:', !!process.env.SUPABASE_URL);
  log.debug('Contact email:', getToEmail());
});
