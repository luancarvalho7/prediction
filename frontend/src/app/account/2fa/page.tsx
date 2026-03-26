"use client";

import { useState } from "react";
import { OtpInput } from "@/components/auth-kyc/otp-input";
import { Button } from "@/components/ui/button";
import { Shield, QrCode, KeyRound, Copy } from "lucide-react";

const MOCK_RECOVERY_CODES = [
  "A1B2-C3D4", "E5F6-G7H8", "J9K0-L1M2",
  "N3P4-Q5R6", "S7T8-U9V0", "W1X2-Y3Z4",
];

export default function TwoFactorPage() {
  const [enabled, setEnabled] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);

  const handleVerify = (code: string) => {
    if (code.length === 6) {
      setVerified(true);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-semibold">Autenticação de Dois Fatores</h1>

      {/* Status */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-accent" />
            <h2 className="text-lg font-semibold">Status do 2FA</h2>
          </div>
          <span className={`text-sm font-medium ${enabled ? "text-green-400" : "text-yellow-400"}`}>
            {enabled ? "Ativado" : "Desativado"}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant={enabled ? "outline" : "primary"}
            onClick={() => {
              setEnabled(!enabled);
              if (enabled) setVerified(false);
            }}
          >
            {enabled ? "Desativar 2FA" : "Ativar 2FA"}
          </Button>
        </div>
      </section>

      {/* QR Code Setup */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <QrCode size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Configuração</h2>
        </div>

        <p className="text-sm text-muted/60">Escaneie este QR code com seu aplicativo autenticador (Google Authenticator, Authy, etc.)</p>

        {/* QR Placeholder */}
        <div className="w-48 h-48 bg-white/10 border border-white/[0.06] rounded-xl flex items-center justify-center mx-auto">
          <QrCode size={80} className="text-muted/60" />
        </div>

        <p className="text-xs text-muted/60 text-center">
          Chave manual: <code className="bg-surface px-2 py-0.5 rounded text-xs font-mono text-white">JBSWY3DPEHPK3PXP</code>
        </p>

        {/* OTP Verification */}
        <div className="space-y-3">
          <p className="text-sm font-medium">Digite o código de 6 dígitos do seu autenticador:</p>
          <OtpInput length={6} onComplete={handleVerify} />
          {verified && (
            <p className="text-green-400 text-sm font-medium">✓ Código verificado com sucesso</p>
          )}
        </div>
      </section>

      {/* Recovery Codes */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <KeyRound size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Códigos de Recuperação</h2>
        </div>

        <p className="text-sm text-muted/60">
          Salve esses códigos de recuperação em um lugar seguro. Cada código pode ser usado apenas uma vez para entrar se você perder acesso ao seu autenticador.
        </p>

        <Button variant="outline" onClick={() => setShowRecovery(!showRecovery)}>
          {showRecovery ? "Ocultar Códigos de Recuperação" : "Mostrar Códigos de Recuperação"}
        </Button>

        {showRecovery && (
          <div className="bg-surface border border-white/[0.06] rounded-lg p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {MOCK_RECOVERY_CODES.map((code) => (
                <div key={code} className="font-mono text-sm text-center py-1.5 bg-card rounded border border-white/[0.06]">
                  {code}
                </div>
              ))}
            </div>
            <button className="mt-3 flex items-center gap-1 text-xs text-accent/70 hover:text-accent transition-colors mx-auto">
              <Copy size={12} /> Copiar todos os códigos
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
