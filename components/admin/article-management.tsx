"use client";

import { useState } from "react";
import { useArticles } from "@/hooks/use-articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArticleStatus } from "@/lib/articles/types";
import { formatDate } from "@/lib/utils";

export function ArticleManagement() {
  const [filter, setFilter] = useState<ArticleStatus>("pending");
  const { articles, loading, approveArticle, rejectArticle } = useArticles(filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Article Management</h1>
        <div className="flex gap-2">
          {(["pending", "published", "rejected"] as ArticleStatus[]).map(
            (status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                onClick={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            )
          )}
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Plagiarism Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles?.map((article) => (
              <TableRow key={article.id}>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{article.author.full_name}</TableCell>
                <TableCell>{formatDate(article.created_at)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      article.plagiarism_score < 10
                        ? "success"
                        : article.plagiarism_score < 30
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {article.plagiarism_score}%
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge>{article.status}</Badge>
                </TableCell>
                <TableCell>
                  {article.status === "pending" && (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => approveArticle(article.id)}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => rejectArticle(article.id)}
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}