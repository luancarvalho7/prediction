"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Save } from "lucide-react";

interface NotifCategory {
  key: string;
  label: string;
  push: boolean;
  email: boolean;
  sms: boolean;
}

const DEFAULT_CATEGORIES: NotifCategory[] = [
  { key: "trade", label: "Confirmações de Negociação", push: true, email: true, sms: false },
  { key: "price", label: "Alertas de Preço", push: true, email: false, sms: false },
  { key: "market", label: "Atualizações de Mercado", push: true, email: true, sms: false },
  { key: "social", label: "Atividade Social", push: true, email: false, sms: false },
  { key: "security", label: "Segurança da Conta", push: true, email: true, sms: true },
  { key: "marketing", label: "Marketing", push: false, email: false, sms: false },
];

type Channel = "push" | "email" | "sms";

export default function NotificationsPage() {
  const [categories, setCategories] = useState<NotifCategory[]>(DEFAULT_CATEGORIES);

  const toggle = (key: string, channel: Channel) => {
    setCategories((prev) =>
      prev.map((c) => (c.key === key ? { ...c, [channel]: !c[channel] } : c))
    );
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-semibold">Notificações</h1>

      <section className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/[0.04] flex items-center gap-2">
          <Bell size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Preferências de Notificação</h2>
        </div>

        {/* Header */}
        <div className="grid grid-cols-[1fr_60px_60px_60px] gap-2 px-6 py-3 border-b border-white/[0.04] text-xs text-muted/60 font-medium uppercase">
          <span>Categoria</span>
          <span className="text-center">Push</span>
          <span className="text-center">E-mail</span>
          <span className="text-center">SMS</span>
        </div>

        {/* Rows */}
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="grid grid-cols-[1fr_60px_60px_60px] gap-2 px-6 py-3 border-b border-white/[0.04] last:border-b-0 items-center"
          >
            <span className="text-sm font-medium">{cat.label}</span>
            {(["push", "email", "sms"] as Channel[]).map((ch) => (
              <div key={ch} className="flex justify-center">
                <button
                  onClick={() => toggle(cat.key, ch)}
                  className={`w-10 h-5 rounded-full relative transition-colors ${
                    cat[ch] ? "bg-accent" : "bg-muted/30"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                      cat[ch] ? "left-[22px]" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        ))}

        <div className="px-6 py-4 border-t border-white/[0.04]">
          <Button className="flex items-center gap-2">
            <Save size={14} />
            Salvar Preferências
          </Button>
        </div>
      </section>
    </div>
  );
}
