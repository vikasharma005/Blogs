"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { ArticleStatus } from "@/lib/articles/types";
import { useToast } from "@/hooks/use-toast";

export function useArticles(status: ArticleStatus) {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchArticles();
  }, [status]);

  async function fetchArticles() {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select(`
          *,
          author:profiles(*)
        `)
        .eq("status", status)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error("Error fetching articles:", error);
      toast({
        title: "Error",
        description: "Failed to fetch articles",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  async function approveArticle(id: string) {
    try {
      const { error } = await supabase
        .from("articles")
        .update({ status: "published" })
        .eq("id", id);

      if (error) throw error;
      await fetchArticles();
      toast({
        title: "Success",
        description: "Article approved and published",
      });
    } catch (error) {
      console.error("Error approving article:", error);
      toast({
        title: "Error",
        description: "Failed to approve article",
        variant: "destructive",
      });
    }
  }

  async function rejectArticle(id: string) {
    try {
      const { error } = await supabase
        .from("articles")
        .update({ status: "rejected" })
        .eq("id", id);

      if (error) throw error;
      await fetchArticles();
      toast({
        title: "Success",
        description: "Article rejected",
      });
    } catch (error) {
      console.error("Error rejecting article:", error);
      toast({
        title: "Error",
        description: "Failed to reject article",
        variant: "destructive",
      });
    }
  }

  return {
    articles,
    loading,
    approveArticle,
    rejectArticle,
  };
}