import express from 'express';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(express.json());

// Lazy-initialized clients
let _resend = null;
const getResend = () => {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
};

let _supabase = null;
const getSupabase = () => {
  if (!_supabase) {
    _supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );
  }
  return _supabase;
};

const getToEmail = () => process.env.CONTACT_TO_EMAIL || 'hello@ignitionforward.com';

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, role, segment, message } = req.body;

    if (!name || !email || !company || !role || !segment) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

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

    // Log DB errors but don't fail the request
    if (dbResult.status === 'rejected' || dbResult.value?.error) {
      console.error('Supabase error:', dbResult.status === 'rejected' ? dbResult.reason : dbResult.value.error);
    }

    // Email is critical - fail if it doesn't send
    if (emailResult.status === 'rejected') {
      console.error('Resend error:', emailResult.reason);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    if (emailResult.value.error) {
      console.error('Resend error:', emailResult.value.error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    res.json({ success: true, id: emailResult.value.data.id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
