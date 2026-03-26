"use client";

import { useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ArrowLeft, ArrowDownToLine, Info } from "lucide-react";

const METHOD_OPTIONS = [
  { value: "bank", label: "Transferência Bancária (ACH)" },
  { value: "card", label: "Cartão de Débito" },
];

export default function DepositPage() {
  const [method, setMethod] = useState("bank");
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState<"form" | "confirm">("form");

  const parsedAmount = parseFloat(amount) || 0;
  const isValid = parsedAmount >= 50 && parsedAmount <= 25000;

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

        <h1 className="text-2xl font-semibold mb-6">Depositar Fundos</h1>

        {step === "form" ? (
          <div className="space-y-6">
            <Select
              id="deposit-method"
              label="Método de Depósito"
              options={METHOD_OPTIONS}
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            />

            <Input
              id="deposit-amount"
              label="Valor (USD)"
              type="number"
              placeholder="0.00"
              min={50}
              max={25000}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              error={amount && !isValid ? "O valor deve estar entre $50 e $25.000" : undefined}
            />

            {/* Limits info */}
            <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-4 flex gap-3">
              <Info size={18} className="text-accent shrink-0 mt-0.5" />
              <div className="text-sm text-muted/60 space-y-1">
                <p>Depósito mínimo: <span className="text-foreground">{formatCurrency(50)}</span></p>
                <p>Depósito máximo: <span className="text-foreground">{formatCurrency(25000)}</span></p>
                <p>Transferências bancárias levam 1–3 dias úteis. Depósitos por cartão são instantâneos.</p>
              </div>
            </div>

            <Button variant="primary" size="lg" className="w-full" disabled={!isValid} onClick={handleSubmit}>
              Continuar
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 text-center">
              <p className="text-sm text-muted/60 mb-1">Você está depositando</p>
              <p className="text-3xl font-semibold mb-2">{formatCurrency(parsedAmount)}</p>
              <p className="text-sm text-muted/60">
                via {method === "bank" ? "Transferência Bancária (ACH)" : "Cartão de Débito"}
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep("form")}>
                Voltar
              </Button>
              <Button variant="primary" size="lg" className="flex-1">
                <ArrowDownToLine size={16} className="mr-2" />
                Depositar Fundos
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
