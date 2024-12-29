export type ArticleStatus = "draft" | "pending" | "published" | "rejected";

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  status: ArticleStatus;
  author_id: string;
  plagiarism_score?: number;
  created_at: string;
  updated_at: string;
  published_at?: string;
}