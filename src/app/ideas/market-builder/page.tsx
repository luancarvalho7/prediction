"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/mock-data";
import { Lightbulb, Send, Info } from "lucide-react";

export default function MarketBuilderPage() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [resolution, setResolution] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center gap-2">
        <Lightbulb size={22} className="text-warning" />
        <h1 className="text-2xl font-semibold">Sugerir um Mercado</h1>
      </div>

      {submitted ? (
        <div className="bg-card border border-yes/30 rounded-xl p-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-yes/10 flex items-center justify-center mx-auto">
            <Send size={20} className="text-yes" />
          </div>
          <h2 className="text-lg font-semibold">Sugestão Enviada!</h2>
          <p className="text-sm text-muted/60">Sua sugestão de mercado está em análise. Notificaremos você quando for aprovada.</p>
          <Button onClick={() => setSubmitted(false)}>Enviar Outra</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Pergunta do Mercado</label>
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder='ex: "X acontecerá até Y data?"'
              required
            />
          </div>

          <div className="space-y-1.5">
            <Select
              label="Categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={[
                { value: "", label: "Selecione uma categoria" },
                ...CATEGORIES.map((cat) => ({ value: cat.slug, label: `${cat.icon} ${cat.name}` })),
              ]}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Critérios de Resolução</label>
            <Input
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              placeholder="Como este mercado deve ser resolvido?"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Data de Encerramento</label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Forneça mais contexto sobre este mercado..."
              rows={4}
              className="w-full rounded-lg bg-background border border-white/[0.06] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40 placeholder:text-muted/60 resize-none"
            />
          </div>

          <Button type="submit" className="w-full">
            <Send size={14} className="mr-2" />
            Enviar Sugestão
          </Button>
        </form>
      )}

      {/* Guidelines */}
      <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Info size={16} className="text-accent" />
          Diretrizes para Boas Perguntas de Mercado
        </div>
        <ul className="text-sm text-muted/60 space-y-2 list-disc list-inside">
          <li>As perguntas devem ser <span className="text-foreground font-medium">binárias</span> — resolvíveis como SIM ou NÃO.</li>
          <li>Inclua um <span className="text-foreground font-medium">prazo claro</span> para resolução.</li>
          <li>Defina <span className="text-foreground font-medium">critérios objetivos de resolução</span> — evite julgamentos subjetivos.</li>
          <li>Referencie <span className="text-foreground font-medium">fontes verificáveis</span> para resolução (ex.: dados governamentais, resultados oficiais).</li>
          <li>Evite perguntas que violem nossas <a href="/community-guidelines" className="text-accent/70 hover:text-accent transition-colors">diretrizes da comunidade</a>.</li>
        </ul>
      </div>
    </div>
  );
}
