"use client";

import { useState } from "react";
import { OtpInput } from "@/components/auth-kyc/otp-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VerifyEmailPage() {
  const [code, setCode] = useState("");
  const [resent, setResent] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md mx-auto py-16 w-full space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Verifique seu e-mail</h1>
          <p className="text-sm text-muted/60">
            Enviamos um código de 6 dígitos para seu e-mail. Digite abaixo para continuar.
          </p>
        </div>

        <OtpInput onComplete={(c) => setCode(c)} />

        <div>
          {resent ? (
            <p className="text-sm text-accent">Código reenviado!</p>
          ) : (
            <button
              type="button"
              onClick={() => setResent(true)}
              className="text-sm text-muted/60 hover:text-accent transition-colors"
            >
              Não recebeu o código? <span className="text-accent">Reenviar</span>
            </button>
          )}
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full"
          disabled={code.length < 6}
          onClick={() => {
            /* navigate to next step */
          }}
        >
          Continuar
        </Button>

        <Link href="/login" className="inline-block text-sm text-muted/60 hover:text-foreground">
          Voltar para o login
        </Link>
      </div>
    </div>
  );
}
