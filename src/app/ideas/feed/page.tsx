"use client";

import { useState } from "react";
import { MOCK_POSTS } from "@/lib/mock-data";
import { PostCard } from "@/components/social/post-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PenSquare, Flame, Users, LayoutList } from "lucide-react";

const FILTERS = [
  { label: "Todos", icon: LayoutList },
  { label: "Em Alta", icon: Flame },
  { label: "Seguindo", icon: Users },
] as const;

export default function IdeasFeedPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const posts = [...MOCK_POSTS].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Ideias &amp; Discussão</h1>
        <Link href="/ideas/market-builder">
          <Button>
            <PenSquare size={16} className="mr-2" />
            Nova Publicação
          </Button>
        </Link>
      </div>

      {/* Filter chips */}
      <div className="flex items-center gap-2">
        {FILTERS.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveFilter(label)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeFilter === label
                ? "bg-accent text-white"
                : "bg-card/40 border border-white/[0.06] text-muted/60 hover:text-foreground"
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Related market chips */}
      <div className="flex flex-wrap gap-2">
        {Array.from(new Set(posts.filter((p) => p.marketTitle).map((p) => p.marketTitle))).map(
          (title) => {
            const post = posts.find((p) => p.marketTitle === title)!;
            return (
              <Link key={post.marketId} href={`/markets/${post.marketId}`}>
                <Badge variant="accent" size="md" className="cursor-pointer">
                  {title}
                </Badge>
              </Link>
            );
          }
        )}
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/ideas/post/${post.id}`} className="block">
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
