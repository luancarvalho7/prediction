"use client";

import { useState } from "react";
import { MOCK_POSTS, MOCK_MARKETS } from "@/lib/mock-data";
import { PostCard } from "@/components/social/post-card";
import { MarketCard } from "@/components/market/market-card";
import { Bookmark, Inbox } from "lucide-react";

const TABS = ["Publicações", "Mercados"] as const;

export default function BookmarksPage() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Publicações");

  // Mock bookmarked items (first 2 of each)
  const bookmarkedPosts = MOCK_POSTS.slice(0, 2);
  const bookmarkedMarkets = MOCK_MARKETS.slice(0, 3);

  const isEmpty =
    (activeTab === "Publicações" && bookmarkedPosts.length === 0) ||
    (activeTab === "Mercados" && bookmarkedMarkets.length === 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center gap-2">
        <Bookmark size={22} className="text-warning" />
        <h1 className="text-2xl font-semibold">Favoritos</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-white/[0.04]">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === tab
                ? "text-accent border-b-2 border-accent"
                : "text-muted/60 hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Inbox size={40} className="text-muted/60 mb-3" />
          <p className="text-muted/60">Nenhum favorito ainda.</p>
          <p className="text-xs text-muted/60 mt-1">
            Salve publicações e mercados para encontrá-los aqui mais tarde.
          </p>
        </div>
      ) : activeTab === "Publicações" ? (
        <div className="space-y-4">
          {bookmarkedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarkedMarkets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      )}
    </div>
  );
}
