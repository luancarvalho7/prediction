import Link from "next/link";
import { TrendingUp } from "lucide-react";

const FOOTER_SECTIONS = [
  {
    title: "Trading",
    links: [
      { label: "Explorar Mercados", href: "/browse" },
      { label: "Ao Vivo & Calendário", href: "/calendar" },
      { label: "Tabela de Taxas", href: "/fee-schedule" },
      { label: "Horários de Operação", href: "/trading-hours" },
    ],
  },
  {
    title: "Confiança e Segurança",
    links: [
      { label: "Transparência", href: "/fairness" },
      { label: "Negociação Responsável", href: "/responsible-trading" },
      { label: "Integridade dos Mercados", href: "/market-integrity" },
      { label: "Regulamentação", href: "/regulation" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Central de Ajuda", href: "/help" },
      { label: "Pesquisa", href: "/research" },
      { label: "Docs da API", href: "/docs" },
      { label: "Diretrizes da Comunidade", href: "/community-guidelines" },
    ],
  },
  {
    title: "Conta",
    links: [
      { label: "Portfólio", href: "/portfolio" },
      { label: "Carteira", href: "/wallet" },
      { label: "Configurações", href: "/account/settings" },
      { label: "Conta Demo", href: "/demo" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-semibold text-base mb-4 tracking-tight">
              <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <TrendingUp className="text-accent" size={16} />
              </div>
              FutureBet
            </Link>
            <p className="text-[13px] text-muted/70 leading-relaxed">
              A plataforma de trading orientada a eventos. Descubra, negocie e acompanhe mercados de previsão.
            </p>
          </div>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs uppercase tracking-wider text-muted/50 font-medium mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted/70 hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.04] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/40">
            © {new Date().getFullYear()} FutureBet. Todos os direitos reservados.
          </p>
          <div className="flex gap-5 text-xs text-muted/50">
            <Link href="/regulation" className="hover:text-foreground transition-colors">Legal</Link>
            <Link href="/community-guidelines" className="hover:text-foreground transition-colors">Termos</Link>
            <Link href="/reporting-transparency" className="hover:text-foreground transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
