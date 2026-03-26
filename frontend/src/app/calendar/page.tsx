"use client";

import { useState, useMemo, useEffect } from "react";
import { MOCK_MARKETS, CATEGORIES } from "@/lib/mock-data";
import { MarketRow } from "@/components/market/market-row";
import { Chip } from "@/components/ui/chips";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import {
  CalendarDays,
  Clock,
  ArrowRight,
  Zap,
  TrendingUp,
  Radio,
  CalendarClock,
} from "lucide-react";
import Link from "next/link";
import { formatNumber } from "@/lib/utils";

/* ── helpers ───────────────────────────────────────────────── */

function groupByDate(markets: typeof MOCK_MARKETS) {
  const groups: Record<string, { iso: string; markets: typeof MOCK_MARKETS }> = {};

  for (const m of markets) {
    // use the raw ISO date as key for reliable sorting
    const d = new Date(m.endDate);
    const iso = m.endDate;
    const label = d.toLocaleDateString("pt-BR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    if (!groups[label]) groups[label] = { iso, markets: [] };
    groups[label].markets.push(m);
  }

  return Object.entries(groups)
    .sort(([, a], [, b]) => new Date(a.iso).getTime() - new Date(b.iso).getTime())
    .map(([label, { markets: items }]) => [label, items] as const);
}

function daysUntil(dateStr: string) {
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / 86_400_000));
}

/* ── page ──────────────────────────────────────────────────── */

