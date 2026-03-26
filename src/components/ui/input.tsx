"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm text-muted/60">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-input border border-input-border rounded-xl px-3.5 py-2.5 text-sm text-foreground",
            "placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-accent/50",
            "transition-all duration-200 hover:border-input-border/80",
            error && "border-danger/60 focus:ring-danger/30",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-danger">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export { Input };
