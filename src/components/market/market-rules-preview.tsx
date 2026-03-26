import type { Market } from "@/lib/mock-data";
import { FileText } from "lucide-react";

interface MarketRulesPreviewProps {
  market: Market;
}

export function MarketRulesPreview({ market }: MarketRulesPreviewProps) {
  return (
    <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <FileText size={16} className="text-muted/60" />
        <h3 className="text-sm font-medium">Regras do Mercado</h3>
      </div>
      <p className="text-sm text-muted/60 mb-3">{market.rules}</p>
      <div className="flex items-center gap-4 text-xs text-muted/60">
        <span>Resolução: {market.resolution}</span>
        <span>Encerra: {new Date(market.endDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
