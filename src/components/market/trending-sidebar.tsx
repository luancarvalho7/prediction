"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface TrendingItem {
  question: string;
  answer: string;
  percent: number;
  change: number | null; // null = no change / "--"
  href: string;
}

interface TrendingSection {
  title: string;
  href: string;
  items: TrendingItem[];
}

const TRENDING_SECTIONS: TrendingSection[] = [
  {
    title: "Em Alta",
    href: "/browse",
    items: [
      {
        question: "Preço do petróleo WTI hoje?",
        answer: "$94 ou acima",
        percent: 52,
        change: 37,
        href: "/markets/commodities/wti-oil-price",
      },
      {
        question: "Mais demissões em tech 2026 que 2025?",
        answer: "Sim",
        percent: 85,
        change: -1,
        href: "/markets/science/tech-layoffs-2026",
      },
      {
        question: "Candidato democrata 2028 para presidente?",
        answer: "Gavin Newsom",
        percent: 27,
        change: null,
        href: "/markets/us-elections/democratic-nominee-2028",
      },
    ],
  },
  {
    title: "Primárias 2026",
    href: "/category/politics",
    items: [
      {
        question: "Candidato republicano ao Senado no Texas?",
        answer: "Ken Paxton",
        percent: 56,
        change: 4,
        href: "/markets/us-elections/texas-senate-nominee",
      },
      {
        question: "Candidato democrata ao Senado no Maine?",
        answer: "Graham Platner",
        percent: 83,
        change: 7,
        href: "/markets/us-elections/maine-senate-nominee",
      },
      {
        question: "Candidato republicano a governador da Flórida?",
        answer: "Byron Donalds",
        percent: 84,
        change: null,
        href: "/markets/us-elections/florida-governor-nominee",
      },
    ],
  },
  {
    title: "Maiores Movimentos",
    href: "/browse?sort=movers",
    items: [
      {
        question: "Houston Open: Top 10 na Rodada 1",
        answer: "Brooks Koepka",
        percent: 17,
        change: -82,
        href: "/markets/sports/houston-open-top10",
      },
      {
        question: "Decisão de taxa do Banco do México em março",
        answer: "Alta de 25bps",
        percent: 97,
        change: 33,
        href: "/markets/economics/banxico-rate-march",
      },
      {
        question: "Houston Open: Top 5 na Rodada 1",
        answer: "Brooks Koepka",
        percent: 9,
        change: -98,
        href: "/markets/sports/houston-open-top5",
      },
    ],
  },
];

function ChangeIndicator({ change }: { change: number | null }) {
  if (change === null) {
    return <span className="text-[11px] text-muted/40">—</span>;
  }
  const isUp = change > 0;
  return (
    <span className={cn("flex items-center gap-0.5 text-[11px] font-medium", isUp ? "text-yes" : "text-no")}>
      {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
      {Math.abs(change)}
    </span>
  );
}

export function TrendingSidebar() {
  return (
    <div className="space-y-1">
      {TRENDING_SECTIONS.map((section) => (
        <div key={section.title} className="bg-card/40 border border-white/[0.06] rounded-2xl overflow-hidden">
          {/* Section Header */}
          <Link
            href={section.href}
            className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.04] group hover:bg-white/[0.02] transition-colors"
          >
            <h3 className="text-[13px] font-semibold tracking-tight">{section.title}</h3>
            <ChevronRight size={14} className="text-muted/40 group-hover:text-foreground transition-colors" />
          </Link>

          {/* Items */}
          <div>
            {section.items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-white/[0.02] transition-colors border-b border-white/[0.03] last:border-b-0"
              >
                {/* Number */}
                <span className="text-[11px] text-muted/30 font-medium mt-0.5 w-3 shrink-0">
                  {i + 1}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium leading-tight tracking-tight truncate">
                    {item.question}
                  </p>
                  <p className="text-[11px] text-muted/50 mt-0.5 truncate">
                    {item.answer}
                  </p>
                </div>

                {/* Right: percent + change */}
                <div className="flex flex-col items-end shrink-0 gap-0.5">
                  <span className="text-[12px] font-semibold">{item.percent}%</span>
                  <ChangeIndicator change={item.change} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
