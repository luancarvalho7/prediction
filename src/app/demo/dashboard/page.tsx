"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PositionTable } from "@/components/portfolio/position-table";
import { OrderTable } from "@/components/portfolio/order-table";
import { BalanceCard } from "@/components/portfolio/balance-card";
import { PlayCircle, ArrowRight, BarChart3, ClipboardList } from "lucide-react";
import type { Position, Order } from "@/lib/mock-data";

const DEMO_POSITIONS: Position[] = [
  { id: "dp1", marketId: "demo-btc", marketTitle: "Bitcoin > $100K by June?", side: "yes", size: 500, avgPrice: 0.62, currentPrice: 0.71, unrealizedPnl: 45, status: "open" },
  { id: "dp2", marketId: "demo-election", marketTitle: "Party X wins 2026 midterms?", side: "no", size: 300, avgPrice: 0.45, currentPrice: 0.38, unrealizedPnl: 21, status: "open" },
  { id: "dp3", marketId: "demo-fed", marketTitle: "Fed rate cut in Q3 2026?", side: "yes", size: 200, avgPrice: 0.55, currentPrice: 0.52, unrealizedPnl: -6, status: "open" },
];

const DEMO_ORDERS: Order[] = [
  { id: "do1", marketId: "demo-btc", marketTitle: "Bitcoin > $100K by June?", side: "yes", type: "limit", price: 0.6, size: 100, filled: 0, status: "open", createdAt: "2026-03-25T10:00:00Z" },
  { id: "do2", marketId: "demo-ai", marketTitle: "AGI announced by 2027?", side: "no", type: "limit", price: 0.8, size: 250, filled: 50, status: "partial", createdAt: "2026-03-24T15:30:00Z" },
];

export default function DemoDashboardPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold">Demo Trading Dashboard</h1>
          <Badge variant="warning">DEMO MODE</Badge>
        </div>
        <Link href="/portfolio">
          <Button variant="outline" className="flex items-center gap-2">
            Switch to Live Account <ArrowRight size={14} />
          </Button>
        </Link>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <BalanceCard title="Demo Balance" amount={100000} icon={<PlayCircle size={18} className="text-accent" />} />
        <BalanceCard title="Unrealized P&L" amount={60} change={0.06} icon={<BarChart3 size={18} className="text-green-400" />} />
        <BalanceCard title="Open Orders" amount={2} icon={<ClipboardList size={18} className="text-yellow-400" />} />
      </div>

      {/* Positions */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Demo Positions</h2>
        <PositionTable positions={DEMO_POSITIONS} />
      </section>

      {/* Orders */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Demo Orders</h2>
        <OrderTable orders={DEMO_ORDERS} />
      </section>
    </div>
  );
}
