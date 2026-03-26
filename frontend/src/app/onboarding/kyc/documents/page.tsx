"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KycStepper } from "@/components/auth-kyc/kyc-stepper";
import { DocumentUploader } from "@/components/auth-kyc/document-uploader";
import { Button } from "@/components/ui/button";
import { Camera, Info } from "lucide-react";

const TIPS = [
  "Coloque o documento em uma superfície plana e escura",
  "Certifique-se de que todos os quatro cantos estão visíveis",
  "Evite reflexos, sombras e desfoque",
  "O tamanho do arquivo deve ser inferior a 10 MB",
];

export default function KycDocumentsPage() {
  const router = useRouter();
  const [front, setFront] = useState<File | null>(null);
  const [back, setBack] = useState<File | null>(null);

  const canSubmit = front !== null && back !== null;

  const handleSubmit = () => {
    if (canSubmit) router.push("/onboarding/kyc/pending");
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-xl space-y-8">
        <KycStepper current={2} />

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Enviar Documentos</h1>
          <p className="text-sm text-muted/60">
            Envie fotos nítidas do seu documento de identidade emitido pelo governo.
          </p>
        </div>

        <div className="space-y-5">
          <DocumentUploader
            label="Frente do Documento"
            description="Envie o lado frontal do seu documento"
            onUpload={(f) => setFront(f)}
          />

          <DocumentUploader
            label="Verso do Documento"
            description="Envie o lado traseiro do seu documento"
            onUpload={(f) => setBack(f)}
          />

          <DocumentUploader
            label="Comprovante de Endereço (opcional)"
            description="Conta de consumo, extrato bancário ou similar — com data dos últimos 3 meses"
          />
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-card p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Info size={16} className="text-accent" />
            Dicas de Validação
          </div>
          <ul className="space-y-1">
            {TIPS.map((tip) => (
              <li key={tip} className="text-xs text-muted/60 flex items-start gap-2">
                <Camera size={12} className="mt-0.5 shrink-0 text-muted/60" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <Button
          size="lg"
          className="w-full"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Enviar Documentos
        </Button>
      </div>
    </main>
  );
}
