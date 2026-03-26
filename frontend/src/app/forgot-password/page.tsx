"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md mx-auto py-16 w-full text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold">Verifique seu e-mail</h1>
          <p className="text-sm text-muted/60">
            Enviamos um link de redefinição de senha para <span className="text-foreground font-medium">{email}</span>
          </p>
          <Link href="/login" className="inline-block text-sm text-accent/70 hover:text-accent transition-colors mt-4">
            Voltar para o login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md mx-auto py-16 w-full space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-1">Redefina sua senha</h1>
          <p className="text-sm text-muted/60">
            Digite seu e-mail e enviaremos um link de redefinição
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" className="w-full" size="lg">
            Enviar Link de Redefinição
          </Button>
        </form>

        <div className="text-center">
          <Link href="/login" className="text-sm text-muted/60 hover:text-foreground">
            Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  );
}
