import { cn, formatCurrency } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PnlCardProps {
  realized: number;
  unrealized: number;
  className?: string;
}

export function PnlCard({ realized, unrealized, className }: PnlCardProps) {
  const total = realized + unrealized;
  const isUp = total >= 0;

  return (
    <div className={cn("bg-card/40 border border-white/[0.06] rounded-2xl p-4", className)}>
      <div className="flex items-center gap-2 mb-3">
        {isUp ? <TrendingUp className="text-yes" size={18} /> : <TrendingDown className="text-no" size={18} />}
        <span className="text-sm text-muted/60">L&P</span>
      </div>
      <div className={cn("text-2xl font-semibold mb-3", isUp ? "text-yes" : "text-no")}>
        {isUp ? "+" : ""}{formatCurrency(total)}
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-muted/60 block text-xs">Realizado</span>
          <span className={realized >= 0 ? "text-yes" : "text-no"}>
            {realized >= 0 ? "+" : ""}{formatCurrency(realized)}
          </span>
        </div>
        <div>
          <span className="text-muted/60 block text-xs">Não realizado</span>
          <span className={unrealized >= 0 ? "text-yes" : "text-no"}>
            {unrealized >= 0 ? "+" : ""}{formatCurrency(unrealized)}
          </span>
        </div>
      </div>
    </div>
  );
}
