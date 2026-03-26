"use client";

import { useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { Table, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Download } from "lucide-react";

const MOCK_HISTORY = [
  { id: "h1", market: "Will Candidate A win the 2026 election?", side: "yes" as const, size: 40, price: 52, pnl: 120, type: "fill" as const, date: "2026-03-20T09:00:00Z" },
  { id: "h2", market: "Bitcoin above $100K by end of March?", side: "no" as const, size: 30, price: 60, pnl: -45, type: "settled" as const, date: "2026-03-18T14:30:00Z" },
  { id: "h3", market: "Champions League Winner 2026", side: "yes" as const, size: 25, price: 28, pnl: 85, type: "fill" as const, date: "2026-03-15T11:00:00Z" },
  { id: "h4", market: "Fed rate cut in April 2026?", side: "yes" as const, size: 60, price: 35, pnl: 180, type: "settled" as const, date: "2026-03-10T16:00:00Z" },
];

export default function HistoryPage() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const filtered = MOCK_HISTORY.filter((h) => {
    if (dateFrom && new Date(h.date) < new Date(dateFrom)) return false;
    if (dateTo && new Date(h.date) > new Date(dateTo)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm text-muted/60 hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={14} /> Voltar ao Portfólio
        </Link>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Histórico de Operações</h1>
          <Button variant="outline" size="sm" onClick={() => {}}>
            <Download size={14} className="mr-1.5" />
            Exportar
          </Button>
        </div>

        {/* Date range filter */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="w-44">
            <Input
              type="date"
              label="De"
              id="date-from"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>
          <div className="w-44">
            <Input
              type="date"
              label="Até"
              id="date-to"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-card/40 border border-white/[0.06] rounded-2xl">
          <Table headers={["Mercado", "Lado", "Qtd.", "Preço", "L&P Realizado", "Tipo", "Data"]}>
            {filtered.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="max-w-[200px] truncate">{item.market}</TableCell>
                <TableCell>
                  <Badge variant={item.side === "yes" ? "success" : "danger"}>
                    {item.side.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell>{item.price}¢</TableCell>
                <TableCell>
                  <span className={item.pnl >= 0 ? "text-yes" : "text-no"}>
                    {item.pnl >= 0 ? "+" : ""}{formatCurrency(item.pnl)}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant={item.type === "fill" ? "accent" : "default"}>{item.type}</Badge>
                </TableCell>
                <TableCell className="text-muted/60">
                  {new Date(item.date).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
