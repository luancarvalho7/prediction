"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ content, children, className }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs glass glass-border rounded-xl shadow-2xl whitespace-nowrap z-50",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
