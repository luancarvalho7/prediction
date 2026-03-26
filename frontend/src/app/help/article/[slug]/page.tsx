"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react";

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const relatedArticles = [
  { slug: "your-first-trade", title: "Fazendo Sua Primeira Negociação" },
  { slug: "order-types", title: "Tipos de Ordem Explicados" },
  { slug: "understanding-prices", title: "Entendendo os Preços de Mercado" },
  { slug: "risk-management", title: "Gestão de Risco" },
];

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const title = formatTitle(slug);
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted/60 mb-6 flex-wrap">
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

        {/* Article Content */}
        <article className="mb-12">
          <h1 className="text-2xl font-semibold mb-4">{title}</h1>
          <p className="text-muted/60 text-xs mb-6">Última atualização Março de 2026</p>

          <div className="prose-sm space-y-5 text-sm text-foreground/90 leading-relaxed">
            <p>
              Este guia cobre tudo o que você precisa saber sobre <strong>{title.toLowerCase()}</strong> no FutureBet.
              Seja você um usuário iniciante ou um negociador experiente, este artigo irá guiá-lo pelos
              conceitos principais, instruções passo a passo e melhores práticas.
            </p>

            <h2 className="text-lg font-semibold text-foreground pt-2">Visão Geral</h2>
            <p>
              O FutureBet é construído em torno de mercados de previsão baseados em eventos, nos quais negociadores compram e vendem ações com base no
              resultado de eventos do mundo real. Os preços variam sempre de $0,01 a $0,99 e representam a probabilidade
              implícita do mercado para aquele resultado.
            </p>

            <h2 className="text-lg font-semibold text-foreground pt-2">Passo a Passo</h2>
            <ol className="list-decimal list-inside space-y-2 text-foreground/80">
              <li>Navegue até a seção relevante no seu painel.</li>
              <li>Revise as opções disponíveis e o estado atual do mercado.</li>
              <li>Confirme suas seleções e envie sua ação.</li>
              <li>Monitore o resultado no seu portfólio ou feed de atividades.</li>
            </ol>

            <h2 className="text-lg font-semibold text-foreground pt-2">Notas Importantes</h2>
            <p>
              Certifique-se sempre de que sua conta está verificada e com saldo antes de tentar negociar. As regras de mercado variam por
              categoria — revise os critérios de resolução específicos em cada página de mercado antes de abrir uma posição.
            </p>

            <h2 className="text-lg font-semibold text-foreground pt-2">Perguntas Frequentes</h2>
            <p>
              <strong>P: Quanto tempo demora para as alterações entrarem em vigor?</strong><br />
              A maioria das ações é processada instantaneamente. Depósitos por transferência bancária podem levar de 1 a 3 dias úteis.
            </p>
            <p>
              <strong>P: Onde posso obter ajuda adicional?</strong><br />
              Entre em contato com nossa equipe de suporte pela Central de Ajuda ou pelo e-mail support@futurebet.com.
            </p>
          </div>
        </article>

        {/* Feedback */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 mb-10 text-center">
          <p className="text-sm font-semibold mb-3">Este artigo foi útil?</p>
          {feedback === null ? (
            <div className="flex items-center justify-center gap-3">
              <Button variant="yes" size="sm" onClick={() => setFeedback("yes")}>
                <ThumbsUp className="w-4 h-4 mr-1.5" />
                Sim
              </Button>
              <Button variant="no" size="sm" onClick={() => setFeedback("no")}>
                <ThumbsDown className="w-4 h-4 mr-1.5" />
                Não
              </Button>
            </div>
          ) : (
            <p className="text-muted/60 text-sm">
              {feedback === "yes" ? "Que bom que ajudou! 🎉" : "Lamentamos ouvir isso. Trabalharemos para melhorá-lo."}
            </p>
          )}
        </div>

        {/* Related Articles */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Artigos Relacionados</h2>
          <div className="flex flex-col gap-2">
            {relatedArticles
              .filter((a) => a.slug !== slug)
              .slice(0, 3)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/help/article/${a.slug}`}
                  className="group bg-card/40 border border-white/[0.06] rounded-xl px-4 py-3 flex items-center justify-between hover:border-white/[0.1] transition-all duration-150"
                >
                  <span className="text-sm group-hover:text-accent transition-colors">{a.title}</span>
                  <ChevronRight className="w-4 h-4 text-muted/60 group-hover:text-accent transition-colors" />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
