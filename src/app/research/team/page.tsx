import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";

const team = [
  {
    name: "Dr. Elena Vasquez",
    role: "Chefe de Pesquisa",
    institution: "Stanford University",
    bio: "Elena lidera a divisão de Pesquisa da FutureBet. Seu trabalho foca em microestrutura de mercado e no design de mecanismos de negociação com incentivos compatíveis. Ela possui Ph.D. em Economia pelo MIT.",
  },
  {
    name: "Prof. James Chen",
    role: "Cientista Pesquisador Sênior",
    institution: "University of Chicago",
    bio: "James é especializado em agregação de informações e descoberta de preços em mercados de previsão. Ele publicou mais de 40 artigos nos principais periódicos de finanças e economia.",
  },
  {
    name: "Dr. Amara Osei",
    role: "Cientista Pesquisadora",
    institution: "Oxford University",
    bio: "A pesquisa de Amara conecta economia comportamental e design de mercado. Ela estuda viêses cognitivos entre traders de varejo e desenvolve intervenções de desviésamento.",
  },
  {
    name: "Dr. Raj Patel",
    role: "Pesquisador Quantitativo",
    institution: "Carnegie Mellon University",
    bio: "Raj traz expertise em aprendizado de máquina e modelagem estatística para a equipe. Ele desenvolve modelos de previsão que servem como referência para os preços dos mercados de previsão.",
  },
  {
    name: "Dr. Sophie Laurent",
    role: "Líder de Política & Regulação",
    institution: "Sciences Po, Paris",
    bio: "Sophie atua na interseção entre mercados de previsão e política regulatória. Ela assessora governos e organismos internacionais sobre estruturas de integridade de mercado.",
  },
  {
    name: "Dr. Marcus Webb",
    role: "Pesquisador Visitante",
    institution: "UC Berkeley",
    bio: "Marcus é pesquisador visitante estudando o papel dos provedores de liquidez em mercados de previsão de baixo volume. Sua bolsa se estende até dezembro de 2026.",
  },
];

export default function TeamPage() {
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
          <Users className="w-6 h-6 text-accent" />
          <h1 className="text-2xl font-semibold">Equipe de Pesquisa</h1>
        </div>
        <p className="text-muted/60 text-sm mb-8 max-w-2xl">
          Nossa equipe multidisciplinar combina expertise em economia, finanças, ciência da computação e políticas públicas para avançar a ciência dos mercados de previsão.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm mb-3">
                {m.name
                  .split(" ")
                  .filter((_, i) => i === 0 || i === m.name.split(" ").length - 1)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h2 className="text-sm font-semibold">{m.name}</h2>
              <p className="text-xs text-accent mb-0.5">{m.role}</p>
              <p className="text-xs text-muted/60 mb-2">{m.institution}</p>
              <p className="text-xs text-muted/60 leading-relaxed flex-1">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
