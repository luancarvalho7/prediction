import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Lightbulb,
  CalendarDays,
  Handshake,
  Users,
  ArrowRight,
} from "lucide-react";

const sections = [
  { slug: "/research/themes", title: "Publicações & Temas", description: "Explore nossas publicações de pesquisa e áreas temáticas de foco.", icon: BookOpen },
  { slug: "/research/themes", title: "Temas de Pesquisa", description: "Eficiência de mercado, economia comportamental e mais.", icon: Lightbulb },
  { slug: "/research/event/annual-symposium-2026", title: "Eventos", description: "Conferências, simpósios e workshops de pesquisa.", icon: CalendarDays },
  { slug: "/research/collaboration", title: "Colaboração", description: "Seja nosso parceiro em pesquisas acadêmicas e do setor.", icon: Handshake },
  { slug: "/research/team", title: "Equipe de Pesquisa", description: "Conheça os pesquisadores por trás do nosso trabalho.", icon: Users },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-2">Pesquisa</h1>
        <p className="text-muted/60 text-sm max-w-2xl mb-10">
          A FutureBet Research avança a ciência dos mercados de previsão por meio de estudos acadêmicos rigorosos, colaboração aberta e publicação transparente.
        </p>

        {/* Featured Publication */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 mb-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <span className="text-xs text-accent font-medium uppercase tracking-wide">Publicação em Destaque</span>
            <h2 className="text-lg font-semibold mt-1 mb-2">
              Information Aggregation in Prediction Markets: Evidence from U.S. Elections
            </h2>
            <p className="text-muted/60 text-sm leading-relaxed mb-4">
              Uma análise abrangente de como os mercados de previsão agregam informações dispersas, com dados dos ciclos eleitorais americanos de 2020–2025. Publicado em março de 2026.
            </p>
            <Link href="/research/publication/information-aggregation-elections">
              <Button variant="primary" size="sm">
                Ler Publicação
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                href={s.slug}
                className="group bg-card/40 border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.1] transition-all duration-150"
              >
                <Icon className="w-6 h-6 text-accent mb-3" />
                <h2 className="text-sm font-semibold mb-1 group-hover:text-accent transition-colors">
                  {s.title}
                </h2>
                <p className="text-xs text-muted/60 leading-relaxed">{s.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
