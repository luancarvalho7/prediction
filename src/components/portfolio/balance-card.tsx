import { cn, formatCurrency } from "@/lib/utils";

interface BalanceCardProps {
  title: string;
  amount: number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

export function BalanceCard({ title, amount, change, icon, className }: BalanceCardProps) {
  return (
    <div className={cn("bg-card/40 border border-white/[0.06] rounded-2xl p-4", className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted/60">{title}</span>
        {icon}
      </div>
      <div className="text-2xl font-semibold">{formatCurrency(amount)}</div>
      {change !== undefined && (
        <div className={cn("text-sm mt-1", change >= 0 ? "text-yes" : "text-no")}>
          {change >= 0 ? "+" : ""}{formatCurrency(change)} hoje
        </div>
      )}
    </div>
  );
}
