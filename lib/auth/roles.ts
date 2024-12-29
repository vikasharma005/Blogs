export type UserRole = 'user' | 'admin';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  points: number;
  avatar_url?: string;
}

export function isAdmin(profile?: UserProfile | null): boolean {
  return profile?.role === 'admin';
}

export function canModerateContent(profile?: UserProfile | null): boolean {
  return isAdmin(profile);
}

export function canAwardBadges(profile?: UserProfile | null): boolean {
  return isAdmin(profile);
}