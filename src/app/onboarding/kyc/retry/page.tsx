"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VerificationStatus } from "@/components/auth-kyc/verification-status";
import { DocumentUploader } from "@/components/auth-kyc/document-uploader";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function KycRetryPage() {
  const router = useRouter();
  const [front, setFront] = useState<File | null>(null);
  const [back, setBack] = useState<File | null>(null);

  const canSubmit = front !== null && back !== null;

  const handleResubmit = () => {
    if (canSubmit) router.push("/onboarding/kyc/pending");
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-xl space-y-8">
        <VerificationStatus status="rejected" />

        <div className="rounded-xl border border-danger/30 bg-danger/5 p-4 flex items-start gap-3">
          <AlertTriangle size={20} className="text-danger mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-danger">Motivo da Rejeição</p>
            <p className="text-sm text-muted/60 mt-1">
              O documento estava ilegível ou expirado. Por favor, envie um novo documento válido com uma foto nítida.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <DocumentUploader
            label="Frente do Documento"
            description="Envie uma foto nítida da frente do seu documento"
            onUpload={(f) => setFront(f)}
          />

          <DocumentUploader
            label="Verso do Documento"
            description="Envie uma foto nítida do verso do seu documento"
            onUpload={(f) => setBack(f)}
          />
        </div>

        <Button
          size="lg"
          className="w-full"
          disabled={!canSubmit}
          onClick={handleResubmit}
        >
          Reenviar Documentos
        </Button>
      </div>
    </main>
  );
}
