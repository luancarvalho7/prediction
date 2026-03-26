"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MOCK_MARKETS, CATEGORIES } from "@/lib/mock-data";
import { MarketCard } from "@/components/market/market-card";
import { MarketHero } from "@/components/market/market-hero";
import { TrendingSidebar } from "@/components/market/trending-sidebar";
import { Chip } from "@/components/ui/chips";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Zap, Shield, BarChart3, Landmark, Vote,
  Bitcoin, Trophy, Film, Cpu, DollarSign, CloudSun, HeartPulse,
  TrendingUp, Newspaper, Users, Scale, Globe, Lightbulb, Gavel,
} from "lucide-react";

/* ── Per-category banner cards ─────────────────────────── */
interface BannerCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const CATEGORY_BANNERS: Record<string, BannerCard[]> = {
  politics: [
    { title: "Eleições 2026", description: "Todos os mercados sobre as eleições brasileiras", href: "/category/politics", icon: <Vote size={18} /> },
    { title: "Legislação", description: "Projetos de lei e votações no Congresso", href: "/category/politics", icon: <Gavel size={18} /> },
    { title: "Relações Internacionais", description: "Geopolítica e diplomacia global", href: "/category/politics", icon: <Globe size={18} /> },
  ],
  crypto: [
    { title: "Preços de Cripto", description: "Previsões de preço para as principais criptomoedas", href: "/category/crypto", icon: <Bitcoin size={18} /> },
    { title: "Regulamentação", description: "Decisões regulatórias sobre cripto no mundo", href: "/category/crypto", icon: <Scale size={18} /> },
    { title: "DeFi & ETFs", description: "Adoção institucional e produtos financeiros", href: "/category/crypto", icon: <Landmark size={18} /> },
  ],
  sports: [
    { title: "Futebol", description: "Champions League, Copa do Mundo e mais", href: "/category/sports", icon: <Trophy size={18} /> },
    { title: "MMA & UFC", description: "Eventos e resultados de lutas", href: "/category/sports", icon: <Users size={18} /> },
    { title: "NBA & Basquete", description: "Temporada, playoffs e prêmios", href: "/category/sports", icon: <TrendingUp size={18} /> },
  ],
  entertainment: [
    { title: "Cinema & Prêmios", description: "Oscar, Globo de Ouro e festivais", href: "/category/entertainment", icon: <Film size={18} /> },
    { title: "Games", description: "Lançamentos e vendas de jogos", href: "/category/entertainment", icon: <Lightbulb size={18} /> },
    { title: "Streaming & TV", description: "Netflix, Disney+ e plataformas", href: "/category/entertainment", icon: <Newspaper size={18} /> },
  ],
  science: [
    { title: "Inteligência Artificial", description: "Lançamentos, marcos e regulação de IA", href: "/category/science", icon: <Cpu size={18} /> },
    { title: "Exploração Espacial", description: "SpaceX, NASA e missões espaciais", href: "/category/science", icon: <Globe size={18} /> },
    { title: "Computação Quântica", description: "Avanços em tecnologia quântica", href: "/category/science", icon: <Lightbulb size={18} /> },
  ],
  economics: [
    { title: "Taxas de Juros", description: "Decisões do Fed, BCE e bancos centrais", href: "/category/economics", icon: <DollarSign size={18} /> },
    { title: "Bolsa & Ações", description: "S&P 500, Ibovespa e mercados globais", href: "/category/economics", icon: <BarChart3 size={18} /> },
    { title: "Commodities", description: "Petróleo, ouro e matérias-primas", href: "/category/economics", icon: <Landmark size={18} /> },
  ],
  climate: [
    { title: "Temperatura Global", description: "Recordes e tendências climáticas", href: "/category/climate", icon: <CloudSun size={18} /> },
    { title: "Eventos Extremos", description: "Furacões, secas e desastres naturais", href: "/category/climate", icon: <Zap size={18} /> },
    { title: "Política Climática", description: "COP, acordos e metas de carbono", href: "/category/climate", icon: <Shield size={18} /> },
  ],
  health: [
    { title: "Pandemias", description: "Declarações de emergência da OMS", href: "/category/health", icon: <HeartPulse size={18} /> },
    { title: "Aprovações FDA", description: "Novos medicamentos e tratamentos", href: "/category/health", icon: <Shield size={18} /> },
    { title: "Farmacêutica", description: "Vendas e tendências do mercado pharma", href: "/category/health", icon: <TrendingUp size={18} /> },
  ],
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  politics: <Landmark size={14} className="text-accent" />,
  crypto: <Bitcoin size={14} className="text-accent" />,
  sports: <Trophy size={14} className="text-accent" />,
  entertainment: <Film size={14} className="text-accent" />,
  science: <Cpu size={14} className="text-accent" />,
  economics: <DollarSign size={14} className="text-accent" />,
  climate: <CloudSun size={14} className="text-accent" />,
  health: <HeartPulse size={14} className="text-accent" />,
};

const SUBCATEGORIES: Record<string, string[]> = {
  politics: ["Eleições", "Legislação", "Internacional"],
  crypto: ["Bitcoin", "Ethereum", "Regulação", "DeFi"],
  sports: ["Futebol", "Basquete", "MMA", "Esports"],
  entertainment: ["Filmes", "Música", "Games", "Streaming"],
  science: ["IA", "Espaço", "Biotech"],
  economics: ["Juros", "Bolsa", "Inflação", "Commodities"],
  climate: ["Temperatura", "Desastres", "Política"],
  health: ["Pandemias", "FDA", "Farmacêutica"],
};

