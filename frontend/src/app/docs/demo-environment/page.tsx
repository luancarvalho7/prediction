"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const differences = [
  { aspect: "Dinheiro real", production: "Sim", demo: "Não — apenas saldo fictício" },
  { aspect: "Dados de mercado", production: "Ao vivo", demo: "Simulado (atraso de 15 min)" },
  { aspect: "Limites de taxa", production: "100 req/s", demo: "20 req/s" },
  { aspect: "Execução de ordens", production: "Motor de correspondência real", demo: "Simulação de execução instantânea" },
  { aspect: "Liquidação", production: "Automático com fundos reais", demo: "Liquidação simulada" },
  { aspect: "Chaves de API", production: "fb_live_k_*", demo: "fb_demo_k_*" },
];

const switchCode = `// Switch between environments by changing the base URL and key prefix

// Production
const client = new FutureBet({
  baseUrl: "https://api.futurebet.io/v2",
  apiKey: process.env.FUTUREBET_LIVE_KEY,   // fb_live_k_...
});

// Demo
const client = new FutureBet({
  baseUrl: "https://demo-api.futurebet.io/v2",
  apiKey: process.env.FUTUREBET_DEMO_KEY,   // fb_demo_k_...
});`;

export default function DemoEnvironmentPage() {
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
          Ambiente de Demo
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          O sandbox da FutureBet permite que você teste sua integração sem
          arriscar fundos reais. Ele espelha a API de produção com algumas
          diferenças anotadas abaixo.
        </p>

        {/* Base URL & Credentials */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Detalhes de Conexão
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-800 bg-[#111118] p-5">
              <p className="mb-1 text-sm text-gray-500">URL Base</p>
              <code className="text-sm text-emerald-400">
                https://demo-api.futurebet.io/v2
              </code>
            </div>
            <div className="rounded-xl border border-gray-800 bg-[#111118] p-5">
              <p className="mb-1 text-sm text-gray-500">URL WebSocket</p>
              <code className="text-sm text-emerald-400">
                wss://demo-ws.futurebet.io/v2
              </code>
            </div>
            <div className="rounded-xl border border-gray-800 bg-[#111118] p-5">
              <p className="mb-1 text-sm text-gray-500">Credenciais de Teste</p>
              <div className="mt-2 space-y-1 font-mono text-sm text-gray-300">
                <p>
                  Chave de API:{" "}
                  <span className="text-emerald-400">
                    fb_demo_k_test_000001
                  </span>
                </p>
                <p>
                  Saldo Inicial:{" "}
                  <span className="text-emerald-400">$100,000.00</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Limites de Taxa
          </h2>
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
              <div className="text-sm text-gray-300">
                <p className="mb-1 font-medium text-yellow-400">
                  Limites de taxa menores no demo
                </p>
                <p>
                  O ambiente de demo aplica um máximo de{" "}
                  <strong className="text-white">20 requisições por segundo</strong>{" "}
                  por chave de API. Exceder isso retornará o código de status{" "}
                  <code className="rounded bg-gray-800 px-1 text-xs text-emerald-400">
                    429
                  </code>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differences Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Demo vs Produção
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-[#111118] text-gray-400">
                  <th className="px-4 py-3 font-medium">Aspecto</th>
                  <th className="px-4 py-3 font-medium">Produção</th>
                  <th className="px-4 py-3 font-medium">Demo</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((d) => (
                  <tr
                    key={d.aspect}
                    className="border-b border-gray-800/50 bg-[#0d1117]"
                  >
                    <td className="px-4 py-3 text-white">{d.aspect}</td>
                    <td className="px-4 py-3 text-gray-300">
                      {d.production}
                    </td>
                    <td className="px-4 py-3 text-gray-300">{d.demo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Switching */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Alternando Entre Ambientes
          </h2>
          <p className="mb-4 text-gray-400">
            Todos os SDKs aceitam um parâmetro <code className="rounded bg-gray-800 px-1.5 py-0.5 text-xs text-emerald-400">baseUrl</code>.
            Troque a URL e a chave de API para alternar entre demo e produção.
          </p>
          <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre">{switchCode}</pre>
          </div>
        </section>
      </div>
    </div>
  );
}
