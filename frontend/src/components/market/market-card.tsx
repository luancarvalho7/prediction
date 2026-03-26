"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatNumber, formatPercent } from "@/lib/utils";
import type { Market } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MarketCardProps {
  market: Market;
  className?: string;
}

export function MarketCard({ market, className }: MarketCardProps) {
  const change = market.yesPrice - market.previousYesPrice;
  const isUp = change > 0;

  return (
    <Link
      href={`/markets/${market.series}/${market.slug}`}
      className={cn(
        "block bg-card/60 border border-white/[0.06] rounded-2xl p-4 hover:bg-card-hover hover:border-white/[0.1] transition-all duration-300 group hover:glow-sm",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <Badge variant="default">{market.category}</Badge>
        <div className={cn("flex items-center gap-1 text-xs font-medium", isUp ? "text-yes" : "text-no")}>
          {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {formatPercent(change)}
        </div>
      </div>

      <h3 className="font-medium text-sm mb-3 group-hover:text-foreground transition-colors line-clamp-2 text-foreground/90 tracking-tight">
        {market.title}
      </h3>

      <div className="flex gap-2 mb-3">
        <div className="flex-1 bg-yes/[0.06] border border-yes/[0.12] rounded-xl px-3 py-2 text-center">
          <div className="text-[10px] text-yes/60 uppercase tracking-wider">Sim</div>
          <div className="font-semibold text-yes text-sm">{market.yesPrice}¢</div>
        </div>
        <div className="flex-1 bg-no/[0.06] border border-no/[0.12] rounded-xl px-3 py-2 text-center">
          <div className="text-[10px] text-no/60 uppercase tracking-wider">Não</div>
          <div className="font-semibold text-no text-sm">{market.noPrice}¢</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-muted/50">
        <span>${formatNumber(market.volume)} Vol</span>
        <span>{new Date(market.endDate).toLocaleDateString()}</span>
      </div>
    </Link>
  );
}
