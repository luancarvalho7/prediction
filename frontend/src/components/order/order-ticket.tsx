"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Info } from "lucide-react";

interface OrderTicketProps {
  marketTitle: string;
  yesPrice: number;
  noPrice: number;
  status: "open" | "closed" | "halted" | "settled";
  className?: string;
}

export function OrderTicket({ marketTitle, yesPrice, noPrice, status, className }: OrderTicketProps) {
  const [side, setSide] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState("");
  const [showReview, setShowReview] = useState(false);

  const price = side === "yes" ? yesPrice : noPrice;
  const shares = amount ? Math.floor((parseFloat(amount) / price) * 100) : 0;
  const potentialReturn = shares * 1 - (amount ? parseFloat(amount) : 0);
  const isClosed = status !== "open";

  return (
    <div className={cn("bg-card/40 border border-white/[0.06] rounded-2xl", className)}>
      <div className="p-4 border-b border-white/[0.04]">
        <h3 className="font-medium text-sm mb-1">Negociar</h3>
        <p className="text-xs text-muted/60 line-clamp-1">{marketTitle}</p>
      </div>

      {isClosed && (
        <div className="mx-4 mt-4 p-3 bg-warning/10 border border-warning/30 rounded-lg flex items-center gap-2">
          <AlertTriangle size={16} className="text-warning flex-shrink-0" />
          <span className="text-xs text-warning">
            {status === "halted" ? "Mercado temporariamente suspenso" : "Mercado fechado para negociação"}
          </span>
        </div>
      )}

      <div className="p-4 space-y-4">
        {/* Side selector */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setSide("yes")}
            disabled={isClosed}
            className={cn(
              "py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer",
              side === "yes"
                ? "bg-yes text-black"
                : "bg-yes/10 text-yes border border-yes/20 hover:bg-yes/20",
              isClosed && "opacity-50 cursor-not-allowed"
            )}
          >
            Sim {yesPrice}¢
          </button>
          <button
            onClick={() => setSide("no")}
            disabled={isClosed}
            className={cn(
              "py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer",
              side === "no"
                ? "bg-no text-white"
                : "bg-no/10 text-no border border-no/20 hover:bg-no/20",
              isClosed && "opacity-50 cursor-not-allowed"
            )}
          >
            Não {noPrice}¢
          </button>
        </div>

        {/* Amount input */}
        <Input
          label="Valor ($)"
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={isClosed}
        />

        {/* Order summary */}
        {amount && parseFloat(amount) > 0 && (
          <div className="space-y-2 p-3 bg-background rounded-lg">
            <div className="flex justify-between text-xs">
              <span className="text-muted/60">Cotas</span>
              <span>{shares}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted/60">Preço Médio</span>
              <span>{price}¢</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted/60">Retorno Potencial</span>
              <span className="text-yes">+${potentialReturn.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs border-t border-white/[0.04] pt-2">
              <span className="text-muted/60">Custo Total</span>
              <span className="font-medium">${parseFloat(amount).toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Risk warning */}
        <div className="flex items-start gap-2 p-2 text-xs text-muted/60">
          <Info size={12} className="flex-shrink-0 mt-0.5" />
          <span>Negociar envolve risco de perda. Revise as regras do mercado antes de enviar ordens.</span>
        </div>

        {!showReview ? (
          <Button
            variant={side === "yes" ? "yes" : "no"}
            className="w-full"
            size="lg"
            disabled={isClosed || !amount || parseFloat(amount) <= 0}
            onClick={() => setShowReview(true)}
          >
            Revisar Ordem
          </Button>
        ) : (
          <div className="space-y-2">
            <div className="p-3 border border-accent/30 rounded-lg text-center">
              <p className="text-xs text-muted/60 mb-1">Confirme sua ordem</p>
              <p className="text-sm font-medium">
                Comprar {shares} cotas {side.toUpperCase()} por ${parseFloat(amount).toFixed(2)}
              </p>
            </div>
            <Button variant="primary" className="w-full" size="lg">
              Confirmar Ordem
            </Button>
            <Button variant="ghost" className="w-full" size="sm" onClick={() => setShowReview(false)}>
              Cancelar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
