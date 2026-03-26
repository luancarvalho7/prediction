import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface MarketStatusBadgeProps {
  status: "open" | "closed" | "halted" | "settled";
  className?: string;
}

export function MarketStatusBadge({ status, className }: MarketStatusBadgeProps) {
  const config = {
    open: { variant: "success" as const, label: "Aberto" },
    closed: { variant: "danger" as const, label: "Fechado" },
    halted: { variant: "warning" as const, label: "Suspenso" },
    settled: { variant: "default" as const, label: "Liquidado" },
  };

  const { variant, label } = config[status];

  return (
    <Badge variant={variant} className={cn("uppercase tracking-wider", className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 inline-block" />
      {label}
    </Badge>
  );
}
