"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface SegmentedControlProps {
  segments: { id: string; label: string }[];
  defaultSegment?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function SegmentedControl({ segments, defaultSegment, onChange, className }: SegmentedControlProps) {
  const [active, setActive] = useState(defaultSegment || segments[0]?.id);

  return (
    <div className={cn("inline-flex bg-input/60 rounded-xl p-1 border border-border/40", className)}>
      {segments.map((seg) => (
        <button
          key={seg.id}
          onClick={() => {
            setActive(seg.id);
            onChange?.(seg.id);
          }}
          className={cn(
            "px-4 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0",
            active === seg.id
              ? "bg-white/[0.08] text-foreground font-medium shadow-sm"
              : "text-muted hover:text-foreground/80"
          )}
        >
          {seg.label}
        </button>
      ))}
    </div>
  );
}
