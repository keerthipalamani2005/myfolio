/*
# Create contact_messages table for portfolio contact form

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — whether the owner has read the message
  - `created_at` (timestamptz, default now()) — when the message was sent

2. Security
- Enable RLS on `contact_messages`.
- This is a no-auth portfolio site: visitors submit messages without signing in.
- INSERT policy allows anon + authenticated to insert new messages (anyone can send a contact message).
- SELECT/UPDATE/DELETE policies allow anon + authenticated as well since there is no owner concept — the portfolio owner manages messages from the app.
- All policies use `TO anon, authenticated` because the frontend uses the anon key.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages" ON contact_messages
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_contact_messages" ON contact_messages;
CREATE POLICY "anon_update_contact_messages" ON contact_messages
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_messages" ON contact_messages;
CREATE POLICY "anon_delete_contact_messages" ON contact_messages
  FOR DELETE TO anon, authenticated USING (true);