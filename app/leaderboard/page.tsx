import { Card } from "@/components/ui/card";
import LeaderboardTable from "@/components/leaderboard/leaderboard-table";
import LeaderboardStats from "@/components/leaderboard/leaderboard-stats";

export default function LeaderboardPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Leaderboard</h1>
      <div className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-3">
          <LeaderboardTable />
        </div>
        <div>
          <LeaderboardStats />
        </div>
      </div>
    </div>
  );
}