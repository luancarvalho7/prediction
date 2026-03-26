import Link from "next/link";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface LiveTradeItemProps {
  username: string;
  marketTitle: string;
  side: "yes" | "no";
  amount: number;
  price: number;
  time: string;
}

export function LiveTradeItem({ username, marketTitle, side, amount, price, time }: LiveTradeItemProps) {
  return (
    <div className="group flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 hover:bg-white/[0.02] transition-all duration-200">
      {/* Side indicator */}
      <div className={cn(
        "shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105",
        side === "yes"
          ? "bg-yes/[0.08] border border-yes/[0.12]"
          : "bg-no/[0.08] border border-no/[0.12]"
      )}>
        {side === "yes" ? (
          <TrendingUp size={15} className="text-yes" />
        ) : (
          <TrendingDown size={15} className="text-no" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-0.5">
        <p className="text-[13px] leading-snug">
          <Link href={`/profile/${username}`} className="font-medium hover:text-accent transition-colors">
            @{username}
          </Link>
          <span className="text-muted/40 mx-1">·</span>
          <span className={cn(
            "inline-flex items-center gap-1 text-xs font-semibold px-1.5 py-0.5 rounded-md",
            side === "yes"
              ? "bg-yes/[0.08] text-yes"
              : "bg-no/[0.08] text-no"
          )}>
            {side === "yes" ? "COMPROU SIM" : "VENDEU NÃO"}
          </span>
        </p>
        <p className="text-xs text-muted/50 truncate">{marketTitle}</p>
      </div>

      {/* Amount + meta */}
      <div className="shrink-0 text-right space-y-0.5">
        <p className={cn(
          "text-sm font-semibold tabular-nums",
          side === "yes" ? "text-yes" : "text-no"
        )}>
          ${amount.toLocaleString()}
        </p>
        <p className="text-[11px] text-muted/40 flex items-center justify-end gap-1">
          <Clock size={10} />
          {time}
        </p>
      </div>
    </div>
  );
}
