"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MOCK_MARKETS, MOCK_POSTS } from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";
import { MarketStatusBadge } from "@/components/market/market-status-badge";
import { MarketChart } from "@/components/market/market-chart";
import { OrderTicket } from "@/components/order/order-ticket";
import { MarketRulesPreview } from "@/components/market/market-rules-preview";
import { RelatedMarkets } from "@/components/market/related-markets";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Droplets,
  Calendar,
  ArrowLeft,
  Share2,
  Bookmark,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";

export default function MarketDetailPage() {
  const params = useParams<{ series: string; market: string }>();
  const [timeRange, setTimeRange] = useState("1D");

  const market =
    MOCK_MARKETS.find((m) => m.slug === params.market) ?? MOCK_MARKETS[0];

  const relatedMarkets = MOCK_MARKETS.filter(
    (m) => m.category === market.category && m.id !== market.id
  ).slice(0, 4);

  const posts = MOCK_POSTS.filter((p) => p.marketId === market.id);

  const priceChange = market.yesPrice - market.previousYesPrice;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Back navigation */}
        <Link
          href="/browse"
          className="inline-flex items-center gap-1.5 text-sm text-muted/60 hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Voltar para os mercados
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MarketStatusBadge status={market.status} />
                <Badge variant="accent">{market.category}</Badge>
              </div>

              <h1 className="text-2xl font-semibold mb-2">{market.title}</h1>
              <p className="text-muted/60 text-sm">{market.question}</p>

              {/* Price display */}
              <div className="flex items-center gap-6 mt-4">
                <div>
                  <span className="text-3xl font-semibold text-yes">
                    {market.yesPrice}¢
                  </span>
                  <span className="text-sm text-muted/60 ml-1">Sim</span>
                </div>
                <div>
                  <span className="text-3xl font-semibold text-no">
                    {market.noPrice}¢
                  </span>
                  <span className="text-sm text-muted/60 ml-1">Não</span>
                </div>
                <span
                  className={`text-sm font-medium ${
                    priceChange >= 0 ? "text-yes" : "text-no"
                  }`}
                >
                  {priceChange >= 0 ? "+" : ""}
                  {priceChange}¢ hoje
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 mt-4">
                <Button variant="ghost" size="sm">
                  <Share2 size={14} className="mr-1.5" />
                  Compartilhar
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark size={14} className="mr-1.5" />
                  Favoritar
                </Button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted/60">Volume</p>
                  <p className="text-sm font-semibold">
                    ${formatNumber(market.volume)}
                  </p>
                </div>
              </div>
              <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Droplets size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted/60">Liquidez</p>
                  <p className="text-sm font-semibold">
                    ${formatNumber(market.liquidity)}
                  </p>
                </div>
              </div>
              <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Calendar size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted/60">Data de Encerramento</p>
                  <p className="text-sm font-semibold">
                    {new Date(market.endDate).toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <MarketChart
              timeRange={timeRange}
              onTimeRangeChange={setTimeRange}
            />

            {/* Rules preview */}
            <div>
              <MarketRulesPreview market={market} />
              <Link
                href={`/markets/${market.series}/${market.slug}/rules`}
                className="inline-block mt-3"
              >
                <Button variant="outline" size="sm">
                  Ver Regras Completas
                </Button>
              </Link>
            </div>

            {/* Related markets */}
            <RelatedMarkets markets={relatedMarkets} />

            {/* Activity / Ideas feed */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Atividade e Ideias</h3>
              {posts.length > 0 ? (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-card/40 border border-white/[0.06] rounded-2xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-xs font-medium text-accent">
                          {post.author.username[0].toUpperCase()}
                        </div>
                        <span className="text-sm font-medium">
                          {post.author.username}
                        </span>
                        <span className="text-xs text-muted/60">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted/60 mb-3">{post.content}</p>
                      <div className="flex items-center gap-4 text-xs text-muted/60">
                        <button className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
                          <ThumbsUp size={12} />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
                          <MessageSquare size={12} />
                          {post.replies}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-8 text-center">
                  <MessageSquare
                    size={32}
                    className="text-muted/60 mx-auto mb-3"
                  />
                  <p className="text-sm text-muted/60">
                    Nenhuma atividade ainda. Seja o primeiro a compartilhar sua análise!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <OrderTicket
                marketTitle={market.title}
                yesPrice={market.yesPrice}
                noPrice={market.noPrice}
                status={market.status}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
