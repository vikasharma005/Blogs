"use client";

import { Card } from "@/components/ui/card";
import { useStats } from "@/hooks/use-stats";
import { BarChart, Users, FileText, Award } from "lucide-react";

export function AdminDashboard() {
  const { stats, loading } = useStats();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={stats?.totalUsers}
          icon={Users}
          loading={loading}
        />
        <StatCard
          title="Articles"
          value={stats?.totalArticles}
          icon={FileText}
          loading={loading}
        />
        <StatCard
          title="Pending Reviews"
          value={stats?.pendingReviews}
          icon={BarChart}
          loading={loading}
        />
        <StatCard
          title="Badges Awarded"
          value={stats?.badgesAwarded}
          icon={Award}
          loading={loading}
        />
      </div>
    </div>
  );
}

function StatCard({ 
  title, 
  value, 
  icon: Icon,
  loading 
}: {
  title: string;
  value?: number;
  icon: React.ElementType;
  loading?: boolean;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">
            {loading ? "-" : value?.toLocaleString()}
          </p>
        </div>
      </div>
    </Card>
  );
}