"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { User, Globe, Save } from "lucide-react";

export default function AccountSettingsPage() {
  const [name, setName] = useState("Jane Doe");
  const [username, setUsername] = useState("janedoe");
  const [email, setEmail] = useState("jane@example.com");
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("America/New_York");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-semibold">Configurações da Conta</h1>

      {/* Profile Section */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <User size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Perfil</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-muted/60 mb-1">Nome Completo</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" />
          </div>
          <div>
            <label className="block text-sm text-muted/60 mb-1">Nome de usuário</label>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nome de usuário" />
          </div>
          <div>
            <label className="block text-sm text-muted/60 mb-1">E-mail</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
          </div>
        </div>

        <Button className="flex items-center gap-2">
          <Save size={14} />
          Salvar Perfil
        </Button>
      </section>

      {/* Preferences Section */}
      <section className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <Globe size={18} className="text-accent" />
          <h2 className="text-lg font-semibold">Preferências</h2>
        </div>

        <div className="space-y-4">
          <div>
            <Select
              label="Idioma"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              options={[
                { value: "en", label: "English" },
                { value: "pt", label: "Português" },
                { value: "es", label: "Español" },
              ]}
            />
          </div>
          <div>
            <Select
              label="Fuso Horário"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              options={[
                { value: "America/New_York", label: "Eastern (ET)" },
                { value: "America/Chicago", label: "Central (CT)" },
                { value: "America/Denver", label: "Mountain (MT)" },
                { value: "America/Los_Angeles", label: "Pacific (PT)" },
                { value: "Europe/London", label: "London (GMT)" },
                { value: "America/Sao_Paulo", label: "São Paulo (BRT)" },
              ]}
            />
          </div>
          <div>
            <Select
              label="Moeda"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              options={[
                { value: "USD", label: "USD ($)" },
                { value: "EUR", label: "EUR (€)" },
                { value: "BRL", label: "BRL (R$)" },
                { value: "GBP", label: "GBP (£)" },
              ]}
            />
          </div>
        </div>

        <Button className="flex items-center gap-2">
          <Save size={14} />
          Salvar Preferências
        </Button>
      </section>
    </div>
  );
}
