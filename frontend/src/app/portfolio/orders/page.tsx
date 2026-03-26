"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MOCK_ORDERS } from "@/lib/mock-data";
import { OrderTable } from "@/components/portfolio/order-table";
import { Tabs } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";

const ORDER_TABS = [
  { id: "all", label: "Todas" },
  { id: "open", label: "Abertas" },
  { id: "filled", label: "Preenchidas" },
  { id: "partial", label: "Parcial" },
  { id: "canceled", label: "Canceladas" },
  { id: "rejected", label: "Rejeitadas" },
];

export default function OrdersPage() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = useMemo(() => {
    if (statusFilter === "all") return MOCK_ORDERS;
    return MOCK_ORDERS.filter((o) => o.status === statusFilter);
  }, [statusFilter]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm text-muted/60 hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={14} /> Voltar ao Portfólio
        </Link>

        <h1 className="text-2xl font-semibold mb-6">Ordens</h1>

        <Tabs tabs={ORDER_TABS} defaultTab="all" onChange={setStatusFilter} className="mb-6" />

        <div className="bg-card/40 border border-white/[0.06] rounded-2xl">
          <OrderTable orders={filtered} />
        </div>
      </div>
    </div>
  );
}
