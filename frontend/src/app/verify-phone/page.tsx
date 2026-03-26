"use client";

import { useState, useEffect, useCallback } from "react";
import { OtpInput } from "@/components/auth-kyc/otp-input";
import { Button } from "@/components/ui/button";

export default function VerifyPhonePage() {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);
  const maskedPhone = "+1 (•••) •••-4829";

  const resetTimer = useCallback(() => {
    setTimer(60);
  }, []);

  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md mx-auto py-16 w-full space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Verifique seu telefone</h1>
          <p className="text-sm text-muted/60">
            Enviamos um código de 6 dígitos para <span className="text-foreground font-medium">{maskedPhone}</span>
          </p>
        </div>

        <OtpInput onComplete={(c) => setCode(c)} />

        <div>
          {timer > 0 ? (
            <p className="text-sm text-muted/60">
              Reenviar código em <span className="text-foreground font-medium">{timer}s</span>
            </p>
          ) : (
            <button
              type="button"
              onClick={resetTimer}
              className="text-sm text-accent/70 hover:text-accent transition-colors transition-colors"
            >
              Reenviar código
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
      </div>
    </div>
  );
}
