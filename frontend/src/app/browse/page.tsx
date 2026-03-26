"use client";

import { useState, useMemo } from "react";
import { MOCK_MARKETS, CATEGORIES } from "@/lib/mock-data";
import { MarketCard } from "@/components/market/market-card";
import { Chip } from "@/components/ui/chips";
import { Select } from "@/components/ui/select";
import { Search } from "lucide-react";

const SORT_OPTIONS = [
  { value: "popular", label: "Mais Popular" },
  { value: "newest", label: "Mais Recentes" },
  { value: "ending", label: "Encerrando em Breve" },
  { value: "volume", label: "Maior Volume" },
  { value: "price-asc", label: "Preço: Menor → Maior" },
  { value: "price-desc", label: "Preço: Maior → Menor" },
];

const FREQUENCY_OPTIONS = [
  { value: "all", label: "Todos os Mercados" },
  { value: "daily", label: "Diário" },
  { value: "weekly", label: "Semanal" },
  { value: "monthly", label: "Mensal" },
];

export default function BrowsePage() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("popular");
  const [frequency, setFrequency] = useState("all");

  const filtered = useMemo(() => {
    let markets = [...MOCK_MARKETS];

    if (category !== "all") {
      markets = markets.filter((m) => m.category === category);
    }

    switch (sort) {
      case "volume":
        markets.sort((a, b) => b.volume - a.volume);
        break;
      case "ending":
        markets.sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());
        break;
      case "price-asc":
        markets.sort((a, b) => a.yesPrice - b.yesPrice);
        break;
      case "price-desc":
        markets.sort((a, b) => b.yesPrice - a.yesPrice);
        break;
      case "newest":
        markets.sort((a, b) => Number(b.id) - Number(a.id));
        break;
    }

    return markets;
  }, [category, sort, frequency]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Explorar Mercados</h1>
        <p className="text-muted/60 text-sm">
          Explore {MOCK_MARKETS.length} mercados de previsão em {CATEGORIES.length} categorias
        </p>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-white/[0.04]">
        <div className="px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
          {/* Category chips */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 items-center">
            <Chip
              label="Todos"
              active={category === "all"}
              onClick={() => setCategory("all")}
            />
            {CATEGORIES.map((cat) => (
              <Chip
                key={cat.slug}
                label={`${cat.icon} ${cat.name}`}
                active={category === cat.slug}
                onClick={() => setCategory(cat.slug)}
              />
            ))}
          </div>

          {/* Sort & frequency row */}
          <div className="flex gap-3 mt-2">
            <Select
              options={SORT_OPTIONS}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-44"
            />
            <Select
              options={FREQUENCY_OPTIONS}
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-36"
            />
          </div>
        </div>
      </div>

      {/* Market grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="text-muted/60 mb-4" size={48} />
            <h3 className="text-lg font-medium mb-1">Nenhum mercado encontrado</h3>
            <p className="text-sm text-muted/60">Tente ajustar seus filtros</p>
          </div>
        )}
      </div>
    </div>
  );
}
