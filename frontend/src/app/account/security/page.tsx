"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, Key, Monitor, Clock } from "lucide-react";

const MOCK_LOGINS = [
  { date: "2026-03-25 14:32", device: "Chrome · Windows", ip: "192.168.1.***", status: "success" as const },
  { date: "2026-03-24 09:15", device: "Safari · macOS", ip: "10.0.0.***", status: "success" as const },
  { date: "2026-03-23 22:01", device: "Firefox · Linux", ip: "172.16.0.***", status: "failed" as const },
  { date: "2026-03-22 11:45", device: "Chrome · Android", ip: "192.168.1.***", status: "success" as const },
];

export default function SecurityPage() {
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-semibold">Segurança</h1>

      {/* Password Change */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <Key size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Alterar Senha</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-muted/60 mb-1">Senha Atual</label>
            <Input type="password" value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} placeholder="Senha atual" />
          </div>
          <div>
            <label className="block text-sm text-muted/60 mb-1">Nova Senha</label>
            <Input type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} placeholder="Nova senha" />
          </div>
          <div>
            <label className="block text-sm text-muted/60 mb-1">Confirmar Nova Senha</label>
            <Input type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} placeholder="Confirmar nova senha" />
          </div>
        </div>

        <Button>Atualizar Senha</Button>
      </section>

      {/* 2FA */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Autenticação de Dois Fatores</h2>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted/60">Status: <span className="text-yellow-400 font-medium">Não Ativado</span></p>
            <p className="text-xs text-muted/60 mt-1">Adicione uma camada extra de segurança à sua conta.</p>
          </div>
          <Link href="/account/2fa">
            <Button variant="outline">Configurar 2FA</Button>
          </Link>
        </div>
      </section>

      {/* Active Sessions */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor size={18} className="text-accent" />
            <h2 className="text-lg font-semibold">Sessões Ativas</h2>
          </div>
          <Link href="/account/sessions">
            <Button variant="outline" size="sm">Ver Todas</Button>
          </Link>
        </div>
        <p className="text-sm text-muted/60">Gerencie suas sessões ativas e dispositivos conectados.</p>
      </section>

      {/* Recent Login Activity */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Atividade de Login Recente</h2>
        </div>

        <div className="divide-y divide-border">
          {MOCK_LOGINS.map((login, i) => (
            <div key={i} className="flex items-center justify-between py-3 text-sm">
              <div>
                <p className="font-medium">{login.device}</p>
                <p className="text-xs text-muted/60">{login.ip} · {login.date}</p>
              </div>
              <span className={login.status === "success" ? "text-green-400 text-xs font-medium" : "text-red-400 text-xs font-medium"}>
                {login.status === "success" ? "Sucesso" : "Falhou"}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
