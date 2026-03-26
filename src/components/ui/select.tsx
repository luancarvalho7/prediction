"use client";

import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm text-muted/60">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-input border border-input-border rounded-xl px-3.5 py-2.5 text-sm text-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-accent/50 appearance-none cursor-pointer",
            "transition-all duration-200 hover:border-input-border/80",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
Select.displayName = "Select";
export { Select };
