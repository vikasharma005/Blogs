import { supabase } from '@/lib/supabase/client';

export interface Badge {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  points: number;
  criteria: Record<string, any>;
}

export async function getBadges() {
  const { data, error } = await supabase
    .from('badges')
    .select('*')
    .order('points', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getUserBadges(userId: string) {
  const { data, error } = await supabase
    .from('user_badges')
    .select(`
      *,
      badges (*)
    `)
    .eq('user_id', userId);

  if (error) throw error;
  return data;
}

export async function awardBadge(userId: string, badgeId: string) {
  const { error } = await supabase
    .from('user_badges')
    .insert({
      user_id: userId,
      badge_id: badgeId,
    });

  if (error) throw error;
}