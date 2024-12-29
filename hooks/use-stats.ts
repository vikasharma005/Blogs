"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

interface DashboardStats {
  totalUsers: number;
  totalArticles: number;
  pendingReviews: number;
  badgesAwarded: number;
}

export function useStats() {
  const [stats, setStats] = useState<DashboardStats>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [
          { count: totalUsers },
          { count: totalArticles },
          { count: pendingReviews },
          { count: badgesAwarded },
        ] = await Promise.all([
          supabase.from("profiles").select("*", { count: "exact" }),
          supabase.from("articles").select("*", { count: "exact" }),
          supabase
            .from("articles")
            .select("*", { count: "exact" })
            .eq("status", "pending"),
          supabase.from("user_badges").select("*", { count: "exact" }),
        ]);

        setStats({
          totalUsers: totalUsers || 0,
          totalArticles: totalArticles || 0,
          pendingReviews: pendingReviews || 0,
          badgesAwarded: badgesAwarded || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading };
}