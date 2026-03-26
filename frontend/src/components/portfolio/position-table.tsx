"use client";

import Link from "next/link";
import { cn, formatCurrency } from "@/lib/utils";
import { Table, TableRow, TableCell } from "@/components/ui/table";
import type { Position } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

interface PositionTableProps {
  positions: Position[];
  className?: string;
}

const sideLabel: Record<string, string> = { yes: "SIM", no: "NÃO" };
const statusLabel: Record<string, string> = { open: "Aberto", closed: "Fechado", settled: "Liquidado" };

export function PositionTable({ positions, className }: PositionTableProps) {
  return (
    <Table
      headers={["Mercado", "Lado", "Tamanho", "Preço Médio", "Preço Atual", "L&P", "Status"]}
      className={className}
    >
      {positions.map((pos) => (
        <TableRow key={pos.id}>
          <TableCell>
            <Link href={`/markets/series/${pos.marketId}`} className="text-sm hover:text-accent transition-colors">
              {pos.marketTitle}
            </Link>
          </TableCell>
          <TableCell>
            <Badge variant={pos.side === "yes" ? "success" : "danger"}>
              {sideLabel[pos.side] ?? pos.side.toUpperCase()}
            </Badge>
          </TableCell>
          <TableCell>{pos.size}</TableCell>
          <TableCell>{pos.avgPrice}¢</TableCell>
          <TableCell>{pos.currentPrice}¢</TableCell>
          <TableCell>
            <span className={cn(pos.unrealizedPnl >= 0 ? "text-yes" : "text-no")}>
              {pos.unrealizedPnl >= 0 ? "+" : ""}{formatCurrency(pos.unrealizedPnl)}
            </span>
          </TableCell>
          <TableCell>
            <Badge variant={pos.status === "open" ? "success" : "default"}>{statusLabel[pos.status] ?? pos.status}</Badge>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