const SORT_OPTIONS = [
  { value: "popular", label: "Mais Popular" },
  { value: "newest", label: "Mais Recentes" },
  { value: "ending", label: "Encerrando em Breve" },
  { value: "volume", label: "Maior Volume" },
];

export default function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const category = CATEGORIES.find((c) => c.slug === slug);
  const subcategories = SUBCATEGORIES[slug] ?? [];
  const banners = CATEGORY_BANNERS[slug] ?? [];

  const [activeSub, setActiveSub] = useState("all");
  const [sort, setSort] = useState("popular");

  const allCategoryMarkets = useMemo(
    () => MOCK_MARKETS.filter((m) => m.category === slug),
    [slug]
  );

  const filtered = useMemo(() => {
    let markets = [...allCategoryMarkets];

    if (activeSub !== "all") {
      markets = markets.filter(
        (m) => m.subcategory?.toLowerCase() === activeSub.toLowerCase()
      );
    }

    switch (sort) {
      case "volume":
        markets.sort((a, b) => b.volume - a.volume);
        break;
      case "ending":
        markets.sort(
          (a, b) =>
            new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
        );
        break;
      case "newest":
        markets.sort((a, b) => Number(b.id) - Number(a.id));
        break;
    }

    return markets;
  }, [allCategoryMarkets, activeSub, sort]);

  const featured = allCategoryMarkets[0];
  const topMovers = allCategoryMarkets.slice(1, 5);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-14">
      {/* ── Hero + Trending Sidebar ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {/* Category Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/[0.08] border border-accent/[0.12] flex items-center justify-center">
              {CATEGORY_ICONS[slug] ?? <BarChart3 size={14} className="text-accent" />}
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                {category ? `${category.icon} ${category.name}` : "Categoria"}
              </h1>
              <p className="text-[13px] text-muted/50">
                {category ? `${category.count} mercados` : "Explorar mercados nesta categoria"}
              </p>
            </div>
          </div>

          {/* Hero market */}
          {featured && <MarketHero market={featured} />}
        </div>
        <TrendingSidebar />
      </div>

      {/* ── Banner Cards ── */}
      {banners.length > 0 && (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {banners.map((banner) => (
              <Link
                key={banner.title}
                href={banner.href}
                className="flex items-start gap-3 bg-accent/[0.04] border border-accent/[0.08] rounded-2xl p-4 hover:bg-accent/[0.08] hover:border-accent/[0.14] transition-all duration-300 group"
              >
                <div className="p-2 bg-accent/[0.1] border border-accent/[0.15] rounded-xl text-accent shrink-0">
                  {banner.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold tracking-tight group-hover:text-foreground transition-colors">{banner.title}</h3>
                  <p className="text-[11px] text-muted/50 leading-relaxed mt-0.5">{banner.description}</p>
                </div>
                <ArrowRight size={14} className="text-muted/30 mt-1 shrink-0 group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Top Movers in Category ── */}
      {topMovers.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-warning/[0.08] border border-warning/[0.12] flex items-center justify-center">
                <Zap size={13} className="text-warning" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight">Maiores Movimentos</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topMovers.map((m) => (
              <MarketCard key={m.id} market={m} />
            ))}
          </div>
        </section>
      )}

      {/* ── All Markets with Filters ── */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold tracking-tight">Todos os Mercados</h2>
          <span className="text-[13px] text-muted/40">{filtered.length} mercados</span>
        </div>

        {/* Subcategory chips + sort */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <Chip
            label="Todos"
            active={activeSub === "all"}
            onClick={() => setActiveSub("all")}
          />
          {subcategories.map((sub) => (
            <Chip
              key={sub}
              label={sub}
              active={activeSub === sub}
              onClick={() => setActiveSub(sub)}
            />
          ))}
          <div className="ml-auto">
            <Select
              options={SORT_OPTIONS}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-44"
            />
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4">
              <BarChart3 size={20} className="text-muted/40" />
            </div>
            <h3 className="text-sm font-medium mb-1">Nenhum mercado encontrado</h3>
            <p className="text-[13px] text-muted/50">Tente ajustar seus filtros</p>
          </div>
        )}
      </section>

      {/* ── Other Categories ── */}
      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-5">Explorar Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CATEGORIES.filter((c) => c.slug !== slug).map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="bg-card/40 border border-white/[0.06] rounded-2xl p-3.5 text-center hover:bg-card-hover hover:border-white/[0.1] transition-all duration-300 group"
            >
              <div className="text-2xl mb-1.5">{cat.icon}</div>
              <p className="text-xs font-medium group-hover:text-foreground transition-colors tracking-tight">{cat.name}</p>
              <p className="text-[10px] text-muted/40">{cat.count} mercados</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Promo / CTA ── */}
      <section className="relative overflow-hidden bg-card/40 border border-white/[0.06] rounded-3xl p-8 lg:p-12 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/[0.06] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/[0.03] blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="text-xl font-semibold tracking-tight mb-2">Negocie em {category?.name ?? "Mercados"}</h2>
          <p className="text-muted/60 text-sm mb-6 max-w-md mx-auto">
            Crie sua conta e comece a negociar em mercados de {category?.name.toLowerCase() ?? "previsão"} hoje.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/signup">
              <Button variant="primary" size="lg">Criar Conta</Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg">Experimentar Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
