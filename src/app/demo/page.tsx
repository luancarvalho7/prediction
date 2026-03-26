"use client";

import Link from "next/link";
import { BalanceCard } from "@/components/portfolio/balance-card";
import { Button } from "@/components/ui/button";
import { PlayCircle, DollarSign, LayoutDashboard, ArrowRight } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Conta Demo</h1>
        <p className="text-muted/60 text-sm mt-1">
          Pratique o trading sem risco. Use fundos virtuais para explorar a plataforma e construir sua estratégia.
        </p>
      </div>

      {/* Demo Balance */}
      <BalanceCard
        title="Saldo Demo"
        amount={100000}
        icon={<PlayCircle size={20} className="text-accent" />}
      />

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/demo/funding" className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 hover:border-accent transition-colors group">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign size={20} className="text-accent" />
            <h3 className="font-semibold">Financiamento Demo</h3>
          </div>
          <p className="text-sm text-muted/60">Adicione ou redefina seu saldo virtual.</p>
          <span className="text-xs text-accent flex items-center gap-1 mt-3 group-hover:text-foreground transition-colors">
            Gerenciar Fundos <ArrowRight size={12} />
          </span>
        </Link>

        <Link href="/demo/dashboard" className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 hover:border-accent transition-colors group">
          <div className="flex items-center gap-3 mb-2">
            <LayoutDashboard size={20} className="text-accent" />
            <h3 className="font-semibold">Painel Demo</h3>
          </div>
          <p className="text-sm text-muted/60">Veja suas posições e ordens demo.</p>
          <span className="text-xs text-accent flex items-center gap-1 mt-3 group-hover:text-foreground transition-colors">
            Abrir Painel <ArrowRight size={12} />
          </span>
        </Link>
      </div>

      {/* Switch to Live */}
      <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm">Pronto para o real?</p>
          <p className="text-xs text-muted/60 mt-0.5">Mude para sua conta ao vivo para negociar com fundos reais.</p>
        </div>
        <Link href="/portfolio">
          <Button className="flex items-center gap-2">
            Mudar para Conta Real <ArrowRight size={14} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
