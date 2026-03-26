"use client";

import Link from "next/link";
import { MOCK_POSITIONS, MOCK_ORDERS } from "@/lib/mock-data";
import { BalanceCard } from "@/components/portfolio/balance-card";
import { PnlCard } from "@/components/portfolio/pnl-card";
import { ExposureCard } from "@/components/portfolio/exposure-card";
import { PositionTable } from "@/components/portfolio/position-table";
import { OrderTable } from "@/components/portfolio/order-table";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Portfólio</h1>
          <div className="flex gap-3">
            <Link href="/wallet/deposit">
              <Button variant="primary" size="sm">
                <ArrowDownToLine size={14} className="mr-1.5" />
                Depositar
              </Button>
            </Link>
            <Link href="/wallet/withdraw">
              <Button variant="outline" size="sm">
                <ArrowUpFromLine size={14} className="mr-1.5" />
                Sacar
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <BalanceCard title="Saldo Total" amount={5420} change={120} />
          <PnlCard realized={340} unrealized={85} />
          <ExposureCard totalExposure={2100} maxExposure={10000} />
        </div>

        {/* Recent Positions */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl mb-6">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
            <h2 className="font-semibold">Posições Recentes</h2>
            <Link href="/portfolio/positions" className="text-sm text-accent hover:text-accent-hover flex items-center gap-1">
              Ver tudo <ArrowRight size={14} />
            </Link>
          </div>
          <PositionTable positions={MOCK_POSITIONS} />
        </div>

        {/* Recent Orders */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl mb-6">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
            <h2 className="font-semibold">Ordens Recentes</h2>
            <Link href="/portfolio/orders" className="text-sm text-accent hover:text-accent-hover flex items-center gap-1">
              Ver tudo <ArrowRight size={14} />
            </Link>
          </div>
          <OrderTable orders={MOCK_ORDERS} />
        </div>

        {/* Quick links */}
        <div className="flex gap-3">
          <Link href="/portfolio/positions" className="text-sm text-muted/60 hover:text-foreground transition-colors">
            Posições →
          </Link>
          <Link href="/portfolio/orders" className="text-sm text-muted/60 hover:text-foreground transition-colors">
            Ordens →
          </Link>
          <Link href="/portfolio/history" className="text-sm text-muted/60 hover:text-foreground transition-colors">
            Histórico de Operações →
          </Link>
        </div>
      </div>
    </div>
  );
}
