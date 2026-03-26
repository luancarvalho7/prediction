"use client";

import { RiskSettingsCard } from "@/components/fairness/risk-settings-card";
import Link from "next/link";
import { Heart, GraduationCap, ShieldCheck } from "lucide-react";

export default function ResponsibleTradingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Negociação Responsável</h1>
        <p className="text-muted/60 text-sm mb-8">
          Acreditamos que os mercados de previsão devem ser informativos e agradáveis — nunca prejudiciais.
          Use as ferramentas abaixo para manter o controle.
        </p>

        {/* Interactive risk tools */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Pausas nas Negociações</h2>
          <p className="text-sm text-muted/60 mb-4">
            Afaste-se por um período determinado. Enquanto a pausa estiver ativa, você não poderá fazer novos pedidos, mas suas
            posições existentes permanecem abertas.
          </p>
          <RiskSettingsCard type="trading-break" />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Autoexclusão</h2>
          <p className="text-sm text-muted/60 mb-4">
            Se você sentir que as negociações estão afetando negativamente sua vida, pode se excluir permanentemente.
            Essa ação é difícil de reverter e foi criada como uma salvaguarda de último recurso.
          </p>
          <RiskSettingsCard type="self-exclusion" />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Limites de Depósito</h2>
          <p className="text-sm text-muted/60 mb-4">
            Limite o valor que você pode depositar por dia, semana ou mês. Os limites entram em vigor
            imediatamente, mas exigem um período de espera para aumentar.
          </p>
          <RiskSettingsCard type="deposit-limit" />
        </section>

        {/* Mental Health */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Heart size={18} className="text-danger" /> Saúde Mental e Suporte
          </h2>
          <p className="text-sm text-muted/60 mb-4">
            Negociar pode ser estressante. Se você ou alguém que você conhece está passando por dificuldades, entre em contato com um
            profissional. Você não está sozinho.
          </p>
          <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 space-y-3">
            <p className="text-sm">
              <strong>Linha de Apoio Nacional para Jogos Problemáticos:</strong>{" "}
              <span className="text-accent">1-800-522-4700</span> (24/7)
            </p>
            <p className="text-sm">
              <strong>Linha de Texto para Crises:</strong> Envie <span className="text-accent">HOME</span> para{" "}
              <span className="text-accent">741741</span>
            </p>
            <p className="text-sm">
              <strong>Jogadores Anônimos:</strong>{" "}
              <a
                href="https://www.gamblersanonymous.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent/70 hover:text-accent transition-colors"
              >
                gamblersanonymous.org
              </a>
            </p>
          </div>
        </section>

        {/* Educational Guides */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-accent" /> Guias Educacionais
          </h2>
          <p className="text-sm text-muted/60 mb-4">
            Aprenda como os mercados de previsão funcionam, como avaliar riscos e como desenvolver uma
            estratégia de negociação sólida antes de arriscar dinheiro real.
          </p>
          <Link
            href="/research"
            className="text-sm text-accent/70 hover:text-accent transition-colors"
          >
            Explorar pesquisas e guias →
          </Link>
        </section>

        {/* Account Security */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck size={18} className="text-accent" /> Segurança da Conta
          </h2>
          <p className="text-sm text-muted/60 mb-4">
            Proteja sua conta com autenticação de dois fatores, gerenciamento de sessões e notificações de login.
          </p>
          <Link
            href="/account/security"
            className="text-sm text-accent/70 hover:text-accent transition-colors"
          >
            Ir para configurações de segurança →
          </Link>
        </section>
      </div>
    </div>
  );
}
