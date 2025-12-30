-- Migration: Update contacts table for new form structure
-- Created: 2024-12-30

-- Make existing required columns optional
ALTER TABLE contacts ALTER COLUMN company DROP NOT NULL;
ALTER TABLE contacts ALTER COLUMN role DROP NOT NULL;
ALTER TABLE contacts ALTER COLUMN segment DROP NOT NULL;

-- Add new columns for updated form
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS company_stage TEXT;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS path_interest TEXT;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS timeline TEXT;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS ai_expertise TEXT;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS referral_source TEXT;

-- Migrate old data: role -> path_interest, segment -> company_stage
UPDATE contacts SET path_interest = role WHERE path_interest IS NULL AND role IS NOT NULL;
UPDATE contacts SET company_stage = segment WHERE company_stage IS NULL AND segment IS NOT NULL;

-- Drop old columns (optional - can keep for historical data)
-- ALTER TABLE contacts DROP COLUMN IF EXISTS role;
-- ALTER TABLE contacts DROP COLUMN IF EXISTS segment;
