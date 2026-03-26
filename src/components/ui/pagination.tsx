"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
}

export function Pagination({ current, total, onChange, className }: PaginationProps) {
  if (total <= 1) return null;

  const pages = Array.from({ length: Math.min(total, 7) }, (_, i) => {
    if (total <= 7) return i + 1;
    if (current <= 4) return i + 1;
    if (current >= total - 3) return total - 6 + i;
    return current - 3 + i;
  });

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        onClick={() => onChange(current - 1)}
        disabled={current <= 1}
        className="p-2 rounded-lg text-muted/60 hover:text-foreground disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={cn(
            "w-8 h-8 rounded-lg text-sm transition-all duration-200 cursor-pointer",
            page === current
              ? "bg-white/[0.1] text-foreground font-medium"
              : "text-muted/60 hover:text-foreground hover:bg-white/[0.04]"
          )}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current >= total}
        className="p-2 rounded-lg text-muted/60 hover:text-foreground disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
