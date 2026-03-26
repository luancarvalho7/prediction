"use client";

import { cn } from "@/lib/utils";

interface MarketChartProps {
  className?: string;
  timeRange?: string;
  onTimeRangeChange?: (range: string) => void;
}

const RANGES = ["1H", "6H", "1D", "1W", "1M", "ALL"];

export function MarketChart({ className, timeRange = "1D", onTimeRangeChange }: MarketChartProps) {
  // Placeholder chart - in production, use a charting library like lightweight-charts
  const points = Array.from({ length: 50 }, (_, i) => ({
    x: i,
    y: 40 + Math.sin(i / 5) * 15 + Math.random() * 8,
  }));

  const maxY = Math.max(...points.map((p) => p.y));
  const minY = Math.min(...points.map((p) => p.y));
  const range = maxY - minY || 1;

  const pathD = points
    .map((p, i) => {
      const x = (p.x / 49) * 100;
      const y = 100 - ((p.y - minY) / range) * 80 - 10;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaD = pathD + ` L 100 100 L 0 100 Z`;

  return (
    <div className={cn("bg-card/40 border border-white/[0.06] rounded-2xl p-4", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted/60">Histórico de Preço</h3>
        <div className="flex gap-1">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => onTimeRangeChange?.(r)}
              className={cn(
                "px-2 py-1 text-xs rounded-md transition-all cursor-pointer",
                r === timeRange
                  ? "bg-accent text-black font-medium"
                  : "text-muted/60 hover:text-foreground"
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox="0 0 100 100" className="w-full h-48" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#chartGrad)" />
        <path d={pathD} fill="none" stroke="var(--accent)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
