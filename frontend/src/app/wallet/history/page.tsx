"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { Table, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";

interface FundingRecord {
  id: string;
  type: "deposit" | "withdrawal";
  amount: number;
  method: string;
  status: "completed" | "pending" | "failed" | "hold";
  date: string;
}

const MOCK_FUNDING: FundingRecord[] = [
  { id: "f1", type: "deposit", amount: 1000, method: "Bank Transfer (ACH)", status: "completed", date: "2026-03-24T10:00:00Z" },
  { id: "f2", type: "withdrawal", amount: 250, method: "Chase Checking •••• 4821", status: "completed", date: "2026-03-22T14:30:00Z" },
  { id: "f3", type: "deposit", amount: 500, method: "Debit Card •••• 7733", status: "pending", date: "2026-03-21T09:15:00Z" },
  { id: "f4", type: "withdrawal", amount: 100, method: "Wells Fargo •••• 1092", status: "failed", date: "2026-03-19T16:45:00Z" },
  { id: "f5", type: "deposit", amount: 2000, method: "Bank Transfer (ACH)", status: "hold", date: "2026-03-17T11:00:00Z" },
];

const FILTER_TABS = [
  { id: "all", label: "Todos" },
  { id: "deposit", label: "Depósitos" },
  { id: "withdrawal", label: "Saques" },
  { id: "failed", label: "Com Falha" },
];

const statusVariant = {
  completed: "success" as const,
  pending: "warning" as const,
  failed: "danger" as const,
  hold: "accent" as const,
};

export default function FundingHistoryPage() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return MOCK_FUNDING;
    if (filter === "failed") return MOCK_FUNDING.filter((r) => r.status === "failed");
    return MOCK_FUNDING.filter((r) => r.type === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/wallet" className="inline-flex items-center gap-1 text-sm text-muted/60 hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={14} /> Voltar à Carteira
        </Link>

        <h1 className="text-2xl font-semibold mb-6">Histórico de Financiamento</h1>

        <Tabs tabs={FILTER_TABS} defaultTab="all" onChange={setFilter} className="mb-6" />

        <div className="bg-card/40 border border-white/[0.06] rounded-2xl">
          <Table headers={["Tipo", "Valor", "Método", "Status", "Data"]}>
            {filtered.map((record) => (
              <TableRow key={record.id}>
                <TableCell>
                  <Badge variant={record.type === "deposit" ? "success" : "default"}>
                    {record.type}
                  </Badge>
                </TableCell>
                <TableCell className={record.type === "deposit" ? "text-yes" : "text-no"}>
                  {record.type === "deposit" ? "+" : "−"}{formatCurrency(record.amount)}
                </TableCell>
                <TableCell className="text-sm">{record.method}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[record.status]}>{record.status}</Badge>
                </TableCell>
                <TableCell className="text-muted/60">
                  {new Date(record.date).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
