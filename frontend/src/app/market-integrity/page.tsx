import { IntegrityTopicList } from "@/components/fairness/integrity-topic-list";

const topics = [
  {
    title: "Regulamentado vs Não Regulamentado",
    description: "Entenda o cenário regulatório e onde a FutureBet se encaixa.",
    href: "/regulation",
  },
  {
    title: "Negociações Proibidas",
    description: "Atividades que violam nossas regras e resultam em ações na conta.",
    href: "/prohibited-trading",
  },
  {
    title: "Identificação do Cliente",
    description: "Por que verificamos identidades e quais documentos são aceitos.",
    href: "/customer-identification",
  },
  {
    title: "Traders Bloqueados",
    description: "Quem está impedido de negociar na plataforma e por quê.",
    href: "/blocked-traders",
  },
  {
    title: "Negociação com Informação Privilegiada",
    description: "O que constitui negociação com informação privilegiada nos mercados de previsão.",
    href: "/insider-trading",
  },
  {
    title: "Vigilância",
    description: "Nossos sistemas de vigilância automatizados e manuais que monitoram a atividade do mercado 24 horas por dia.",
    href: "#",
  },
  {
    title: "Relatórios e Transparência",
    description: "Como relatamos operações e compartilhamos dados com o público.",
    href: "/reporting-transparency",
  },
  {
    title: "Mercados Proibidos",
    description: "Categorias de eventos que jamás serão listados na plataforma.",
    href: "/prohibited-markets",
  },
];

export default function MarketIntegrityPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Integridade dos Mercados</h1>
        <p className="text-muted/60 text-sm mb-8">
          Um mercado justo exige aplicação ativa. Saiba mais sobre as regras, sistemas de vigilância
          e práticas de transparência que mantêm a FutureBet confiável.
        </p>

        <IntegrityTopicList topics={topics} />
      </div>
    </div>
  );
}
