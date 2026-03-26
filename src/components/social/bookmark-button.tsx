"use client";

import { Bookmark as BookmarkIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BookmarkButtonProps {
  bookmarked?: boolean;
  className?: string;
}

export function BookmarkButton({ bookmarked = false, className }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  return (
    <button
      onClick={() => setIsBookmarked(!isBookmarked)}
      className={cn(
        "p-2 rounded-lg transition-colors cursor-pointer",
        isBookmarked ? "text-warning bg-warning/10" : "text-muted/60 hover:text-warning",
        className
      )}
    >
      <BookmarkIcon size={16} fill={isBookmarked ? "currentColor" : "none"} />
    </button>
  );
}
