"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  side?: "left" | "right" | "bottom";
  className?: string;
}

export function Drawer({ open, onClose, title, children, side = "right", className }: DrawerProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <div
        className={cn(
          "absolute glass shadow-2xl overflow-y-auto",
          {
            "top-0 right-0 h-full w-full max-w-md border-l border-white/[0.06]": side === "right",
            "top-0 left-0 h-full w-full max-w-md border-r border-white/[0.06]": side === "left",
            "bottom-0 left-0 w-full max-h-[85vh] border-t border-white/[0.06] rounded-t-3xl": side === "bottom",
          },
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            <button onClick={onClose} className="text-muted/60 hover:text-foreground rounded-lg p-1 hover:bg-white/[0.06] transition-colors cursor-pointer">
              <X size={18} />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
