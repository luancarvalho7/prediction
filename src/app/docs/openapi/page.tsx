"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

const specPreview = `openapi: "3.1.0"
info:
  title: FutureBet API
  version: "2.3.0"
  description: Prediction market trading platform API
  contact:
    email: api-support@futurebet.io

servers:
  - url: https://api.futurebet.io/v2
    description: Production
  - url: https://demo-api.futurebet.io/v2
    description: Demo / Sandbox

paths:
  /markets:
    get:
      summary: List markets
      tags: [Markets]
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [upcoming, open, closed, resolved]
      responses:
        "200":
          description: A paginated list of markets
  /orders:
    post:
      summary: Create an order
      tags: [Orders]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateOrder"
      responses:
        "201":
          description: Order created`;

export default function OpenApiPage() {
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
          Especificação OpenAPI
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          A API FutureBet é descrita por uma especificação OpenAPI 3.1 — um
          contrato legível por máquina que você pode usar para gerar clientes,
          validar requisições e alimentar ferramentas de documentação.
        </p>

        {/* Download buttons */}
        <div className="mb-12 flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-500">
            <Download className="h-4 w-4" />
            Baixar JSON
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#111118] px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500">
            <Download className="h-4 w-4" />
            Baixar YAML
          </button>
        </div>

        {/* Embedded preview */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Pré-visualização da Especificação
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#0d1117] p-6 font-mono text-sm leading-relaxed text-gray-300">
            <pre className="whitespace-pre">{specPreview}</pre>
          </div>
        </section>

        <div className="mt-12 rounded-xl border border-gray-800 bg-[#111118] p-6">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Usar com geradores de código
          </h3>
          <p className="mb-4 text-sm text-gray-400">
            Gere um cliente tipado em qualquer linguagem usando o arquivo de especificação:
          </p>
          <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre">{`npx @openapitools/openapi-generator-cli generate \\
  -i https://api.futurebet.io/v2/openapi.json \\
  -g typescript-fetch \\
  -o ./generated-client`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
