"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const channels = [
  {
    name: "market:{id}",
    description: "Atualizações de preço e livro de ordens em tempo real para um mercado específico.",
    events: ["price_update", "orderbook_snapshot", "orderbook_delta"],
  },
  {
    name: "trades:{id}",
    description: "Feed de negociações ao vivo para um mercado específico.",
    events: ["trade"],
  },
  {
    name: "orders",
    description: "Atualizações sobre suas próprias ordens (execuções, cancelamentos, etc.).",
    events: ["order_created", "order_filled", "order_cancelled"],
  },
  {
    name: "positions",
    description: "Alterações nas suas posições abertas e P&L.",
    events: ["position_opened", "position_updated", "position_closed"],
  },
];

const connectCode = `import WebSocket from "ws";

const ws = new WebSocket("wss://ws.futurebet.io/v2", {
  headers: {
    Authorization: "Bearer fb_live_k_abc123...",
  },
});

ws.on("open", () => {
  console.log("Connected");

  // Subscribe to a market channel
  ws.send(JSON.stringify({
    action: "subscribe",
    channel: "market:mkt_01",
  }));
});

ws.on("message", (data) => {
  const msg = JSON.parse(data.toString());
  console.log(msg);
});`;

const messageExample = `// Incoming price update
{
  "channel": "market:mkt_01",
  "event": "price_update",
  "data": {
    "marketId": "mkt_01",
    "yesPrice": 0.73,
    "noPrice": 0.27,
    "lastTrade": "2026-03-26T14:22:01Z"
  }
}

// Incoming trade
{
  "channel": "trades:mkt_01",
  "event": "trade",
  "data": {
    "id": "trd_xyz",
    "side": "yes",
    "price": 0.73,
    "quantity": 5,
    "timestamp": "2026-03-26T14:22:01Z"
  }
}`;

export default function WebSocketsPage() {
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
          API WebSocket
        </h1>
        <p className="mb-4 text-lg text-gray-400">
          Transmita dados de mercado em tempo real, atualizações de ordens e
          negociações por meio de uma conexão WebSocket persistente.
        </p>

        <div className="mb-12 rounded-lg bg-[#0d1117] px-4 py-2 font-mono text-sm text-emerald-400">
          wss://ws.futurebet.io/v2
        </div>

        {/* Connection */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Conexão
          </h2>
          <p className="mb-4 text-gray-400">
            Autentique-se passando sua chave de API no{" "}
            <code className="rounded bg-gray-800 px-1.5 py-0.5 text-sm text-emerald-400">
              Authorization
            </code>{" "}
            header durante o handshake de upgrade. O servidor envia um{" "}
            <code className="rounded bg-gray-800 px-1.5 py-0.5 text-sm text-emerald-400">
              heartbeat
            </code>{" "}
            a cada 30 segundos; responda com um pong para manter a conexão ativa.
          </p>
          <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre">{connectCode}</pre>
          </div>
        </section>

        {/* Channels */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Canais de Assinatura
          </h2>
          <div className="space-y-4">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className="rounded-xl border border-gray-800 bg-[#111118] p-5"
              >
                <code className="text-sm font-semibold text-emerald-400">
                  {ch.name}
                </code>
                <p className="mt-1 text-sm text-gray-400">{ch.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ch.events.map((e) => (
                    <span
                      key={e}
                      className="rounded-full border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs text-gray-300"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example Messages */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Exemplos de Mensagens
          </h2>
          <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre">{messageExample}</pre>
          </div>
        </section>
      </div>
    </div>
  );
}
