"use client";

import Link from "next/link";
import {
  Code,
  Zap,
  BookOpen,
  Terminal,
  Globe,
  Package,
  FileText,
  FileJson,
  Monitor,
} from "lucide-react";

const navItems = [
  { title: "Início Rápido", description: "Comece em minutos", href: "/docs/quick-start", icon: Zap },
  { title: "Conceitos", description: "Conceitos fundamentais e arquitetura da plataforma", href: "/docs/concepts", icon: BookOpen },
  { title: "API REST", description: "Endpoints HTTP para todas as operações", href: "/docs/rest", icon: Code },
  { title: "WebSockets", description: "Feeds de dados em tempo real", href: "/docs/websockets", icon: Globe },
  { title: "Protocolo FIX", description: "Conectividade de nível institucional", href: "/docs/fix", icon: Terminal },
  { title: "SDKs e Bibliotecas", description: "Bibliotecas cliente em linguagens populares", href: "/docs/sdks", icon: Package },
  { title: "Changelog", description: "Últimas atualizações e notas de versão", href: "/docs/changelog", icon: FileText },
  { title: "Especificação OpenAPI", description: "Contrato de API legível por máquina", href: "/docs/openapi", icon: FileJson },
  { title: "Ambiente de Demo", description: "Sandbox para testes e desenvolvimento", href: "/docs/demo-environment", icon: Monitor },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            <Code className="h-4 w-4" />
            Documentação para Desenvolvedores
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Documentação da API
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Tudo o que você precisa para integrar com a plataforma FutureBet.
            Construa bots de trading, dashboards e interfaces personalizadas usando
            nossas APIs e SDKs abrangentes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-gray-800 bg-[#111118] p-6 transition-all hover:border-emerald-500/40 hover:bg-[#16161f]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="mb-1 text-lg font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400">{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-gray-800 bg-[#0d1117] p-6">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            URL Base
          </h3>
          <code className="text-sm text-emerald-400">
            https://api.futurebet.io/v2
          </code>
        </div>
      </div>
    </div>
  );
}
