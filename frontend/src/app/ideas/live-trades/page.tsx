"use client";

import { useState } from "react";
import { LiveTradeItem } from "@/components/social/live-trade-item";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/mock-data";
import { Zap, Radio } from "lucide-react";

const MOCK_LIVE_TRADES = [
  { id: "lt1", username: "trader_joe", marketTitle: "Candidato A vencerá as eleições de 2026?", side: "yes" as const, amount: 500, price: 62, time: "Agora", category: "politics" },
  { id: "lt2", username: "crypto_whale", marketTitle: "Bitcoin acima de $100K até final de março?", side: "no" as const, amount: 1200, price: 55, time: "12s atrás", category: "crypto" },
  { id: "lt3", username: "sports_fan99", marketTitle: "Campeão da Champions League 2026", side: "yes" as const, amount: 250, price: 28, time: "30s atrás", category: "sports" },
  { id: "lt4", username: "macro_mike", marketTitle: "Corte de juros do Fed em abril de 2026?", side: "yes" as const, amount: 800, price: 35, time: "45s atrás", category: "economics" },
  { id: "lt5", username: "film_buff", marketTitle: "Oscar de Melhor Filme 2026", side: "no" as const, amount: 150, price: 45, time: "1m atrás", category: "entertainment" },
  { id: "lt6", username: "green_trader", marketTitle: "Novo recorde global de temperatura em 2026?", side: "yes" as const, amount: 350, price: 72, time: "1m atrás", category: "climate" },
  { id: "lt7", username: "data_driven", marketTitle: "Candidato A vencerá as eleições de 2026?", side: "no" as const, amount: 2000, price: 38, time: "2m atrás", category: "politics" },
  { id: "lt8", username: "whale_alert", marketTitle: "Bitcoin acima de $100K até final de março?", side: "yes" as const, amount: 5000, price: 45, time: "3m atrás", category: "crypto" },
];

export default function LiveTradesPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filtered =
    categoryFilter === "all"
      ? MOCK_LIVE_TRADES
      : MOCK_LIVE_TRADES.filter((t) => t.category === categoryFilter);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-accent/[0.1] border border-accent/[0.15] flex items-center justify-center">
            <Zap size={18} className="text-accent" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-background" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Negociações ao Vivo</h1>
            <p className="text-sm text-muted/50 flex items-center gap-1.5">
              <Radio size={12} className="text-green-500 animate-pulse" />
              {filtered.length} negociações recentes
            </p>
          </div>
        </div>
      </div>

      {/* Category filter — responsive scroll with fade hints */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none sm:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none sm:hidden" />
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-1 px-1">
          <Button
            variant={categoryFilter === "all" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setCategoryFilter("all")}
            className={categoryFilter === "all"
              ? "shrink-0"
              : "shrink-0 border border-white/[0.06] bg-white/[0.02] text-muted/60 hover:text-foreground hover:bg-white/[0.05]"
            }
          >
            Todos
          </Button>
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.slug}
              variant={categoryFilter === cat.slug ? "primary" : "ghost"}
              size="sm"
              onClick={() => setCategoryFilter(cat.slug)}
              className={categoryFilter === cat.slug
                ? "shrink-0"
                : "shrink-0 border border-white/[0.06] bg-white/[0.02] text-muted/60 hover:text-foreground hover:bg-white/[0.05]"
              }
            >
              <span className="mr-1">{cat.icon}</span> {cat.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Trades list */}
      <div className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden relative">
        {/* Animated accent line */}
        <div className="absolute inset-x-0 top-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-accent/60 to-transparent animate-pulse" />
        </div>

        {/* List header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/[0.04]">
          <span className="text-[11px] uppercase tracking-wider text-muted/40 font-medium">Negociação</span>
          <span className="text-[11px] uppercase tracking-wider text-muted/40 font-medium">Valor</span>
        </div>

        {filtered.length > 0 ? (
          <div className="divide-y divide-white/[0.03]">
            {filtered.map((trade) => (
              <LiveTradeItem
                key={trade.id}
                username={trade.username}
                marketTitle={trade.marketTitle}
                side={trade.side}
                amount={trade.amount}
                price={trade.price}
                time={trade.time}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-3">
              <Zap size={20} className="text-muted/30" />
            </div>
            <p className="text-sm text-muted/50">Nenhuma negociação nesta categoria.</p>
            <Button variant="ghost" size="sm" className="mt-3 text-muted/40" onClick={() => setCategoryFilter("all")}>
              Ver todas as negociações
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
