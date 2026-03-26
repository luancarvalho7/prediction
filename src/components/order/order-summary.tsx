import { cn } from "@/lib/utils";

interface OrderSummaryProps {
  side: "yes" | "no";
  price: number;
  amount: number;
  shares: number;
  potentialReturn: number;
  fees: number;
  className?: string;
}

export function OrderSummary({ side, price, amount, shares, potentialReturn, fees, className }: OrderSummaryProps) {
  return (
    <div className={cn("bg-card/40 border border-white/[0.06] rounded-2xl p-4 space-y-3", className)}>
      <h3 className="font-medium text-sm">Resumo da Ordem</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted/60">Lado</span>
          <span className={side === "yes" ? "text-yes font-medium" : "text-no font-medium"}>
            {side.toUpperCase()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted/60">Preço</span>
          <span>{price}¢</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted/60">Cotas</span>
          <span>{shares}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted/60">Taxas</span>
          <span>${fees.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-white/[0.04] pt-2">
          <span className="text-muted/60">Custo Total</span>
          <span className="font-semibold">${amount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted/60">Retorno Potencial</span>
          <span className="text-yes font-semibold">+${potentialReturn.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
