"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Ban, AlertTriangle } from "lucide-react";

interface RiskSettingsCardProps {
  type: "trading-break" | "self-exclusion" | "deposit-limit";
  active?: boolean;
  value?: string;
  onAction?: () => void;
  className?: string;
}

const config = {
  "trading-break": {
    icon: Clock,
    title: "Intervalo de Negociação",
    description: "Faça uma pausa temporária nas negociações. Você não poderá fazer novos pedidos.",
    actionLabel: "Definir Pausa",
  },
  "self-exclusion": {
    icon: Ban,
    title: "Autoexclusão",
    description: "Exclua-se permanentemente das negociações. Esta ação não pode ser facilmente revertida.",
    actionLabel: "Autoexcluir",
  },
  "deposit-limit": {
    icon: Shield,
    title: "Limite de Depósito",
    description: "Defina um valor máximo de depósito por dia, semana ou mês.",
    actionLabel: "Definir Limite",
  },
};

export function RiskSettingsCard({ type, active, value, onAction, className }: RiskSettingsCardProps) {
  const { icon: Icon, title, description, actionLabel } = config[type];

  return (
    <div className={cn("bg-card/40 border border-white/[0.06] rounded-2xl p-5", active && "border-warning/50", className)}>
      <div className="flex items-start gap-3">
        <div className={cn("p-2 rounded-lg", active ? "bg-warning/10 text-warning" : "bg-card text-muted/60")}>
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted/60 mb-3">{description}</p>
          {active && value && (
            <div className="flex items-center gap-2 mb-3 text-sm text-warning">
              <AlertTriangle size={14} />
              Atualmente ativo: {value}
            </div>
          )}
          <Button
            variant={active ? "danger" : "outline"}
            size="sm"
            onClick={onAction}
          >
            {active ? "Remover" : actionLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
