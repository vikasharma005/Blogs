"use client";

import { Card } from "@/components/ui/card";

export default function LeaderboardStats() {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <h3 className="font-semibold mb-2">Top Contributors</h3>
        <p className="text-2xl font-bold">150</p>
        <p className="text-sm text-muted-foreground">Active contributors</p>
      </Card>
      <Card className="p-4">
        <h3 className="font-semibold mb-2">Total Articles</h3>
        <p className="text-2xl font-bold">500</p>
        <p className="text-sm text-muted-foreground">Published articles</p>
      </Card>
      <Card className="p-4">
        <h3 className="font-semibold mb-2">Badges Awarded</h3>
        <p className="text-2xl font-bold">300</p>
        <p className="text-sm text-muted-foreground">Achievement badges</p>
      </Card>
    </div>
  );
}