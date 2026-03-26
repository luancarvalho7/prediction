"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { MOCK_MARKETS, CATEGORIES } from "@/lib/mock-data";
import { MarketCard } from "@/components/market/market-card";
import { Chip } from "@/components/ui/chips";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/ui/empty-state";
import { Search as SearchIcon, X, Clock } from "lucide-react";

const MAX_RECENT = 5;

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    let markets = MOCK_MARKETS.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.tags.some((t) => t.toLowerCase().includes(q)) ||
        m.category.toLowerCase().includes(q)
    );

    if (categoryFilter !== "all") {
      markets = markets.filter((m) => m.category === categoryFilter);
    }

    return markets;
  }, [query, categoryFilter]);

  const matchedCategories = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return CATEGORIES.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  function handleSearch(value: string) {
    setQuery(value);
    if (value.trim() && !recentSearches.includes(value.trim())) {
      setRecentSearches((prev) => [value.trim(), ...prev].slice(0, MAX_RECENT));
    }
  }

  function removeRecent(term: string) {
    setRecentSearches((prev) => prev.filter((s) => s !== term));
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Buscar Mercados</h1>

        {/* Search input */}
        <div className="relative mb-6">
          <SearchIcon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/60 pointer-events-none"
          />
          <Input
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar por nome, tag ou categoria..."
            className="pl-10 pr-10"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/60 hover:text-foreground cursor-pointer"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Recent searches */}
        {!query.trim() && recentSearches.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-medium text-muted/60 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Clock size={12} /> Buscas Recentes
            </h2>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((term) => (
                <Chip
                  key={term}
                  label={term}
                  removable
                  onClick={() => setQuery(term)}
                  onRemove={() => removeRecent(term)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category tag matches */}
        {query.trim() && matchedCategories.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-muted/60 mb-2">Categorias</p>
            <div className="flex gap-2">
              {matchedCategories.map((cat) => (
                <Chip
                  key={cat.slug}
                  label={`${cat.icon} ${cat.name}`}
                  active={categoryFilter === cat.slug}
                  onClick={() =>
                    setCategoryFilter(categoryFilter === cat.slug ? "all" : cat.slug)
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Filter bar */}
        {query.trim() && results.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <Chip
              label="Todos"
              active={categoryFilter === "all"}
              onClick={() => setCategoryFilter("all")}
            />
            {CATEGORIES.filter((c) =>
              results.some((r) => r.category === c.slug)
            ).map((cat) => (
              <Chip
                key={cat.slug}
                label={cat.name}
                active={categoryFilter === cat.slug}
                onClick={() =>
                  setCategoryFilter(categoryFilter === cat.slug ? "all" : cat.slug)
                }
              />
            ))}
            <span className="text-xs text-muted/60 ml-auto">{results.length} resultados</span>
          </div>
        )}

        {/* Results */}
        {query.trim() ? (
          results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
              {results.map((market) => (
                <MarketCard key={market.id} market={market} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Nenhum resultado encontrado"
              description={`Não encontramos nenhum mercado correspondente a "${query}". Tente um termo de busca diferente.`}
            />
          )
        ) : (
          <div className="text-center py-20">
            <SearchIcon className="mx-auto text-muted/60 mb-4" size={48} />
            <p className="text-muted/60 text-sm">Comece a digitar para buscar mercados</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted/60">Carregando...</div>}>
      <SearchContent />
    </Suspense>
  );
}
