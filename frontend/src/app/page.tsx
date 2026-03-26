"use client";

import { MOCK_MARKETS, CATEGORIES } from "@/lib/mock-data";
import { MarketHero } from "@/components/market/market-hero";
import { MarketCard } from "@/components/market/market-card";
import { TrendingSidebar } from "@/components/market/trending-sidebar";
import { ComplianceCard } from "@/components/fairness/compliance-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Shield, BookOpen, BarChart3, Zap, ArrowRight, Scale, Lightbulb } from "lucide-react";

export default function HomePage() {
  const featured = MOCK_MARKETS[0];
  const topMovers = MOCK_MARKETS.slice(1, 5);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-14">
      {/* Hero + Trending Rail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MarketHero market={featured} />
        </div>
        <TrendingSidebar />
      </div>

      {/* Informational Banner Cards */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/markets-over-monopolies"
            className="flex items-start gap-3 bg-accent/[0.04] border border-accent/[0.08] rounded-2xl p-4 hover:bg-accent/[0.08] hover:border-accent/[0.14] transition-all duration-300 group"
          >
            <div className="p-2 bg-accent/[0.1] border border-accent/[0.15] rounded-xl text-accent shrink-0">
              <Scale size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[13px] font-semibold tracking-tight group-hover:text-foreground transition-colors">Mercados sobre Monopólios</h3>
              <p className="text-[11px] text-muted/50 leading-relaxed mt-0.5">Como mercados abertos protegem consumidores</p>
            </div>
            <ArrowRight size={14} className="text-muted/30 mt-1 shrink-0 group-hover:text-accent transition-colors" />
          </Link>
          <Link
            href="/responsible-trading"
            className="flex items-start gap-3 bg-accent/[0.04] border border-accent/[0.08] rounded-2xl p-4 hover:bg-accent/[0.08] hover:border-accent/[0.14] transition-all duration-300 group"
          >
            <div className="p-2 bg-accent/[0.1] border border-accent/[0.15] rounded-xl text-accent shrink-0">
              <Lightbulb size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[13px] font-semibold tracking-tight group-hover:text-foreground transition-colors">Negociação Responsável</h3>
              <p className="text-[11px] text-muted/50 leading-relaxed mt-0.5">Ferramentas e dicas para negociar de forma inteligente</p>
            </div>
            <ArrowRight size={14} className="text-muted/30 mt-1 shrink-0 group-hover:text-accent transition-colors" />
          </Link>
          <Link
            href="/market-integrity"
            className="flex items-start gap-3 bg-accent/[0.04] border border-accent/[0.08] rounded-2xl p-4 hover:bg-accent/[0.08] hover:border-accent/[0.14] transition-all duration-300 group"
          >
            <div className="p-2 bg-accent/[0.1] border border-accent/[0.15] rounded-xl text-accent shrink-0">
              <Shield size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[13px] font-semibold tracking-tight group-hover:text-foreground transition-colors">Integridade de Mercado</h3>
              <p className="text-[11px] text-muted/50 leading-relaxed mt-0.5">Como prevenimos insider trading</p>
            </div>
            <ArrowRight size={14} className="text-muted/30 mt-1 shrink-0 group-hover:text-accent transition-colors" />
          </Link>
        </div>
      </section>

      {/* Top Movers */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-warning/[0.08] border border-warning/[0.12] flex items-center justify-center">
              <Zap size={13} className="text-warning" />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">Maiores Movimentos</h2>
          </div>
          <Link href="/browse?sort=movers" className="text-[13px] text-muted/50 hover:text-foreground flex items-center gap-1 transition-colors">
            Ver Todos <ArrowRight size={13} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topMovers.map((m) => (
            <MarketCard key={m.id} market={m} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-5">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CATEGORIES.map((cat) => (
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

      {/* Market Grid by Category */}
      {["politics", "crypto", "sports"].map((catSlug) => {
        const cat = CATEGORIES.find((c) => c.slug === catSlug);
        const markets = MOCK_MARKETS.filter((m) => m.category === catSlug);
        if (!cat || markets.length === 0) return null;
        return (
          <section key={catSlug}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold tracking-tight">{cat.icon} {cat.name}</h2>
              <Link href={`/category/${catSlug}`} className="text-[13px] text-muted/50 hover:text-foreground flex items-center gap-1 transition-colors">
                Ver Todos <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {markets.map((m) => (
                <MarketCard key={m.id} market={m} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Fairness / Trust Cards */}
      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-5">Confiança & Transparência</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ComplianceCard
            title="Mercados sobre Monopólios"
            description="Saiba como mercados abertos geram melhores resultados do que sistemas centralizados."
            href="/markets-over-monopolies"
            icon={<BarChart3 size={20} />}
          />
          <ComplianceCard
            title="Negociação Responsável"
            description="Ferramentas e recursos para ajudá-lo a negociar com responsabilidade."
            href="/responsible-trading"
            icon={<Shield size={20} />}
          />
          <ComplianceCard
            title="Pesquisa"
            description="Pesquisa acadêmica e análise que sustentam nossos mercados."
            href="/research"
            icon={<BookOpen size={20} />}
          />
        </div>
      </section>

      {/* Promo Module */}
      <section className="relative overflow-hidden bg-card/40 border border-white/[0.06] rounded-3xl p-8 lg:p-12 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/[0.06] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/[0.03] blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="text-xl font-semibold tracking-tight mb-2">Comece a Negociar Hoje</h2>
          <p className="text-muted/60 text-sm mb-6 max-w-md mx-auto">
            Crie sua conta em minutos e tenha acesso a centenas de mercados de previsão.
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
