"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockUsers = [
  {
    rank: 1,
    name: "John Doe",
    articles: 15,
    points: 1500,
    badges: ["Gold Author", "Top Contributor"],
  },
  // Add more mock users here
];

export default function LeaderboardTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Articles</TableHead>
          <TableHead>Points</TableHead>
          <TableHead>Badges</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockUsers.map((user) => (
          <TableRow key={user.rank}>
            <TableCell className="font-medium">{user.rank}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.articles}</TableCell>
            <TableCell>{user.points}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                {user.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}