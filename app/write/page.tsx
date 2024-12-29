"use client";

import { ArticleForm } from "@/components/articles/article-form";
import { Card } from "@/components/ui/card";

export default function WritePage() {
  return (
    <div className="container py-8">
      <Card className="p-6">
        <h1 className="text-3xl font-bold mb-8">Write an Article</h1>
        <ArticleForm />
      </Card>
    </div>
  );
}