"use client";

import Link from "next/link";
import { cn, formatNumber, formatPercent } from "@/lib/utils";
import type { Market } from "@/lib/mock-data";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MarketRowProps {
  market: Market;
  className?: string;
}

export function MarketRow({ market, className }: MarketRowProps) {
  const change = market.yesPrice - market.previousYesPrice;
  const isUp = change > 0;

  return (
    <Link
      href={`/markets/${market.series}/${market.slug}`}
      className={cn(
        "flex items-center gap-4 px-4 py-3 hover:bg-white/[0.02] transition-all duration-200 border-b border-white/[0.03]",
        className
      )}
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate tracking-tight">{market.title}</p>
        <p className="text-[11px] text-muted/50">{market.category} · ${formatNumber(market.volume)} Vol</p>
      </div>
      <div className="flex items-center gap-3">
        <div className={cn("flex items-center gap-1 text-xs font-medium", isUp ? "text-yes" : "text-no")}>
          {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {formatPercent(change)}
        </div>
        <div className="text-sm font-semibold text-yes w-14 text-right">{market.yesPrice}¢</div>
        <div className="text-sm font-semibold text-no w-14 text-right">{market.noPrice}¢</div>
      </div>
    </Link>
  );
}
