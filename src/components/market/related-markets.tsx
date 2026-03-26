import { MarketCard } from "./market-card";
import type { Market } from "@/lib/mock-data";

interface RelatedMarketsProps {
  markets: Market[];
}

export function RelatedMarkets({ markets }: RelatedMarketsProps) {
  if (markets.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Mercados Relacionados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {markets.map((m) => (
          <MarketCard key={m.id} market={m} />
        ))}
      </div>
    </div>
  );
}
