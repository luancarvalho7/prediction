import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  Search,
  Rocket,
  Shield,
  Wallet,
  BarChart3,
  Globe,
  PieChart,
  Scale,
  Mail,
} from "lucide-react";

const collections = [
  { slug: "getting-started", title: "Primeiros Passos", description: "Novo no FutureBet? Aprenda o básico de negociação de eventos.", icon: Rocket },
  { slug: "account-security", title: "Conta e Segurança", description: "Gerencie as configurações da sua conta, 2FA e segurança de login.", icon: Shield },
  { slug: "deposits-withdrawals", title: "Depósitos e Saques", description: "Deposite em sua conta e saque seus ganhos.", icon: Wallet },
  { slug: "trading", title: "Negociação", description: "Tipos de ordem, execução, taxas e estratégias de negociação.", icon: BarChart3 },
  { slug: "markets", title: "Mercados", description: "Como os mercados são criados, resolvidos e governados.", icon: Globe },
  { slug: "portfolio-tools", title: "Portfólio e Ferramentas", description: "Acompanhe posições, P&L e use análises avançadas.", icon: PieChart },
  { slug: "regulatory-legal", title: "Regulatório e Jurídico", description: "Conformidade, licenciamento e divulgações legais.", icon: Scale },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-7 h-7 text-accent" />
            <h1 className="text-3xl font-semibold">Central de Ajuda</h1>
          </div>
          <p className="text-muted/60 text-sm max-w-lg mx-auto mb-6">
            Encontre respostas, guias e recursos para aproveitar ao máximo o FutureBet.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/60" />
            <Input
              placeholder="Buscar artigos de ajuda…"
              className="pl-9"
            />
          </div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {collections.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.slug}
                href={`/help/${c.slug}`}
                className="group bg-card/40 border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.1] transition-all duration-150"
              >
                <Icon className="w-6 h-6 text-accent mb-3" />
                <h2 className="text-sm font-semibold mb-1 group-hover:text-accent transition-colors">
                  {c.title}
                </h2>
                <p className="text-xs text-muted/60 leading-relaxed">{c.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-8 text-center">
          <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
          <h2 className="text-lg font-semibold mb-1">Ainda precisa de ajuda?</h2>
          <p className="text-muted/60 text-sm mb-4">
            Nossa equipe de suporte está disponível 24/7 para te ajudar.
          </p>
          <Button variant="primary">Contatar Suporte</Button>
        </div>
      </div>
    </div>
  );
}
