-- Page visits tracking table
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS page_visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  ip_address TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  visited_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for querying by page and time
CREATE INDEX IF NOT EXISTS idx_page_visits_page ON page_visits(page);
CREATE INDEX IF NOT EXISTS idx_page_visits_visited_at ON page_visits(visited_at DESC);

-- Enable RLS but allow inserts from the API
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts (tracking)
CREATE POLICY "Allow anonymous inserts" ON page_visits
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for service role to read all
CREATE POLICY "Service role can read all" ON page_visits
  FOR SELECT
  TO service_role
  USING (true);

-- Comment
COMMENT ON TABLE page_visits IS 'Tracks page visits for custom analytics';
