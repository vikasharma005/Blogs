"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/editor/rich-text-editor";
import { AISuggestions } from "./ai-suggestions";
import { saveArticle, updateArticle } from "@/lib/articles/article-service";
import { useToast } from "@/hooks/use-toast";

export function ArticleForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent, status: 'draft' | 'published' = 'published') => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveArticle({
        title,
        content,
        status,
      });

      toast({
        title: status === 'published' ? "Article published!" : "Draft saved!",
        description: status === 'published' 
          ? "Your article is now live."
          : "Your draft has been saved.",
      });

      if (status === 'published') {
        router.push("/articles");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
            required
          />
        </div>
        <div className="space-y-2">
          <Label>Content</Label>
          <RichTextEditor 
            onChange={setContent}
            initialContent={content}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={(e) => handleSubmit(e, 'draft')}
            disabled={loading}
          >
            Save Draft
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Publishing..." : "Publish"}
          </Button>
        </div>
      </form>
      <div>
        <AISuggestions content={content} />
      </div>
    </div>
  );
}