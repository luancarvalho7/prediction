"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ChipProps {
  label: string;
  active?: boolean;
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  className?: string;
}

export function Chip({ label, active, removable, onClick, onRemove, className }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0",
        active
          ? "bg-accent/[0.12] text-accent border border-accent/25 font-medium"
          : "bg-white/[0.03] text-muted/60 hover:text-foreground border border-white/[0.06] hover:border-white/[0.12]",
        className
      )}
    >
      {label}
      {removable && (
        <X
          size={12}
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
        />
      )}
    </button>
  );
}
