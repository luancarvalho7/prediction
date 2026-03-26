"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const relatedEvents = [
  { slug: "prediction-markets-workshop-2026", title: "Prediction Markets Workshop 2026" },
  { slug: "behavioral-finance-seminar", title: "Behavioral Finance Seminar Series" },
  { slug: "regulatory-roundtable-q2", title: "Regulatory Roundtable Q2 2026" },
];

export default function EventPage() {
  const { slug } = useParams<{ slug: string }>();
  const title = formatTitle(slug);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted/60 mb-6 flex-wrap">
          <Link href="/research" className="hover:text-accent transition-colors">Pesquisa</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">Evento</span>
        </nav>

        <Link
          href="/research"
          className="inline-flex items-center gap-1.5 text-sm text-muted/60 hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Pesquisa
        </Link>

        <h1 className="text-2xl font-semibold mb-4">{title}</h1>

        {/* Event Details */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 mb-8">
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2 text-muted/60">
              <Calendar className="w-4 h-4 text-accent" />
              <span>June 12–14, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-muted/60">
              <MapPin className="w-4 h-4 text-accent" />
              <span>MIT Media Lab, Cambridge, MA</span>
            </div>
            <div className="flex items-center gap-2 text-muted/60">
              <Clock className="w-4 h-4 text-accent" />
              <span>9:00 AM – 5:00 PM ET (each day)</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <article className="space-y-5 text-sm text-foreground/90 leading-relaxed mb-10">
          <h2 className="text-lg font-semibold text-foreground">Sobre Este Evento</h2>
          <p>
            Este evento reúne pesquisadores líderes, profissionais do setor e formuladores de políticas para discutir os mais recentes desenvolvimentos em mercados de previsão, agregação de informações e negociação orientada a eventos. Os participantes terão a oportunidade de ouvir apresentações keynote, participar de workshops interativos e fazer networking com pares que atuam na fronteira do design de mercado.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Destaques da Agenda</h2>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/80">
            <li>Keynote: &quot;O Futuro dos Mercados de Previsão&quot; por Prof. Robin Hanson</li>
            <li>Painel: Desafios e Oportunidades Regulatórias</li>
            <li>Workshop: Projetando Mecanismos de Mercado com Incentivos Compatíveis</li>
            <li>Sessão de Pôsteres: Novas Pesquisas em Finanças Comportamentais</li>
            <li>Jantar de Networking &amp; Cerimônia de Premiação</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">Quem Deve Participar</h2>
          <p>
            Este evento é ideal para pesquisadores acadêmicos, cientistas de dados, analistas quantitativos, profissionais de compliance e qualquer pessoa interessada na interseção entre mercados e previsão.
          </p>
        </article>

        {/* Registration CTA */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 text-center mb-10">
          <h2 className="text-base font-semibold mb-2">Registre-se Agora</h2>
          <p className="text-sm text-muted/60 mb-4">
            As inscrições antecipadas estão abertas. Garanta sua vaga antes de 15 de maio de 2026.
          </p>
          <Button variant="primary" size="md">Registrar-se no Evento</Button>
        </div>

        {/* Related Events */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Eventos Relacionados</h2>
          <div className="flex flex-col gap-2">
            {relatedEvents
              .filter((e) => e.slug !== slug)
              .slice(0, 3)
              .map((e) => (
                <Link
                  key={e.slug}
                  href={`/research/event/${e.slug}`}
                  className="group bg-card/40 border border-white/[0.06] rounded-xl px-4 py-3 flex items-center justify-between hover:border-white/[0.1] transition-all duration-150"
                >
                  <span className="text-sm group-hover:text-accent transition-colors">{e.title}</span>
                  <ChevronRight className="w-4 h-4 text-muted/60 group-hover:text-accent transition-colors" />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
