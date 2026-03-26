"use client";

import Link from "next/link";
import { KycStepper } from "@/components/auth-kyc/kyc-stepper";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, IdCard, CheckCircle } from "lucide-react";

const ACCEPTED_DOCS = [
  { icon: FileText, label: "Passaporte" },
  { icon: CreditCard, label: "Carteira de Habilitação" },
  { icon: IdCard, label: "RG/CPF" },
];

const REQUIREMENTS = [
  "Foto nítida e de alta qualidade — sem desfoque ou reflexo",
  "O documento deve ser válido e dentro do prazo de validade",
  "O documento inteiro deve estar visível no enquadramento",
];

export default function KycIntroPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-xl space-y-8">
        <KycStepper current={0} />

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Verificação de Identidade</h1>
          <p className="text-sm text-muted/60">
            Tempo estimado: <span className="text-foreground font-medium">~5 minutos</span>
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-muted/60 uppercase tracking-wide">
            Documentos Aceitos
          </h2>
          <div className="grid gap-3">
            {ACCEPTED_DOCS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-card p-4"
              >
                <Icon size={20} className="text-accent" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-muted/60 uppercase tracking-wide">
            Requisitos
          </h2>
          <ul className="space-y-2">
            {REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-muted/60">
                <CheckCircle size={16} className="text-success mt-0.5 shrink-0" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <Link href="/onboarding/kyc/form" className="block">
          <Button size="lg" className="w-full">
            Iniciar Verificação
          </Button>
        </Link>
      </div>
    </main>
  );
}
