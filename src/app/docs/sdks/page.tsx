"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const sdks = [
  {
    lang: "Python",
    pkg: "futurebet",
    install: "pip install futurebet",
    version: "2.3.0",
    color: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
    github: "#",
    example: `from futurebet import Client

client = Client(api_key="fb_live_k_abc123...")
markets = client.markets.list(status="open")
for m in markets:
    print(m.title, m.yes_price)`,
  },
  {
    lang: "JavaScript / TypeScript",
    pkg: "@futurebet/sdk",
    install: "npm install @futurebet/sdk",
    version: "2.3.0",
    color: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    github: "#",
    example: `import { FutureBet } from "@futurebet/sdk";

const client = new FutureBet({ apiKey: "fb_live_k_abc123..." });
const markets = await client.markets.list({ status: "open" });
markets.forEach((m) => console.log(m.title, m.yesPrice));`,
  },
  {
    lang: "Go",
    pkg: "github.com/futurebet/go-sdk",
    install: "go get github.com/futurebet/go-sdk",
    version: "2.3.0",
    color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    github: "#",
    example: `import fb "github.com/futurebet/go-sdk"

client := fb.NewClient("fb_live_k_abc123...")
markets, _ := client.Markets.List(fb.ListParams{Status: "open"})
for _, m := range markets {
    fmt.Println(m.Title, m.YesPrice)
}`,
  },
  {
    lang: "Java",
    pkg: "io.futurebet:sdk",
    install: `<!-- Maven -->
<dependency>
  <groupId>io.futurebet</groupId>
  <artifactId>sdk</artifactId>
  <version>2.3.0</version>
</dependency>`,
    version: "2.3.0",
    color: "border-red-500/30 bg-red-500/10 text-red-400",
    github: "#",
    example: `FutureBetClient client = FutureBetClient.builder()
    .apiKey("fb_live_k_abc123...")
    .build();

List<Market> markets = client.markets()
    .list(ListParams.builder().status("open").build());
markets.forEach(m -> System.out.println(m.getTitle()));`,
  },
];

export default function SdksPage() {
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
          SDKs e Bibliotecas
        </h1>
        <p className="mb-12 text-lg text-gray-400">
          Bibliotecas cliente oficiais para acelerar sua integração. Todos os SDKs são
          de código aberto e ativamente mantidos.
        </p>

        <div className="space-y-8">
          {sdks.map((sdk) => (
            <div
              key={sdk.lang}
              className="rounded-xl border border-gray-800 bg-[#111118] p-6"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold text-white">
                  {sdk.lang}
                </h2>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${sdk.color}`}
                >
                  v{sdk.version}
                </span>
                <a
                  href={sdk.github}
                  className="ml-auto inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  GitHub <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="mb-3 text-sm text-gray-500">Instalar</p>
              <div className="mb-4 overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
                <pre className="whitespace-pre">{sdk.install}</pre>
              </div>

              <p className="mb-3 text-sm text-gray-500">Exemplo rápido</p>
              <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
                <pre className="whitespace-pre">{sdk.example}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
