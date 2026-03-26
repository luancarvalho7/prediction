"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeft, Download, Calendar, User } from "lucide-react";

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const relatedPublications = [
  { slug: "market-microstructure-prediction", title: "Market Microstructure of Prediction Markets" },
  { slug: "behavioral-biases-event-trading", title: "Behavioral Biases in Event Trading" },
  { slug: "regulatory-frameworks-prediction", title: "Regulatory Frameworks for Prediction Markets" },
];

export default function PublicationPage() {
  const { slug } = useParams<{ slug: string }>();
  const title = formatTitle(slug);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted/60 mb-6 flex-wrap">
          <Link href="/research" className="hover:text-accent transition-colors">Pesquisa</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">Publicação</span>
        </nav>

        <Link
          href="/research"
          className="inline-flex items-center gap-1.5 text-sm text-muted/60 hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Pesquisa
        </Link>

        {/* Meta */}
        <h1 className="text-2xl font-semibold mb-3">{title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted/60 mb-6">
          <span className="inline-flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            Dr. Elena Vasquez, Prof. James Chen
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            March 15, 2026
          </span>
        </div>

        {/* Abstract */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 mb-8">
          <h2 className="text-sm font-semibold mb-2">Resumo</h2>
          <p className="text-sm text-muted/60 leading-relaxed">
            Este artigo examina a eficiência dos mercados de previsão como ferramentas de agregação de informações, utilizando um conjunto de dados inédito de contratos de eventos negociados em bolsas reguladas nos EUA entre 2020 e 2025. Constatamos que os preços dos mercados de previsão são previsões probabilísticas bem calibradas, superando agregados de pesquisas e opiniões de especialistas em contextos políticos, econômicos e esportivos. Nossa análise destaca o papel da liquidez de mercado, da diversidade de traders e do alinhamento de incentivos na precisão das previsões.
          </p>
        </div>

        {/* Content */}
        <article className="space-y-5 text-sm text-foreground/90 leading-relaxed mb-10">
          <h2 className="text-lg font-semibold text-foreground">1. Introdução</h2>
          <p>
            Os mercados de previsão há muito são estudados como mecanismos para agregar informações dispersas em preços de ativos. Ao contrário dos mercados financeiros tradicionais, os mercados de previsão oferecem contratos com payoffs binários vinculados a eventos observáveis e verificáveis, proporcionando um referencial limpo para o estudo da eficiência de preços e da revelação de informações.
          </p>

          <h2 className="text-lg font-semibold text-foreground">2. Metodologia</h2>
          <p>
            Coletamos dados de nível transacional da FutureBet abrangendo mais de 12.000 contratos de eventos em eleições políticas, indicadores macroeconômicos, resultados esportivos e premiações de entretenimento. Utilizando pontuações de Brier e gráficos de calibração, medimos a precisão dos preços de fechamento como previsões probabilísticas.
          </p>

          <h2 className="text-lg font-semibold text-foreground">3. Principais Descobertas</h2>
          <p>
            Mercados com maior liquidez e uma base de traders mais diversa produzem previsões significativamente mais precisas. Documentamos também um efeito de &quot;sabedoria das multidões&quot;: mesmo quando traders individuais exibem viêses sistemáticos, os preços agregados convergem para expectativas racionais ao longo do tempo. A clareza regulatória parece melhorar a participação no mercado, a profundidade e, em última análise, a qualidade das previsões.
          </p>

          <h2 className="text-lg font-semibold text-foreground">4. Conclusão</h2>
          <p>
            Nossas descobertas apoiam o uso de mercados de previsão regulamentados como ferramentas valiosas para previsão probabilística em uma variedade de domínios, com implicações para formuladores de políticas, pesquisadores e designers de plataformas.
          </p>
        </article>

        {/* Download */}
        <div className="mb-10">
          <Button variant="primary" size="md">
            <Download className="w-4 h-4 mr-2" />
            Baixar PDF
          </Button>
        </div>

        {/* Related */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Publicações Relacionadas</h2>
          <div className="flex flex-col gap-2">
            {relatedPublications.map((p) => (
              <Link
                key={p.slug}
                href={`/research/publication/${p.slug}`}
                className="group bg-card/40 border border-white/[0.06] rounded-xl px-4 py-3 flex items-center justify-between hover:border-white/[0.1] transition-all duration-150"
              >
                <span className="text-sm group-hover:text-accent transition-colors">{p.title}</span>
                <ChevronRight className="w-4 h-4 text-muted/60 group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
