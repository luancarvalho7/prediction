"use client";

import Link from "next/link";
import { ArrowLeft, Key, Download, Send, BarChart3 } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Obtenha sua Chave de API",
    icon: Key,
    description:
      "Crie uma conta na FutureBet e gere uma chave de API nas configurações da sua conta.",
    code: `# Navigate to Account → Settings → API Keys
# Click "Generate New Key"
# Copy your key and store it securely

export FUTUREBET_API_KEY="fb_live_k_abc123..."`,
  },
  {
    number: 2,
    title: "Instalar o SDK",
    icon: Download,
    description: "Instale o SDK oficial para sua linguagem preferida.",
    code: `# Python
pip install futurebet

# JavaScript / TypeScript
npm install @futurebet/sdk

# Go
go get github.com/futurebet/go-sdk`,
  },
  {
    number: 3,
    title: "Faça Sua Primeira Requisição",
    icon: Send,
    description: "Busque os mercados disponíveis para verificar sua configuração.",
    code: `import { FutureBet } from "@futurebet/sdk";

const client = new FutureBet({
  apiKey: process.env.FUTUREBET_API_KEY,
});

const markets = await client.markets.list({ status: "open" });
console.log(markets);
// => [{ id: "mkt_01", title: "Will BTC exceed $100k?", ... }]`,
  },
  {
    number: 4,
    title: "Realize uma Operação",
    icon: BarChart3,
    description: "Envie sua primeira ordem em um mercado aberto.",
    code: `const order = await client.orders.create({
  marketId: "mkt_01",
  side: "yes",
  type: "limit",
  price: 0.65,     // 65 cents
  quantity: 10,    // 10 contracts
});

console.log(order);
// => { id: "ord_abc", status: "open", filledQty: 0, ... }`,
  },
];

export default function QuickStartPage() {
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
          Início Rápido
        </h1>
        <p className="mb-12 text-lg text-gray-400">
          Do zero à sua primeira operação em menos de cinco minutos.
        </p>

        <div className="space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-400">
                  {step.number}
                </div>
                <div className="flex items-center gap-2">
                  <step.icon className="h-5 w-5 text-emerald-400" />
                  <h2 className="text-xl font-semibold text-white">
                    {step.title}
                  </h2>
                </div>
              </div>
              <p className="mb-4 pl-14 text-gray-400">{step.description}</p>
              <div className="ml-14 overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
                <pre className="whitespace-pre">{step.code}</pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-gray-800 bg-[#111118] p-6 text-center">
          <p className="mb-2 text-gray-400">Pronto para se aprofundar?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs/concepts"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-500"
            >
              Conceitos Fundamentais
            </Link>
            <Link
              href="/docs/rest"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500"
            >
              Referência da API REST
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
