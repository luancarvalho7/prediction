import { ComplianceCard } from "@/components/fairness/compliance-card";
import { BarChart3, Shield, Lock, BookOpen } from "lucide-react";

export default function FairnessPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1">Transparência e Confiança</h1>
        <p className="text-muted/60 text-sm mb-8">
          Tudo o que fazemos é construído sobre transparência, imparcialidade e responsabilidade. Explore como
          mantemos nossa plataforma confiável para todos os participantes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ComplianceCard
            title="Mercados Acima de Monopólios"
            description="Por que mercados abertos e competitivos produzem melhores previsões e resultados mais justos do que controladores centralizados."
            href="/markets-over-monopolies"
            icon={<BarChart3 size={20} />}
          />
          <ComplianceCard
            title="Negociação Responsável"
            description="Ferramentas, limites e recursos desenvolvidos para manter sua experiência de negociação saudável."
            href="/responsible-trading"
            icon={<Shield size={20} />}
          />
          <ComplianceCard
            title="Integridade dos Mercados"
            description="Como detectamos manipulações, aplicamos regras e mantemos um campo de jogo nivelado."
            href="/market-integrity"
            icon={<Lock size={20} />}
          />
          <ComplianceCard
            title="Pesquisa"
            description="Pesquisas acadêmicas e evidências empíricas que sustentam o design dos mercados de previsão."
            href="/research"
            icon={<BookOpen size={20} />}
          />
        </div>
      </div>
    </div>
  );
}
