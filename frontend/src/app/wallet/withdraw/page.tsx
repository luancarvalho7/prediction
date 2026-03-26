"use client";

import { useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ArrowLeft, ArrowUpFromLine, Info, ShieldCheck } from "lucide-react";

const DESTINATION_OPTIONS = [
  { value: "chase", label: "Chase Checking •••• 4821" },
  { value: "wells", label: "Wells Fargo Savings •••• 1092" },
];

export default function WithdrawPage() {
  const [destination, setDestination] = useState("chase");
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState<"form" | "confirm">("form");

  const parsedAmount = parseFloat(amount) || 0;
  const maxWithdraw = 5420;
  const isValid = parsedAmount > 0 && parsedAmount <= maxWithdraw;

  const handleSubmit = () => {
    if (step === "form" && isValid) {
      setStep("confirm");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 py-8">
        <Link href="/wallet" className="inline-flex items-center gap-1 text-sm text-muted/60 hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={14} /> Voltar à Carteira
        </Link>

        <h1 className="text-2xl font-semibold mb-6">Sacar Fundos</h1>

        {step === "form" ? (
          <div className="space-y-6">
            <Select
              id="withdraw-destination"
              label="Conta de Destino"
              options={DESTINATION_OPTIONS}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />

            <Input
              id="withdraw-amount"
              label="Valor (USD)"
              type="number"
              placeholder="0.00"
              min={1}
              max={maxWithdraw}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              error={amount && !isValid ? `O valor deve estar entre $1 e ${formatCurrency(maxWithdraw)}` : undefined}
            />

            <p className="text-xs text-muted/60">
              Saldo disponível: <span className="text-foreground font-medium">{formatCurrency(maxWithdraw)}</span>
            </p>

            {/* Processing time info */}
            <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-4 flex gap-3">
              <Info size={18} className="text-accent shrink-0 mt-0.5" />
              <div className="text-sm text-muted/60 space-y-1">
                <p>Tempo de processamento: <span className="text-foreground">1–3 dias úteis</span></p>
                <p>Os saques estão sujeitos a verificação de identidade e conformidade.</p>
              </div>
            </div>

            {/* Compliance notice */}
            <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-4 flex gap-3">
              <ShieldCheck size={18} className="text-yes shrink-0 mt-0.5" />
              <p className="text-sm text-muted/60">
                Todos os pedidos de saque passam por verificações automáticas de conformidade de acordo com os requisitos regulatórios.
              </p>
            </div>

            <Button variant="primary" size="lg" className="w-full" disabled={!isValid} onClick={handleSubmit}>
              Continuar
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 text-center">
              <p className="text-sm text-muted/60 mb-1">Você está sacando</p>
              <p className="text-3xl font-semibold mb-2">{formatCurrency(parsedAmount)}</p>
              <p className="text-sm text-muted/60">
                to {DESTINATION_OPTIONS.find((d) => d.value === destination)?.label}
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep("form")}>
                Voltar
              </Button>
              <Button variant="primary" size="lg" className="flex-1">
                <ArrowUpFromLine size={16} className="mr-2" />
                Confirmar Saque
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
