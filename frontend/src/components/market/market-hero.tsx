"use client";

import Link from "next/link";
import { cn, formatNumber, formatPercent } from "@/lib/utils";
import type { Market } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MarketHeroProps {
  market: Market;
  className?: string;
}

export function MarketHero({ market, className }: MarketHeroProps) {
  const change = market.yesPrice - market.previousYesPrice;
  const isUp = change > 0;

  return (
    <div
      className={cn(
        "relative bg-card/40 border border-white/[0.06] rounded-3xl p-6 lg:p-8 overflow-hidden",
        className
      )}
    >
      {/* Mesh gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.06] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="accent">Destaque</Badge>
          <Badge>{market.category}</Badge>
          <div className={cn("flex items-center gap-1 text-sm font-medium", isUp ? "text-yes" : "text-no")}>
            {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {formatPercent(change)}
          </div>
        </div>

        <h2 className="text-xl lg:text-2xl font-semibold mb-2 tracking-tight">{market.title}</h2>
        <p className="text-muted/60 text-sm mb-6 max-w-xl leading-relaxed">{market.description}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          <div className="bg-yes/[0.06] border border-yes/[0.12] rounded-2xl px-5 py-3 text-center min-w-[120px]">
            <div className="text-[10px] text-yes/50 mb-0.5 uppercase tracking-wider">Sim</div>
            <div className="text-2xl font-semibold text-yes">{market.yesPrice}¢</div>
          </div>
          <div className="bg-no/[0.06] border border-no/[0.12] rounded-2xl px-5 py-3 text-center min-w-[120px]">
            <div className="text-[10px] text-no/50 mb-0.5 uppercase tracking-wider">Não</div>
            <div className="text-2xl font-semibold text-no">{market.noPrice}¢</div>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl px-5 py-3 text-center min-w-[120px]">
            <div className="text-[10px] text-muted/50 mb-0.5 uppercase tracking-wider">Volume</div>
            <div className="text-lg font-semibold">${formatNumber(market.volume)}</div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href={`/markets/${market.series}/${market.slug}`}>
            <Button variant="primary" size="lg">Negociar Agora</Button>
          </Link>
          <Link href={`/markets/${market.series}/${market.slug}/rules`}>
            <Button variant="outline" size="lg">Ver Regras</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
