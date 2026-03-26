import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "danger" | "warning" | "accent";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({ children, variant = "default", size = "sm", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border",
        {
          "bg-white/[0.04] text-muted/60 border-white/[0.06]": variant === "default",
          "bg-success/[0.08] text-success border-success/20": variant === "success",
          "bg-danger/[0.08] text-danger border-danger/20": variant === "danger",
          "bg-warning/[0.08] text-warning border-warning/20": variant === "warning",
          "bg-accent/[0.08] text-accent border-accent/20": variant === "accent",
        },
        {
          "text-[11px] px-2 py-0.5": size === "sm",
          "text-xs px-2.5 py-0.5": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
