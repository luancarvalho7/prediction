"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const fixMessages = [
  { msgType: "A", name: "Logon", direction: "Cliente → Servidor", description: "Iniciar uma sessão FIX com credenciais" },
  { msgType: "5", name: "Logout", direction: "Ambos", description: "Encerrar a sessão graciosamente" },
  { msgType: "0", name: "Heartbeat", direction: "Ambos", description: "Mensagem de keep-alive (intervalo de 30 s)" },
  { msgType: "D", name: "New Order Single", direction: "Cliente → Servidor", description: "Enviar uma nova ordem" },
  { msgType: "F", name: "Order Cancel Request", direction: "Cliente → Servidor", description: "Solicitar cancelamento de uma ordem aberta" },
  { msgType: "8", name: "Execution Report", direction: "Servidor → Cliente", description: "Confirmação, execução ou rejeição de ordem" },
  { msgType: "V", name: "Market Data Request", direction: "Cliente → Servidor", description: "Assinar dados de mercado" },
  { msgType: "W", name: "Market Data Snapshot", direction: "Servidor → Cliente", description: "Atualização completa dos dados de mercado" },
  { msgType: "X", name: "Market Data Incremental", direction: "Servidor → Cliente", description: "Atualização incremental dos dados de mercado" },
  { msgType: "j", name: "Business Message Reject", direction: "Servidor → Cliente", description: "Rejeição com código de motivo" },
];

const sessionSetup = `# FIX 4.4 Session Configuration
SenderCompID = YOUR_COMP_ID
TargetCompID = FUTUREBET
FixVersion   = FIX.4.4
Host         = fix.futurebet.io
Port         = 9876
SSL          = true

HeartBtInt     = 30
ResetOnLogon   = Y
ResetOnLogout  = Y`;

const exampleLogon = `8=FIX.4.4 | 9=128 | 35=A | 49=YOUR_COMP_ID | 56=FUTUREBET
34=1 | 52=20260326-14:30:00.000 | 98=0 | 108=30
553=your_username | 554=your_password | 10=091`;

export default function FixProtocolPage() {
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
          Protocolo FIX
        </h1>
        <p className="mb-4 text-lg text-gray-400">
          A interface FIX (Financial Information eXchange) 4.4 fornece
          conectividade de baixa latência de nível institucional para
          formadores de mercado profissionais e traders algorítmicos.
        </p>
        <div className="mb-12 rounded-lg bg-[#0d1117] px-4 py-2 font-mono text-sm text-emerald-400">
          fix.futurebet.io:9876 (TLS)
        </div>

        {/* Session Setup */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Configuração de Sessão
          </h2>
          <p className="mb-4 text-gray-400">
            Contate{" "}
            <span className="text-emerald-400">fix-support@futurebet.io</span>{" "}
            para receber seu CompID e credenciais. Abaixo está uma configuração
            de exemplo para engines compatíveis com QuickFIX.
          </p>
          <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre">{sessionSetup}</pre>
          </div>
        </section>

        {/* Message Types Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Tipos de Mensagem
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-[#111118] text-gray-400">
                  <th className="px-4 py-3 font-medium">MsgType (35)</th>
                  <th className="px-4 py-3 font-medium">Nome</th>
                  <th className="px-4 py-3 font-medium">Direção</th>
                  <th className="px-4 py-3 font-medium">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {fixMessages.map((msg) => (
                  <tr
                    key={msg.msgType}
                    className="border-b border-gray-800/50 bg-[#0d1117]"
                  >
                    <td className="px-4 py-3 font-mono text-emerald-400">
                      {msg.msgType}
                    </td>
                    <td className="px-4 py-3 text-white">{msg.name}</td>
                    <td className="px-4 py-3 text-gray-400">
                      {msg.direction}
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {msg.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Logon */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Exemplo de Mensagem de Logon
          </h2>
          <div className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre">{exampleLogon}</pre>
          </div>
        </section>
      </div>
    </div>
  );
}
