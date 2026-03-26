"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ChangeTag = "Added" | "Fixed" | "Changed" | "Deprecated";

type ChangeEntry = {
  version: string;
  date: string;
  changes: { tag: ChangeTag; text: string }[];
};

const tagColors: Record<ChangeTag, string> = {
  Added: "bg-green-500/20 text-green-400 border-green-500/30",
  Fixed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Changed: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Deprecated: "bg-red-500/20 text-red-400 border-red-500/30",
};

const entries: ChangeEntry[] = [
  {
    version: "v2.3.0",
    date: "20 de março de 2026",
    changes: [
      { tag: "Added", text: "Suporte ao protocolo FIX 4.4 para clientes institucionais" },
      { tag: "Added", text: "Canal WebSocket para atualizações de posições" },
      { tag: "Fixed", text: "Cálculo de profundidade do livro de ordens em alto volume" },
      { tag: "Changed", text: "Limites de taxa aumentados para 100 req/s para usuários autenticados" },
    ],
  },
  {
    version: "v2.2.0",
    date: "10 de fevereiro de 2026",
    changes: [
      { tag: "Added", text: "Endpoint de criação de ordens em lote (POST /v2/orders/batch)" },
      { tag: "Added", text: "Lançamento do SDK para Go" },
      { tag: "Fixed", text: "Precisão de timestamp em eventos do stream de negociações" },
      { tag: "Deprecated", text: "Endpoint /v1/markets — será removido na v3" },
    ],
  },
  {
    version: "v2.1.0",
    date: "5 de janeiro de 2026",
    changes: [
      { tag: "Added", text: "Ambiente de demo com paper trading" },
      { tag: "Added", text: "Download da especificação OpenAPI 3.1" },
      { tag: "Fixed", text: "Redefinição do cursor de paginação ao alterar filtros" },
      { tag: "Changed", text: "Tamanho mínimo de ordem reduzido para 1 contrato" },
    ],
  },
  {
    version: "v2.0.0",
    date: "1 de dezembro de 2025",
    changes: [
      { tag: "Added", text: "API REST v2 completa com modelo de recursos aprimorado" },
      { tag: "Added", text: "SDKs Python e JavaScript" },
      { tag: "Added", text: "API de streaming WebSocket" },
      { tag: "Changed", text: "Autenticação alterada para tokens Bearer" },
      { tag: "Deprecated", text: "API v1 — descontinuação programada para o T3 de 2026" },
    ],
  },
];

export default function ChangelogPage() {
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
          Changelog
        </h1>
        <p className="mb-12 text-lg text-gray-400">
          Um registro cronológico de adições, correções e mudanças que quebram
          compatibilidade na API FutureBet.
        </p>

        <div className="space-y-12">
          {entries.map((entry) => (
            <section key={entry.version}>
              <div className="mb-4 flex items-baseline gap-4">
                <h2 className="text-2xl font-semibold text-white">
                  {entry.version}
                </h2>
                <span className="text-sm text-gray-500">{entry.date}</span>
              </div>
              <ul className="space-y-3">
                {entry.changes.map((change, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-gray-800/50 bg-[#111118] px-4 py-3"
                  >
                    <span
                      className={`mt-0.5 inline-flex shrink-0 items-center rounded border px-2 py-0.5 text-xs font-semibold ${
                        tagColors[change.tag]
                      }`}
                    >
                      {change.tag}
                    </span>
                    <span className="text-sm text-gray-300">{change.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
