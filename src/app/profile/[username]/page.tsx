"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { MOCK_POSTS } from "@/lib/mock-data";
import { PostCard } from "@/components/social/post-card";
import { CalendarDays, TrendingUp, Users, DollarSign, Shield } from "lucide-react";

const TABS = ["Publicações", "Posições", "Atividade"] as const;

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Publicações");

  const userPosts = MOCK_POSTS.filter((p) => p.author.username === username);

  // Mock stats
  const stats = {
    trades: 142,
    pnl: "+$1,240",
    followers: 87,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      {/* Profile header */}
      <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-xl font-semibold text-accent">
            {username?.[0]?.toUpperCase() ?? "?"}
          </div>
          <div>
            <h1 className="text-xl font-semibold">@{username}</h1>
            <p className="text-xs text-muted/60 flex items-center gap-1 mt-1">
              <CalendarDays size={12} /> Ingressou em março de 2025
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-background rounded-lg p-3 text-center">
            <TrendingUp size={16} className="mx-auto mb-1 text-accent" />
            <p className="text-lg font-semibold">{stats.trades}</p>
            <p className="text-xs text-muted/60">Operações</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <DollarSign size={16} className="mx-auto mb-1 text-yes" />
            <p className="text-lg font-semibold">{stats.pnl}</p>
            <p className="text-xs text-muted/60">P&amp;L</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <Users size={16} className="mx-auto mb-1 text-warning" />
            <p className="text-lg font-semibold">{stats.followers}</p>
            <p className="text-xs text-muted/60">Seguidores</p>
          </div>
        </div>

        {/* Credibility */}
        <div className="mt-4 flex items-center gap-2 text-xs text-muted/60">
          <Shield size={12} className="text-yes" />
          <span>Credibilidade: Trader Verificado</span>
        </div>
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

      {/* Tab content */}
      {activeTab === "Publicações" && (
        <div className="space-y-4">
          {userPosts.length > 0 ? (
            userPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-center text-muted/60 py-12">Nenhuma publicação ainda.</p>
          )}
        </div>
      )}

      {activeTab === "Posições" && (
        <div className="text-center text-muted/60 py-12">
          <p>As posições são privadas.</p>
        </div>
      )}

      {activeTab === "Atividade" && (
        <div className="space-y-3">
          <div className="bg-card/40 border border-white/[0.06] rounded-xl p-3 text-sm">
            <span className="text-muted/60">Comprou SIM</span> em &quot;Will Candidate A win the 2026 election?&quot;
            <span className="text-xs text-muted/60 ml-2">2h atrás</span>
          </div>
          <div className="bg-card/40 border border-white/[0.06] rounded-xl p-3 text-sm">
            <span className="text-muted/60">Vendeu NÃO</span> em &quot;Bitcoin above $100K by end of March?&quot;
            <span className="text-xs text-muted/60 ml-2">1d atrás</span>
          </div>
          <div className="bg-card/40 border border-white/[0.06] rounded-xl p-3 text-sm">
            <span className="text-muted/60">Publicou</span> em Ideias &amp; Discussão
            <span className="text-xs text-muted/60 ml-2">3d atrás</span>
          </div>
        </div>
      )}
    </div>
  );
}
