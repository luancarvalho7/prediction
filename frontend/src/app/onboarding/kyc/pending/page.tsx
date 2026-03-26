"use client";

import Link from "next/link";
import { KycStepper } from "@/components/auth-kyc/kyc-stepper";
import { VerificationStatus } from "@/components/auth-kyc/verification-status";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function KycPendingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-xl space-y-8">
        <KycStepper current={3} />

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Documentos Enviados</h1>
          <p className="text-sm text-muted/60">
            Obrigado! Seus documentos estão sendo analisados.
          </p>
        </div>

        <VerificationStatus status="pending" />

        <div className="rounded-xl border border-white/[0.06] bg-card p-4 flex items-center gap-3">
          <Clock size={20} className="text-warning shrink-0" />
          <p className="text-sm text-muted/60">
            Prazo estimado de análise:{" "}
            <span className="text-foreground font-medium">1 a 2 dias úteis</span>.
            Você será notificado por e-mail assim que a análise for concluída.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/demo" className="flex-1">
            <Button variant="outline" size="lg" className="w-full">
              Experimentar Conta Demo
            </Button>
          </Link>
          <Link href="/browse" className="flex-1">
            <Button size="lg" className="w-full">
              Explorar Mercados
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
