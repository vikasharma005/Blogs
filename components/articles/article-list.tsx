"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const mockArticles = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    excerpt: "Learn the basics of machine learning and its applications...",
    author: "John Doe",
    date: "2024-03-20",
    tags: ["ML", "AI", "Programming"],
  },
  // Add more mock articles here
];

export default function ArticleList() {
  return (
    <div className="space-y-6">
      {mockArticles.map((article) => (
        <Card key={article.id} className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            <Link href={`/articles/${article.id}`} className="hover:text-primary">
              {article.title}
            </Link>
          </h2>
          <p className="text-muted-foreground mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                By {article.author}
              </span>
              <span className="text-sm text-muted-foreground">
                {article.date}
              </span>
            </div>
            <div className="flex gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}