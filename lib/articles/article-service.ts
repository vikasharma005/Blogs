import { supabase } from '@/lib/supabase/client';

export interface Article {
  id: string;
  title: string;
  content: string;
  status: 'draft' | 'published';
  author_id: string;
  created_at: string;
  updated_at: string;
}

export async function saveArticle(article: Partial<Article>) {
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session?.user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('articles')
    .insert({
      ...article,
      author_id: session.session.user.id,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateArticle(id: string, updates: Partial<Article>) {
  const { data, error } = await supabase
    .from('articles')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getArticle(id: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*, profiles(*)')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}