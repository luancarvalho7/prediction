"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KycStepper } from "@/components/auth-kyc/kyc-stepper";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const COUNTRY_OPTIONS = [
  { value: "", label: "Selecionar um país" },
  { value: "US", label: "Estados Unidos" },
  { value: "GB", label: "Reino Unido" },
  { value: "CA", label: "Canadá" },
  { value: "AU", label: "Austrália" },
  { value: "DE", label: "Alemanha" },
  { value: "FR", label: "França" },
  { value: "BR", label: "Brasil" },
  { value: "JP", label: "Japão" },
  { value: "IN", label: "Índia" },
  { value: "OTHER", label: "Outro" },
];

export default function KycFormPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [taxId, setTaxId] = useState("");

  const isValid = fullName && dob && country && address && taxId.length === 4;

  const handleContinue = () => {
    if (isValid) router.push("/onboarding/kyc/documents");
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-xl space-y-8">
        <KycStepper current={1} />

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Informações Pessoais</h1>
          <p className="text-sm text-muted/60">
            Digite seu nome legal exatamente como aparece no seu documento de identidade.
          </p>
        </div>

        <div className="space-y-5">
          <Input
            id="fullName"
            label="Nome Legal Completo"
            placeholder="João A. Silva"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <Input
            id="dob"
            label="Data de Nascimento"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <Select
            id="country"
            label="País de Residência"
            options={COUNTRY_OPTIONS}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <Input
            id="address"
            label="Endereço Residencial"
            placeholder="Rua Principal, 123, Apto 4B, São Paulo, SP 01310-100"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Input
            id="taxId"
            label="CPF / Número de Identificação Fiscal (últimos 4 dígitos)"
            placeholder="1234"
            maxLength={4}
            inputMode="numeric"
            pattern="[0-9]{4}"
            value={taxId}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, "").slice(0, 4);
              setTaxId(v);
            }}
          />
        </div>

        <Button
          size="lg"
          className="w-full"
          disabled={!isValid}
          onClick={handleContinue}
        >
          Continuar para Documentos
        </Button>
      </div>
    </main>
  );
}
