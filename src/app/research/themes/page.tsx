import Link from "next/link";
import { ArrowLeft, Lightbulb, FileText } from "lucide-react";

const themes = [
  {
    title: "Eficiência de Mercado",
    description:
      "Investigando como os preços dos mercados de previsão agregam informações e se aproximam das expectativas racionais. Nosso trabalho testa calibração, oportunidades de arbitragem e a velocidade da descoberta de preços.",
    publications: 14,
    slug: "market-efficiency",
  },
  {
    title: "Agregação de Informações",
    description:
      "Estudando os mecanismos pelos quais informações privadas dispersas são reveladas por meio da atividade de negociação. Analisamos o fluxo de ordens, a dinâmica de liquidez e o papel dos traders informados vs. ruidosos.",
    publications: 11,
    slug: "information-aggregation",
  },
  {
    title: "Economia Comportamental",
    description:
      "Examinando viêses cognitivos sistemáticos—excesso de confiança, ancoragem, aversão à perda—e como eles se manifestam no trading de eventos. Nossa pesquisa identifica estratégias de desviésamento no nível individual e de mercado.",
    publications: 9,
    slug: "behavioral-economics",
  },
  {
    title: "Design Regulatório",
    description:
      "Analisando o impacto das estruturas regulatórias na participação, integridade e precisão das previsões do mercado. Trabalhamos com formuladores de políticas para projetar regulamentações proporcionais e favoráveis à inovação.",
    publications: 7,
    slug: "regulatory-design",
  },
];

export default function ThemesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-5xl mx-auto">
        <Link
          href="/research"
          className="inline-flex items-center gap-1.5 text-sm text-muted/60 hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Pesquisa
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="w-6 h-6 text-accent" />
          <h1 className="text-2xl font-semibold">Temas de Pesquisa</h1>
        </div>
        <p className="text-muted/60 text-sm mb-8 max-w-2xl">
          Nossa pesquisa é organizada em torno de quatro temas interconectados que abrangem a ciência e a prática dos mercados de previsão.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {themes.map((t) => (
            <div
              key={t.slug}
              className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 flex flex-col"
            >
              <h2 className="text-base font-semibold mb-2">{t.title}</h2>
              <p className="text-sm text-muted/60 leading-relaxed flex-1 mb-4">{t.description}</p>
              <div className="flex items-center gap-1.5 text-xs text-accent">
                <FileText className="w-3.5 h-3.5" />
                {t.publications} publicações
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
