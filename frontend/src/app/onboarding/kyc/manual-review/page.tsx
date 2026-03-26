"use client";

import Link from "next/link";
import { VerificationStatus } from "@/components/auth-kyc/verification-status";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Mail, HelpCircle } from "lucide-react";

export default function KycManualReviewPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-xl space-y-8">
        <VerificationStatus status="manual-review" />

        <div className="rounded-xl border border-white/[0.06] bg-card p-5 space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-accent" />
            <h2 className="text-base font-semibold">Por que análise adicional?</h2>
          </div>
          <p className="text-sm text-muted/60 leading-relaxed">
            Algumas contas requerem etapas adicionais de verificação. Isso não é um erro ou
            indicação de qualquer problema — faz parte do nosso processo padrão de segurança e
            conformidade para proteger sua conta e seus fundos.
          </p>
          <p className="text-sm text-muted/60 leading-relaxed">
            Um membro da nossa equipe de conformidade está analisando seu envio. Você
            receberá uma atualização por e-mail assim que a análise for concluída.
          </p>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-card p-5 space-y-3">
          <h2 className="text-sm font-semibold text-muted/60 uppercase tracking-wide">
            Precisa de Ajuda?
          </h2>
          <div className="flex items-center gap-3 text-sm text-muted/60">
            <Mail size={16} className="text-accent shrink-0" />
            <span>
              Envie-nos um e-mail para{" "}
              <span className="text-foreground font-medium">support@futurebet.com</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted/60">
            <HelpCircle size={16} className="text-accent shrink-0" />
            <span>
              Visite nossa{" "}
              <Link href="/help" className="text-accent/70 hover:text-accent transition-colors font-medium">
                Central de Ajuda
              </Link>{" "}
              para perguntas frequentes e chat ao vivo
            </span>
          </div>
        </div>

        <Link href="/help" className="block">
          <Button variant="outline" size="lg" className="w-full">
            Ir para a Central de Ajuda
          </Button>
        </Link>
      </div>
    </main>
  );
}
