"use client";

import Link from "next/link";
import { RiskSettingsCard } from "@/components/fairness/risk-settings-card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Phone, Mail, ArrowRight } from "lucide-react";

export default function RiskSettingsPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Configurações de Negociação Responsável</h1>
        <p className="text-muted/60 text-sm mt-1">
          Defina limites e faça pausas para negociar com responsabilidade. Essas ferramentas ajudam você a manter o controle.
        </p>
      </div>

      {/* Risk Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <RiskSettingsCard type="trading-break" />
        <RiskSettingsCard type="self-exclusion" />
        <RiskSettingsCard type="deposit-limit" />
      </div>

      {/* Cooldown Warning */}
      <section className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-5 flex gap-4">
        <AlertTriangle size={22} className="text-yellow-400 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-sm text-yellow-400">Confirmação de Intervalo</h3>
          <p className="text-sm text-muted/60 mt-1">
            Uma vez ativados, os intervalos de negociação e os períodos de autoexclusão não podem ser revertidos até o fim do período de espera.
            Por favor, revise suas configurações com cuidado antes de confirmar.
          </p>
        </div>
      </section>

      {/* Support Resources */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Recursos de Suporte</h2>
        </div>

        <p className="text-sm text-muted/60">
          Se você ou alguém que você conhece precisa de ajuda com problemas de negociação, entre em contato com nossa equipe de suporte ou use estes recursos.
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-3 text-sm">
            <Phone size={16} className="text-accent" />
            <span>Linha de Suporte: <strong className="text-white">1-800-555-0199</strong></span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail size={16} className="text-accent" />
            <span>E-mail: <strong className="text-white">support@futurebet.com</strong></span>
          </div>
        </div>

        <Link href="/responsible-trading">
          <Button variant="outline" className="flex items-center gap-2 mt-2">
            Política de Negociação Responsável <ArrowRight size={14} />
          </Button>
        </Link>
      </section>
    </div>
  );
}
