"use client";

import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { Table, TableRow, TableCell } from "@/components/ui/table";
import type { Order } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

interface OrderTableProps {
  orders: Order[];
  className?: string;
}

const statusVariant = {
  open: "accent" as const,
  filled: "success" as const,
  partial: "warning" as const,
  canceled: "default" as const,
  rejected: "danger" as const,
};

const sideLabel: Record<string, string> = { yes: "SIM", no: "NÃO" };
const typeLabel: Record<string, string> = { limit: "Limite", market: "A Mercado" };
const statusLabel: Record<string, string> = { open: "Aberto", filled: "Executado", partial: "Parcial", canceled: "Cancelado", rejected: "Rejeitado" };

export function OrderTable({ orders, className }: OrderTableProps) {
  return (
    <Table
      headers={["Mercado", "Lado", "Tipo", "Preço", "Tamanho", "Executado", "Status", "Data"]}
      className={className}
    >
      {orders.map((order) => (
        <TableRow key={order.id}>
          <TableCell>
            <Link href={`/markets/series/${order.marketId}`} className="text-sm hover:text-accent transition-colors">
              {order.marketTitle}
            </Link>
          </TableCell>
          <TableCell>
            <Badge variant={order.side === "yes" ? "success" : "danger"}>
              {sideLabel[order.side] ?? order.side.toUpperCase()}
            </Badge>
          </TableCell>
          <TableCell>{typeLabel[order.type] ?? order.type}</TableCell>
          <TableCell>{order.price}¢</TableCell>
          <TableCell>{order.size}</TableCell>
          <TableCell>{order.filled}</TableCell>
          <TableCell>
            <Badge variant={statusVariant[order.status]}>{statusLabel[order.status] ?? order.status}</Badge>
          </TableCell>
          <TableCell className="text-muted/60">
            {new Date(order.createdAt).toLocaleDateString()}
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
