import { supabase } from '@/lib/supabase/client';

export interface PlagiarismReport {
  id: string;
  article_id: string;
  similarity_score: number;
  report_details: Record<string, any>;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export async function createPlagiarismReport(articleId: string, content: string) {
  // TODO: Integrate with plagiarism detection API
  const mockReport = {
    similarity_score: Math.random() * 100,
    report_details: {
      matches: [],
      analysis: "Mock plagiarism report"
    }
  };

  const { data, error } = await supabase
    .from('plagiarism_reports')
    .insert({
      article_id: articleId,
      ...mockReport
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getPlagiarismReport(articleId: string) {
  const { data, error } = await supabase
    .from('plagiarism_reports')
    .select('*')
    .eq('article_id', articleId)
    .single();

  if (error) throw error;
  return data;
}

export async function updateReportStatus(
  reportId: string,
  status: 'approved' | 'rejected'
) {
  const { data, error } = await supabase
    .from('plagiarism_reports')
    .update({ status })
    .eq('id', reportId)
    .select()
    .single();

  if (error) throw error;
  return data;
}