"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { MOCK_MARKETS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  Download,
  CheckCircle,
  XCircle,
  Scale,
  Clock,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

export default function MarketRulesPage() {
  const params = useParams<{ series: string; market: string }>();

  const market =
    MOCK_MARKETS.find((m) => m.slug === params.market) ?? MOCK_MARKETS[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Back navigation */}
        <Link
          href={`/markets/${market.series}/${market.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted/60 hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Voltar ao mercado
        </Link>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText size={20} className="text-accent" />
              <h1 className="text-2xl font-semibold">Regras do Mercado</h1>
            </div>
            <p className="text-muted/60 text-sm">{market.title}</p>
          </div>
          <Button variant="outline" size="sm">
            <Download size={14} className="mr-1.5" />
            Baixar PDF
          </Button>
        </div>

        <div className="space-y-6">
          {/* Rule summary */}
          <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
              <Scale size={16} className="text-accent" />
              Resumo das Regras
            </h2>
            <p className="text-sm text-muted/60 leading-relaxed">
              {market.rules}
            </p>
          </section>

          {/* Resolution boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-yes/5 border border-yes/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={18} className="text-yes" />
                <h3 className="text-sm font-semibold text-yes">
                  O que Resolve como SIM
                </h3>
              </div>
              <p className="text-sm text-muted/60 leading-relaxed">
                {market.rules} O mercado paga $1,00 por ação SIM se a
                condição declarada for atendida até a data de expiração, conforme
                determinado pela fonte oficial de resolução.
              </p>
            </div>
            <div className="bg-no/5 border border-no/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle size={18} className="text-no" />
                <h3 className="text-sm font-semibold text-no">
                  O que Resolve como NÃO
                </h3>
              </div>
              <p className="text-sm text-muted/60 leading-relaxed">
                O mercado paga $1,00 por ação NÃO se a condição declarada
                NÃO for atendida até a data de expiração. Se a fonte de resolução
                não confirmar o resultado, este mercado resolve como NÃO.
              </p>
            </div>
          </div>

          {/* Official source */}
          <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              Fonte Oficial de Resolução
            </h2>
            <p className="text-sm text-muted/60 leading-relaxed">
              {market.resolution}
            </p>
          </section>

          {/* Payout & Trading details */}
          <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
              <DollarSign size={16} className="text-accent" />
              Detalhes de Pagamento e Negociação
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                <span className="text-sm text-muted/60">Pagamento por Ação</span>
                <span className="text-sm font-medium">$1.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                <span className="text-sm text-muted/60">Mínimo de Tick</span>
                <span className="text-sm font-medium">1¢</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                <span className="text-sm text-muted/60">Faixa de Preço</span>
                <span className="text-sm font-medium">1¢ – 99¢</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                <span className="text-sm text-muted/60">Limite de Posição</span>
                <span className="text-sm font-medium">
                  $25.000 por posição
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-muted/60">Limite Diário de Negociação</span>
                <span className="text-sm font-medium">Nenhum</span>
              </div>
            </div>
          </section>

          {/* Settlement & Expiration */}
          <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-5">
            <h2 className="text-base font-semibold mb-4 flex items-center gap-2">
              <Clock size={16} className="text-accent" />
              Liquidação e Expiração
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                <span className="text-sm text-muted/60">Data de Expiração</span>
                <span className="text-sm font-medium">
                  {new Date(market.endDate).toLocaleDateString("pt-BR", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                <span className="text-sm text-muted/60">Tempo de Liquidação</span>
                <span className="text-sm font-medium">
                  Dentro de 24 horas da resolução
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/[0.04]">
                <span className="text-sm text-muted/60">Liquidação Antecipada</span>
                <span className="text-sm font-medium">Não disponível</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-muted/60">Janela de Disputas</span>
                <span className="text-sm font-medium">
                  48 horas após a liquidação
                </span>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="text-xs text-muted/60 bg-card/40 border border-white/[0.06] rounded-2xl p-4 leading-relaxed">
            <strong>Aviso:</strong> As regras do mercado estão sujeitas a alterações em
            circunstâncias extraordinárias. Todas as disputas são resolvidas a critério exclusivo
            do comitê de resolução da plataforma. Negocie com responsabilidade
            e revise todos os termos de serviço aplicáveis antes de participar.
          </div>
        </div>
      </div>
    </div>
  );
}
