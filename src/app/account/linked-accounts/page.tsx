"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LinkIcon, CreditCard } from "lucide-react";

interface LinkedProvider {
  id: string;
  name: string;
  icon: string;
  linked: boolean;
  email?: string;
}

const INITIAL_PROVIDERS: LinkedProvider[] = [
  { id: "google", name: "Google", icon: "G", linked: true, email: "jane@gmail.com" },
  { id: "apple", name: "Apple", icon: "", linked: false },
];

export default function LinkedAccountsPage() {
  const [providers, setProviders] = useState(INITIAL_PROVIDERS);

  const toggleLink = (id: string) => {
    setProviders((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, linked: !p.linked, email: p.linked ? undefined : `user@${id}.com` }
          : p
      )
    );
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-semibold">Contas Vinculadas</h1>

      {/* Sign-in Providers */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <LinkIcon size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Provedores de Login</h2>
        </div>

        <div className="space-y-3">
          {providers.map((provider) => (
            <div key={provider.id} className="flex items-center justify-between bg-surface border border-white/[0.06] rounded-lg px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-card/40 border border-white/[0.06] flex items-center justify-center text-lg font-semibold">
                  {provider.icon}
                </div>
                <div>
                  <p className="font-medium text-sm">{provider.name}</p>
                  {provider.linked ? (
                    <p className="text-xs text-green-400">Conectado · {provider.email}</p>
                  ) : (
                    <p className="text-xs text-muted/60">Não conectado</p>
                  )}
                </div>
              </div>
              <Button
                variant={provider.linked ? "outline" : "primary"}
                size="sm"
                onClick={() => toggleLink(provider.id)}
              >
                {provider.linked ? "Desvincular" : "Vincular"}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods Reference */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Métodos de Pagamento Vinculados</h2>
        </div>

        <p className="text-sm text-muted/60">Gerencie seus métodos de pagamento vinculados para depósitos e saques.</p>

        <Link href="/wallet/payment-methods">
          <Button variant="outline">Gerenciar Métodos de Pagamento</Button>
        </Link>
      </section>
    </div>
  );
}
