import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-8">
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            IEEE Student Branch PIET Technical Blog Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Share your technical knowledge, learn from peers, and grow together.
            Join our community of student writers and innovators.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/write">Start Writing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/articles">Browse Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="p-6">
            <BookOpen className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rich Content Editor</h3>
            <p className="text-muted-foreground">
              Create engaging articles with support for multimedia, code snippets,
              and mathematical equations.
            </p>
          </Card>
          <Card className="p-6">
            <Trophy className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Earn Recognition</h3>
            <p className="text-muted-foreground">
              Get rewarded for your contributions with badges, certificates, and
              leaderboard rankings.
            </p>
          </Card>
          <Card className="p-6">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-muted-foreground">
              Connect with fellow students, share knowledge, and grow together in
              our technical community.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}