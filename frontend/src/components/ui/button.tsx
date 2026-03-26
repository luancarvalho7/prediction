"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "outline" | "yes" | "no";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
          "active:scale-[0.97]",
          {
            "bg-accent text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]": variant === "primary",
            "bg-card/80 text-foreground hover:bg-card-hover border border-border/60 backdrop-blur-sm": variant === "secondary",
            "bg-danger/90 text-white hover:bg-danger-hover shadow-[0_0_16px_rgba(239,68,68,0.2)]": variant === "danger",
            "bg-transparent text-muted hover:text-foreground hover:bg-white/[0.04]": variant === "ghost",
            "bg-transparent text-foreground border border-border/60 hover:border-accent/40 hover:bg-accent/[0.04]": variant === "outline",
            "bg-yes/[0.08] text-yes border border-yes/20 hover:bg-yes/[0.15] hover:border-yes/30": variant === "yes",
            "bg-no/[0.08] text-no border border-no/20 hover:bg-no/[0.15] hover:border-no/30": variant === "no",
          },
          {
            "text-xs px-3 py-1.5 rounded-lg": size === "sm",
            "text-sm px-4 py-2": size === "md",
            "text-[15px] px-6 py-2.5": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
