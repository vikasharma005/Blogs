/*
  # Create plagiarism detection system

  1. New Tables
    - `plagiarism_reports`
      - `id` (uuid, primary key)
      - `article_id` (uuid, references articles)
      - `similarity_score` (float)
      - `report_details` (jsonb)
      - `status` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS
    - Add policies for authors and admins
*/

CREATE TABLE IF NOT EXISTS plagiarism_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE,
  similarity_score float NOT NULL,
  report_details jsonb,
  status text CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE plagiarism_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authors can view their own reports"
  ON plagiarism_reports FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM articles
      WHERE articles.id = article_id
      AND articles.author_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all reports"
  ON plagiarism_reports FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );