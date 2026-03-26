import { cn, formatCurrency } from "@/lib/utils";
import { Shield } from "lucide-react";

interface ExposureCardProps {
  totalExposure: number;
  maxExposure: number;
  className?: string;
}

export function ExposureCard({ totalExposure, maxExposure, className }: ExposureCardProps) {
  const pct = maxExposure > 0 ? (totalExposure / maxExposure) * 100 : 0;

  return (
    <div className={cn("bg-card/40 border border-white/[0.06] rounded-2xl p-4", className)}>
      <div className="flex items-center gap-2 mb-3">
        <Shield size={18} className="text-accent" />
        <span className="text-sm text-muted/60">Exposição</span>
      </div>
      <div className="text-2xl font-semibold mb-2">{formatCurrency(totalExposure)}</div>
      <div className="w-full h-2 bg-background rounded-full overflow-hidden mb-1">
        <div
          className={cn(
            "h-full rounded-full transition-all",
            pct > 80 ? "bg-danger" : pct > 50 ? "bg-warning" : "bg-accent"
          )}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
      <p className="text-xs text-muted/60">{pct.toFixed(0)}% do limite de {formatCurrency(maxExposure)}</p>
    </div>
  );
}
