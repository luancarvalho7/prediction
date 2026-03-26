"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { ArrowLeft, Plus, Trash2, Building2, CreditCard } from "lucide-react";

interface PaymentMethod {
  id: string;
  type: "bank" | "card";
  label: string;
  last4: string;
  status: "verified" | "pending" | "failed";
}

const INITIAL_METHODS: PaymentMethod[] = [
  { id: "pm1", type: "bank", label: "Chase Checking", last4: "4821", status: "verified" },
  { id: "pm2", type: "card", label: "Visa Debit", last4: "7733", status: "verified" },
  { id: "pm3", type: "bank", label: "Wells Fargo Savings", last4: "1092", status: "pending" },
];

const statusVariant = {
  verified: "success" as const,
  pending: "warning" as const,
  failed: "danger" as const,
};

export default function PaymentMethodsPage() {
  const [methods, setMethods] = useState<PaymentMethod[]>(INITIAL_METHODS);

  const handleRemove = (id: string) => {
    setMethods((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/wallet" className="inline-flex items-center gap-1 text-sm text-muted/60 hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={14} /> Voltar à Carteira
        </Link>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Métodos de Pagamento</h1>
          <Button variant="primary" size="sm">
            <Plus size={14} className="mr-1.5" />
            Adicionar Método
          </Button>
        </div>

        {methods.length === 0 ? (
          <EmptyState
            title="Nenhum método de pagamento"
            description="Adicione uma conta bancária ou cartão para depositar e sacar fundos."
            action={
              <Button variant="primary" size="sm">
                <Plus size={14} className="mr-1.5" />
                Adicionar Método
              </Button>
            }
          />
        ) : (
          <div className="space-y-3">
            {methods.map((method) => (
              <div
                key={method.id}
                className="bg-card/40 border border-white/[0.06] rounded-2xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {method.type === "bank" ? (
                    <Building2 size={20} className="text-muted/60" />
                  ) : (
                    <CreditCard size={20} className="text-muted/60" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{method.label}</p>
                    <p className="text-xs text-muted/60">•••• {method.last4}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={statusVariant[method.status]}>{method.status}</Badge>
                  <button
                    onClick={() => handleRemove(method.id)}
                    className="text-muted/60 hover:text-danger transition-colors cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
