"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Endpoint = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
};

type EndpointGroup = {
  name: string;
  endpoints: Endpoint[];
};

const methodColors: Record<string, string> = {
  GET: "bg-green-500/20 text-green-400 border-green-500/30",
  POST: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  PUT: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  DELETE: "bg-red-500/20 text-red-400 border-red-500/30",
};

const groups: EndpointGroup[] = [
  {
    name: "Mercados",
    endpoints: [
      { method: "GET", path: "/v2/markets", description: "Listar todos os mercados com filtros opcionais" },
      { method: "GET", path: "/v2/markets/:id", description: "Obter um único mercado por ID" },
      { method: "GET", path: "/v2/markets/:id/orderbook", description: "Obter o livro de ordens atual de um mercado" },
      { method: "GET", path: "/v2/markets/:id/trades", description: "Listar negociações recentes de um mercado" },
    ],
  },
  {
    name: "Ordens",
    endpoints: [
      { method: "GET", path: "/v2/orders", description: "Listar suas ordens com filtros opcionais" },
      { method: "POST", path: "/v2/orders", description: "Criar uma nova ordem (limitada ou de mercado)" },
      { method: "GET", path: "/v2/orders/:id", description: "Obter detalhes de uma ordem específica" },
      { method: "DELETE", path: "/v2/orders/:id", description: "Cancelar uma ordem aberta" },
      { method: "DELETE", path: "/v2/orders", description: "Cancelar todas as ordens abertas" },
    ],
  },
  {
    name: "Posições",
    endpoints: [
      { method: "GET", path: "/v2/positions", description: "Listar todas as posições abertas" },
      { method: "GET", path: "/v2/positions/:id", description: "Obter detalhes de uma posição específica" },
      { method: "GET", path: "/v2/positions/history", description: "Listar posições fechadas / liquidadas" },
    ],
  },
  {
    name: "Conta",
    endpoints: [
      { method: "GET", path: "/v2/account", description: "Obter informações da sua conta" },
      { method: "GET", path: "/v2/account/balance", description: "Obter saldo da carteira e fundos disponíveis" },
      { method: "GET", path: "/v2/account/api-keys", description: "Listar suas chaves de API" },
      { method: "POST", path: "/v2/account/api-keys", description: "Gerar uma nova chave de API" },
      { method: "DELETE", path: "/v2/account/api-keys/:id", description: "Revogar uma chave de API" },
    ],
  },
];

const exampleCode = `curl -X GET "https://api.futurebet.io/v2/markets?status=open&limit=10" \\
  -H "Authorization: Bearer fb_live_k_abc123..." \\
  -H "Content-Type: application/json"

# Response
{
  "data": [
    {
      "id": "mkt_01",
      "title": "Will BTC exceed $100k by end of Q2 2026?",
      "status": "open",
      "yesPrice": 0.72,
      "noPrice": 0.28,
      "volume": 184320,
      "closeDate": "2026-06-30T23:59:59Z"
    }
  ],
  "meta": { "total": 42, "page": 1, "limit": 10 }
}`;

export default function RestApiPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/docs"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar à Documentação
        </Link>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white">
          Referência da API REST
        </h1>
        <p className="mb-4 text-lg text-gray-400">
          A API REST da FutureBet usa métodos HTTP padrão e retorna respostas
          JSON. Todas as requisições requerem uma chave de API passada via o{" "}
          <code className="rounded bg-gray-800 px-1.5 py-0.5 text-sm text-emerald-400">
            Authorization
          </code>{" "}
          header.
        </p>
        <div className="mb-12 rounded-lg bg-[#0d1117] px-4 py-2 font-mono text-sm text-emerald-400">
          URL Base: https://api.futurebet.io/v2
        </div>

        <div className="space-y-12">
          {groups.map((group) => (
            <section key={group.name}>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {group.name}
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-800">
                {group.endpoints.map((ep, i) => (
                  <div
                    key={`${ep.method}-${ep.path}`}
                    className={`flex items-start gap-4 px-5 py-4 ${
                      i !== 0 ? "border-t border-gray-800" : ""
                    } bg-[#111118]`}
                  >
                    <span
                      className={`inline-flex min-w-[70px] items-center justify-center rounded border px-2 py-0.5 text-xs font-semibold uppercase ${
                        methodColors[ep.method]
                      }`}
                    >
                      {ep.method}
                    </span>
                    <code className="shrink-0 text-sm text-gray-200">
                      {ep.path}
                    </code>
                    <span className="text-sm text-gray-500">
                      {ep.description}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Exemplo de Requisição
          </h2>
          <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre">{exampleCode}</pre>
          </div>
        </section>
      </div>
    </div>
  );
}
