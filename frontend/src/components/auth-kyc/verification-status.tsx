import { cn } from "@/lib/utils";
import { CheckCircle, Clock, XCircle, AlertTriangle } from "lucide-react";

interface VerificationStatusProps {
  status: "none" | "pending" | "approved" | "rejected" | "manual-review";
  className?: string;
}

const config = {
  none: { icon: AlertTriangle, color: "text-muted/60", bg: "bg-card", label: "Não Iniciado", desc: "Complete a verificação para começar a negociar" },
  pending: { icon: Clock, color: "text-warning", bg: "bg-warning/10", label: "Em Análise", desc: "Seus documentos estão sendo analisados. Isso geralmente leva 1-2 dias úteis." },
  approved: { icon: CheckCircle, color: "text-success", bg: "bg-success/10", label: "Verificado", desc: "Sua identidade foi verificada. Você pode negociar livremente." },
  rejected: { icon: XCircle, color: "text-danger", bg: "bg-danger/10", label: "Rejeitado", desc: "Sua verificação foi rejeitada. Por favor, tente novamente com documentos válidos." },
  "manual-review": { icon: Clock, color: "text-warning", bg: "bg-warning/10", label: "Revisão Manual", desc: "Sua conta está sob revisão manual. Isso pode levar tempo adicional." },
};

export function VerificationStatus({ status, className }: VerificationStatusProps) {
  const { icon: Icon, color, bg, label, desc } = config[status];

  return (
    <div className={cn("rounded-xl p-4 border border-white/[0.06]", bg, className)}>
      <div className="flex items-center gap-3 mb-2">
        <Icon className={color} size={24} />
        <h3 className={cn("font-semibold", color)}>{label}</h3>
      </div>
      <p className="text-sm text-muted/60">{desc}</p>
    </div>
  );
}