export default function CalendarPage() {
  const [view, setView] = useState<"live" | "upcoming">("live");
  const [typeFilter, setTypeFilter] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const now = new Date();

  const markets = useMemo(() => {
    let list = [...MOCK_MARKETS];

    if (view === "live") {
      list = list.filter((m) => m.status === "open" && new Date(m.endDate) >= now);
    } else {
      list = list.filter((m) => new Date(m.endDate) > now);
      list.sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());
    }

    if (typeFilter !== "all") {
      list = list.filter((m) => m.category === typeFilter);
    }

    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, typeFilter]);

  const grouped = useMemo(() => groupByDate(markets), [markets]);

  // Stats
  const liveCount = MOCK_MARKETS.filter((m) => m.status === "open").length;
  const totalVolume = MOCK_MARKETS.reduce((s, m) => s + m.volume, 0);

  // Next upcoming market
  const nextMarket = useMemo(() => {
    return [...MOCK_MARKETS]
      .filter((m) => m.status === "open" && new Date(m.endDate) > now)
      .sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime())[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero header ─────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-white/[0.04]">
        {/* Glow blob */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full bg-accent/[0.07] blur-[100px]" />

        <div className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/[0.1] border border-accent/20">
              <CalendarDays className="text-accent" size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-gradient">
                Calendário de Mercados
              </h1>
              <p className="text-muted/60 text-sm">
                Acompanhe eventos ao vivo e futuros
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex items-center gap-5 mt-5">
            <div className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-muted/70">
                <span className="text-foreground font-medium">{liveCount}</span> ao vivo
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted/70">
              <TrendingUp size={14} className="text-accent/60" />
              <span className="text-foreground font-medium">${formatNumber(totalVolume)}</span> volume total
            </div>
            <div className="flex items-center gap-2 text-sm text-muted/70">
              <CalendarClock size={14} className="text-accent/60" />
              <span className="text-foreground font-medium">{MOCK_MARKETS.length}</span> mercados
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pt-6 max-w-5xl mx-auto">
        {/* ── View toggle ───────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <div className="inline-flex bg-card/80 rounded-xl p-1 border border-white/[0.06] shrink-0">
            <button
              onClick={() => setView("live")}
              className={`
                inline-flex items-center gap-2 px-4 h-8 text-sm rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0
                ${view === "live"
                  ? "bg-accent/[0.12] text-accent font-medium shadow-sm border border-accent/20"
                  : "text-muted hover:text-foreground/80 border border-transparent"
                }
              `}
            >
              <Radio size={14} className={view === "live" ? "animate-pulse" : ""} />
              Ao Vivo
              {view === "live" && (
                <Badge variant="accent" size="sm">{liveCount}</Badge>
              )}
            </button>
            <button
              onClick={() => setView("upcoming")}
              className={`
                inline-flex items-center gap-2 px-4 h-8 text-sm rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0
                ${view === "upcoming"
                  ? "bg-accent/[0.12] text-accent font-medium shadow-sm border border-accent/20"
                  : "text-muted hover:text-foreground/80 border border-transparent"
                }
              `}
            >
              <CalendarClock size={14} />
              Próximos
            </button>
          </div>

          {/* Category chips */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5 items-center">
            <Chip label="Todos" active={typeFilter === "all"} onClick={() => setTypeFilter("all")} />
            {CATEGORIES.map((cat) => (
              <Chip
                key={cat.slug}
                label={`${cat.icon} ${cat.name}`}
                active={typeFilter === cat.slug}
                onClick={() => setTypeFilter(cat.slug)}
              />
            ))}
          </div>
        </div>

        {/* ── Next Market Hero Card ─────────────────────── */}
        {nextMarket && (
          <div className="relative group mb-8 rounded-2xl overflow-hidden">
            {/* Glow ring */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-accent/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative glass glass-border rounded-2xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} className="text-warning" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-warning">
                      Próximo Evento
                    </span>
                    <Badge variant="accent" size="sm">
                      em {daysUntil(nextMarket.endDate)} dias
                    </Badge>
                  </div>
                  <p className="font-semibold text-base sm:text-lg leading-snug mb-2 tracking-tight">
                    {nextMarket.title}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted/60">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {new Date(nextMarket.endDate).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span>
                      ${formatNumber(nextMarket.volume)} Vol
                    </span>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted/50">Sim</span>
                    <span className="text-lg font-bold text-yes">{nextMarket.yesPrice}¢</span>
                    <span className="text-xs text-muted/30">|</span>
                    <span className="text-xs text-muted/50">Não</span>
                    <span className="text-lg font-bold text-no">{nextMarket.noPrice}¢</span>
                  </div>
                  <Link href={`/markets/${nextMarket.series}/${nextMarket.slug}`}>
                    <Button variant="primary" size="sm">
                      Negociar <ArrowRight size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Timeline list ─────────────────────────────── */}
        {grouped.length > 0 ? (
          <div
            className={`space-y-8 pb-16 transition-opacity duration-300 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            {grouped.map(([date, items], groupIdx) => {
              const isToday =
                new Date(items[0].endDate).toDateString() === now.toDateString();
              const days = daysUntil(items[0].endDate);

              return (
                <div key={date} className="relative pl-6 sm:pl-8">
                  {/* Timeline line */}
                  <div className="absolute left-[9px] sm:left-[13px] top-3 bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent" />

                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 sm:left-1 top-[5px] w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                      isToday
                        ? "border-accent bg-accent/20"
                        : groupIdx === 0
                          ? "border-accent/50 bg-accent/10"
                          : "border-white/10 bg-card"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isToday ? "bg-accent animate-pulse" : groupIdx === 0 ? "bg-accent/60" : "bg-white/20"
                      }`}
                    />
                  </div>

                  {/* Date header */}
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-sm font-medium text-foreground/90 capitalize">
                      {date}
                    </h2>
                    {isToday && (
                      <Badge variant="success" size="sm">Hoje</Badge>
                    )}
                    {!isToday && days <= 7 && (
                      <Badge variant="warning" size="sm">em {days}d</Badge>
                    )}
                    <span className="text-[11px] text-muted/40">
                      {items.length} {items.length === 1 ? "mercado" : "mercados"}
                    </span>
                  </div>

                  {/* Market cards */}
                  <div className="bg-card/50 border border-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm">
                    {items.map((market) => (
                      <MarketRow key={market.id} market={market} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <EmptyState
            title="Nenhum evento encontrado"
            description="Tente alterar a visualização ou o filtro para ver mais eventos."
          />
        )}
      </div>
    </div>
  );
}
