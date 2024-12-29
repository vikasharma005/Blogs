"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function ArticleSearch() {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <Input
          placeholder="Search articles..."
          className="w-full"
          type="search"
        />
      </div>
      <Button>
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </div>
  );
}