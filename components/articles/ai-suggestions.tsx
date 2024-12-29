"use client";

import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lightbulb } from "lucide-react";
import { getContentSuggestions } from '@/lib/ai/suggestions';
import { Skeleton } from '@/components/ui/skeleton';

interface AISuggestionsProps {
  content: string;
}

export function AISuggestions({ content }: AISuggestionsProps) {
  const [suggestions, setSuggestions] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSuggestions = async () => {
      // Ensure content is a string and not empty
      const contentStr = String(content || '');
      if (!contentStr.trim()) {
        setSuggestions(null);
        return;
      }
      
      setLoading(true);
      try {
        const result = await getContentSuggestions(contentStr);
        setSuggestions(result);
      } catch (error) {
        console.error('Error getting suggestions:', error);
        setSuggestions('Unable to generate suggestions at this time.');
      } finally {
        setLoading(false);
      }
    };

    // Debounce the suggestions request
    const timeoutId = setTimeout(getSuggestions, 1000);
    return () => clearTimeout(timeoutId);
  }, [content]);

  if (!suggestions && !loading) return null;

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-yellow-500" />
        <h3 className="font-semibold">AI Suggestions</h3>
      </div>
      <ScrollArea className="h-[300px]">
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[95%]" />
          </div>
        ) : (
          <div className="space-y-4 text-sm">
            {suggestions?.split('\n').map((suggestion, index) => (
              <p key={index} className="text-muted-foreground">
                {suggestion}
              </p>
            ))}
          </div>
        )}
      </ScrollArea>
    </Card>
  );
}