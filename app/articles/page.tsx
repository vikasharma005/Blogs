import { Card } from "@/components/ui/card";
import ArticleList from "@/components/articles/article-list";
import ArticleSearch from "@/components/articles/article-search";

export default function ArticlesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Technical Articles</h1>
      <div className="mb-8">
        <ArticleSearch />
      </div>
      <ArticleList />
    </div>
  );
}