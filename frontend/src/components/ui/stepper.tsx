import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  current: number;
  className?: string;
}

export function Stepper({ steps, current, className }: StepperProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all duration-200",
                i < current
                  ? "bg-accent border-accent text-white"
                  : i === current
                  ? "border-accent text-accent shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                  : "border-white/[0.1] text-muted/60"
              )}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className={cn(
                "text-sm hidden sm:block",
                i <= current ? "text-foreground" : "text-muted/60"
              )}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "w-8 h-0.5 mx-1",
                i < current ? "bg-accent" : "bg-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
