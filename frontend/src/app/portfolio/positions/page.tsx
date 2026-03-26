"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MOCK_POSITIONS } from "@/lib/mock-data";
import { PositionTable } from "@/components/portfolio/position-table";
import { Tabs } from "@/components/ui/tabs";
import { Chip } from "@/components/ui/chips";
import { ArrowLeft } from "lucide-react";

const STATUS_TABS = [
  { id: "all", label: "Todos" },
  { id: "open", label: "Aberto" },
  { id: "closed", label: "Fechado" },
  { id: "settled", label: "Liquidado" },
];

const CATEGORY_FILTERS = ["Todos", "Política", "Cripto", "Esportes", "Economia"];

export default function PositionsPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filtered = useMemo(() => {
    let positions = [...MOCK_POSITIONS];
    if (statusFilter !== "all") {
      positions = positions.filter((p) => p.status === statusFilter);
    }
    return positions;
  }, [statusFilter, categoryFilter]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm text-muted/60 hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={14} /> Voltar ao Portfólio
        </Link>

        <h1 className="text-2xl font-semibold mb-6">Posições Abertas</h1>

        <Tabs tabs={STATUS_TABS} defaultTab="all" onChange={setStatusFilter} className="mb-4" />

        <div className="flex flex-wrap gap-2 mb-6 items-center">
          {CATEGORY_FILTERS.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              active={categoryFilter === cat}
              onClick={() => setCategoryFilter(cat)}
            />
          ))}
        </div>

        <div className="bg-card/40 border border-white/[0.06] rounded-2xl">
          <PositionTable positions={filtered} />
        </div>
      </div>
    </div>
  );
}
