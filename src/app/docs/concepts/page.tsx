"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "Mercados",
    content:
      "Um mercado representa uma pergunta sobre um evento futuro com resultado binário (Sim/Não). Cada mercado possui um ID único, um título, uma data de resolução e uma probabilidade atual refletindo a avaliação da multidão. Os mercados são criados pela plataforma e passam pelos estados: em breve → aberto → fechado → resolvido.",
    diagram: ["Em Breve", "Aberto", "Fechado", "Resolvido"],
  },
  {
    title: "Ordens",
    content:
      'Ordens são instruções para comprar ou vender contratos em um mercado. A FutureBet suporta ordens limitadas (especifique um preço) e ordens de mercado (execute imediatamente ao melhor preço disponível). As ordens têm lados: "Sim" ou "Não". Ordens limitadas ficam no livro de ordens até serem correspondidas ou canceladas.',
    diagram: ["Ordem Limitada", "Livro de Ordens", "Motor de Correspondência", "Negociação"],
  },
  {
    title: "Posições",
    content:
      "Uma posição representa sua exposição atual em um mercado. Se você possui contratos Sim, você lucra quando o mercado resolve como Sim. As posições rastreiam seu preço médio de entrada, quantidade e P&L não realizado. Você pode fechar uma posição vendendo seus contratos ou aguardando a resolução.",
    diagram: ["Comprar Contratos", "Manter Posição", "Vender / Resolver", "Liquidação"],
  },
  {
    title: "Liquidação",
    content:
      "Quando um mercado é resolvido, todas as posições são liquidadas automaticamente. Contratos vencedores pagam US$ 1,00 cada; contratos perdedores pagam US$ 0,00. A liquidação ocorre em segundos após a resolução e os fundos são creditados diretamente no saldo da sua carteira.",
    diagram: ["Mercado Fecha", "Oráculo Confirma", "Posições Liquidadas", "Fundos Creditados"],
  },
  {
    title: "Modelo de Preço",
    content:
      "Os preços na FutureBet são determinados por um livro de ordens de leilão duplo contínuo. O preço médio reflete a probabilidade implícita do mercado. Por exemplo, um contrato Sim com preço de US$ 0,70 implica uma probabilidade de 70%. Os preços são limitados entre US$ 0,01 e US$ 0,99.",
    diagram: ["Ordens de Compra", "Ordens de Venda", "Preço Médio = Probabilidade", "Execução de Negociação"],
  },
];

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/docs"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar à Documentação
        </Link>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white">
          Conceitos Fundamentais
        </h1>
        <p className="mb-12 text-lg text-gray-400">
          Entenda os blocos de construção fundamentais da plataforma FutureBet.
        </p>

        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mb-6 leading-relaxed text-gray-400">
                {section.content}
              </p>

              {/* Diagram placeholder */}
              <div className="flex items-center gap-0 overflow-x-auto rounded-xl border border-gray-800 bg-[#111118] p-6">
                {section.diagram.map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className="flex h-16 min-w-[140px] items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 text-center text-sm font-medium text-emerald-400">
                      {step}
                    </div>
                    {i < section.diagram.length - 1 && (
                      <div className="mx-2 h-px w-8 bg-gray-700" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
