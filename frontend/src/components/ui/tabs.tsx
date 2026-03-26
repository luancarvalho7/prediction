"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface TabsProps {
  tabs: { id: string; label: string; count?: number }[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, defaultTab, onChange, className }: TabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={cn("flex gap-0.5 bg-input/60 rounded-xl p-1 border border-border/40", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActive(tab.id);
            onChange?.(tab.id);
          }}
          className={cn(
            "px-4 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-pointer relative",
            active === tab.id
              ? "bg-white/[0.08] text-foreground font-medium shadow-sm"
              : "text-muted hover:text-foreground/80"
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-1.5 text-xs opacity-50">({tab.count})</span>
          )}
        </button>
      ))}
    </div>
  );
}
