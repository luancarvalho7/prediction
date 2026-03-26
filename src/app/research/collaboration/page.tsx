import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Handshake, GraduationCap, Database, FlaskConical } from "lucide-react";

const programs = [
  {
    title: "Parcerias Acadêmicas",
    description:
      "Colaboramos com universidades e instituições de pesquisa em todo o mundo. Os parceiros recebem acesso a dados de negociação anonimizados, oportunidades de coautoria e financiamento para pesquisa em mercados de previsão.",
    icon: GraduationCap,
  },
  {
    title: "Programa de Acesso a Dados",
    description:
      "Pesquisadores qualificados podem se candidatar para acesso ao nosso conjunto de dados granular e anonimizado em nível transacional, abrangendo milhões de negociações em milhares de contratos de eventos.",
    icon: Database,
  },
  {
    title: "Programas de Pesquisa",
    description:
      "Nossos programas de pesquisador visitante e de bolsas incorporam acadêmicos à equipe da FutureBet por 3–12 meses, com acesso total a ferramentas internas, dados e suporte de engenharia.",
    icon: FlaskConical,
  },
];

export default function CollaborationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-4xl mx-auto">
        <Link
          href="/research"
          className="inline-flex items-center gap-1.5 text-sm text-muted/60 hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Pesquisa
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <Handshake className="w-6 h-6 text-accent" />
          <h1 className="text-2xl font-semibold">Colabore Conosco</h1>
        </div>
        <p className="text-muted/60 text-sm mb-10 max-w-2xl">
          A FutureBet Research está comprometida com a ciência aberta. Fazemos parceria com instituições líderes para avançar a compreensão dos mercados de previsão e suas aplicações.
        </p>

        {/* Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 flex flex-col"
              >
                <Icon className="w-6 h-6 text-accent mb-3" />
                <h2 className="text-sm font-semibold mb-2">{p.title}</h2>
                <p className="text-xs text-muted/60 leading-relaxed flex-1">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Application Form Link */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-8">
          <h2 className="text-lg font-semibold mb-1">Candidatar-se para Colaborar</h2>
          <p className="text-muted/60 text-sm mb-6">
            Conte-nos sobre seus interesses de pesquisa e como podemos trabalhar juntos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Input id="collab-name" label="Nome Completo" placeholder="Dra. Jane Smith" />
            <Input id="collab-email" label="E-mail" type="email" placeholder="jane@university.edu" />
            <Input id="collab-institution" label="Instituição" placeholder="MIT" />
            <Input id="collab-area" label="Área de Pesquisa" placeholder="Economia Comportamental" />
          </div>

          <Button variant="primary" size="md">Enviar Candidatura</Button>
        </div>
      </div>
    </div>
  );
}
