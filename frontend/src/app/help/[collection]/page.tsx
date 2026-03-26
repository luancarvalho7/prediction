"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, ArrowLeft, FileText } from "lucide-react";

const articlesMap: Record<string, { slug: string; title: string; summary: string }[]> = {
  "getting-started": [
    { slug: "what-is-futurebet", title: "O que é o FutureBet?", summary: "Uma visão geral da plataforma de negociação baseada em eventos e como ela funciona." },
    { slug: "creating-your-account", title: "Criando Sua Conta", summary: "Guia passo a passo para se cadastrar e verificar sua identidade." },
    { slug: "your-first-trade", title: "Fazendo Sua Primeira Negociação", summary: "Aprenda a comprar e vender ações em mercados de previsão." },
    { slug: "understanding-prices", title: "Entendendo os Preços de Mercado", summary: "Como os preços refletem probabilidades e o que significam para os negociadores." },
    { slug: "navigating-the-platform", title: "Navegando pela Plataforma", summary: "Um tour pelo painel, mercados e visualizações de portfólio." },
  ],
  "account-security": [
    { slug: "enable-2fa", title: "Habilitando Autenticação de Dois Fatores", summary: "Proteja sua conta com uma camada extra de segurança." },
    { slug: "change-password", title: "Alterando Sua Senha", summary: "Como atualizar sua senha e boas práticas." },
    { slug: "linked-accounts", title: "Gerenciando Contas Vinculadas", summary: "Conecte ou desconecte provedores de login de terceiros." },
    { slug: "session-management", title: "Gerenciamento de Sessão", summary: "Visualize e revogue sessões ativas em todos os dispositivos." },
  ],
  "deposits-withdrawals": [
    { slug: "deposit-methods", title: "Métodos de Depósito", summary: "Todos os métodos de financiamento suportados, incluindo banco, cripto e cartão." },
    { slug: "withdrawal-process", title: "Como Funcionam os Saques", summary: "Prazos, limites e etapas para sacar fundos." },
    { slug: "fees-and-limits", title: "Taxas e Limites", summary: "Um detalhamento das estruturas de taxas de depósito e saque." },
    { slug: "troubleshoot-deposits", title: "Resolução de Problemas em Depósitos", summary: "Problemas comuns e como resolver transações com falha." },
  ],
  "trading": [
    { slug: "order-types", title: "Tipos de Ordem Explicados", summary: "Ordens a mercado, ordens limitadas e quando usar cada uma." },
    { slug: "trading-fees", title: "Taxas de Negociação", summary: "Tabela detalhada de taxas para makers e takers." },
    { slug: "risk-management", title: "Gestão de Risco", summary: "Configurando stop-losses e gerenciando sua exposição." },
    { slug: "trading-hours", title: "Horários de Negociação e Disponibilidade", summary: "Quando os mercados estão abertos e janelas de manutenção." },
    { slug: "advanced-strategies", title: "Estratégias Avançadas de Negociação", summary: "Hedging, arbitragem e construção de portfólio." },
  ],
  "markets": [
    { slug: "how-markets-work", title: "Como os Mercados Funcionam", summary: "A mecânica dos mercados de previsão e a descoberta de preços." },
    { slug: "market-resolution", title: "Resolução de Mercado", summary: "Como os resultados são determinados e as liquidações processadas." },
    { slug: "market-categories", title: "Categorias de Mercado", summary: "Explore categorias políticas, esportivas, cripto e outras." },
    { slug: "market-rules", title: "Regras e Critérios de Mercado", summary: "Critérios de resolução e casos extremos explicados." },
  ],
  "portfolio-tools": [
    { slug: "portfolio-overview", title: "Visão Geral do Portfólio", summary: "Acompanhe suas posições, P&L e métricas de desempenho." },
    { slug: "order-history", title: "Histórico de Ordens", summary: "Visualize e exporte seu histórico completo de negociações." },
    { slug: "analytics-tools", title: "Ferramentas de Análise e Gráficos", summary: "Use gráficos e análises para embasar suas negociações." },
    { slug: "notifications", title: "Notificações e Alertas", summary: "Configure alertas de preço e notificações de portfólio." },
  ],
  "regulatory-legal": [
    { slug: "compliance-overview", title: "Visão Geral de Conformidade", summary: "Como o FutureBet atende aos requisitos regulatórios." },
    { slug: "kyc-requirements", title: "Requisitos de KYC", summary: "Níveis de verificação de identidade e documentação." },
    { slug: "terms-of-service", title: "Termos de Serviço", summary: "Termos legais que regem o uso da plataforma." },
    { slug: "privacy-policy", title: "Política de Privacidade", summary: "Como coletamos, usamos e protegemos seus dados." },
  ],
};

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function CollectionPage() {
  const { collection } = useParams<{ collection: string }>();
  const articles = articlesMap[collection] ?? [];
  const title = formatTitle(collection);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted/60 mb-6">
          <Link href="/help" className="hover:text-accent transition-colors">Central de Ajuda</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{title}</span>
        </nav>

        <Link
          href="/help"
          className="inline-flex items-center gap-1.5 text-sm text-muted/60 hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a Central de Ajuda
        </Link>

        <h1 className="text-2xl font-semibold mb-1">{title}</h1>
        <p className="text-muted/60 text-sm mb-8">
          {articles.length} artigo{articles.length !== 1 ? "s" : ""} nesta coleção
        </p>

        <div className="flex flex-col gap-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/help/article/${a.slug}`}
              className="group bg-card/40 border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.1] transition-all duration-150 flex items-start gap-4"
            >
              <FileText className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <div>
                <h2 className="text-sm font-semibold mb-0.5 group-hover:text-accent transition-colors">
                  {a.title}
                </h2>
                <p className="text-xs text-muted/60 leading-relaxed">{a.summary}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted/60 ml-auto mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
            </Link>
          ))}

          {articles.length === 0 && (
            <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-8 text-center text-muted/60 text-sm">
              Nenhum artigo encontrado para esta coleção.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
