"use client";

import Link from "next/link";
import { BalanceCard } from "@/components/portfolio/balance-card";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ArrowUpFromLine, CreditCard, History, Wallet } from "lucide-react";

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Carteira</h1>

        {/* Balance cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <BalanceCard
            title="Saldo em Caixa"
            amount={5420}
            icon={<Wallet size={18} className="text-accent" />}
          />
          <BalanceCard
            title="Pendente"
            amount={150}
            icon={<History size={18} className="text-warning" />}
          />
          <BalanceCard
            title="Bloqueado"
            amount={0}
            icon={<CreditCard size={18} className="text-muted/60" />}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-8">
          <Link href="/wallet/deposit" className="flex-1">
            <Button variant="primary" size="lg" className="w-full">
              <ArrowDownToLine size={18} className="mr-2" />
              Depositar Fundos
            </Button>
          </Link>
          <Link href="/wallet/withdraw" className="flex-1">
            <Button variant="outline" size="lg" className="w-full">
              <ArrowUpFromLine size={18} className="mr-2" />
              Sacar Fundos
            </Button>
          </Link>
        </div>

        {/* Quick links */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl divide-y divide-border">
          <Link href="/wallet/payment-methods" className="flex items-center justify-between px-4 py-4 hover:bg-card-hover transition-colors">
            <div className="flex items-center gap-3">
              <CreditCard size={18} className="text-muted/60" />
              <span className="text-sm">Métodos de Pagamento</span>
            </div>
            <span className="text-muted/60 text-sm">→</span>
          </Link>
          <Link href="/wallet/history" className="flex items-center justify-between px-4 py-4 hover:bg-card-hover transition-colors">
            <div className="flex items-center gap-3">
              <History size={18} className="text-muted/60" />
              <span className="text-sm">Histórico de Financiamento</span>
            </div>
            <span className="text-muted/60 text-sm">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
