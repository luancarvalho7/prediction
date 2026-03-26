"use client";

import { useParams } from "next/navigation";
import { MOCK_POSTS } from "@/lib/mock-data";
import { BookmarkButton } from "@/components/social/bookmark-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, MessageCircle, ArrowLeft, Send } from "lucide-react";
import { useState } from "react";

const MOCK_REPLIES = [
  { id: "r1", author: "market_guru", content: "Ótima análise, concordo totalmente com a direção aqui.", time: "2h atrás" },
  { id: "r2", author: "skeptic42", content: "Não tenho tanta certeza. Os fundamentos ainda não suportam isso totalmente.", time: "1h atrás" },
  { id: "r3", author: "data_driven", content: "Verifique os agregadores de pesquisa mais recentes — eles confirmam esta tese.", time: "45m atrás" },
];

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [replyText, setReplyText] = useState("");

  const post = MOCK_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-muted/60 text-lg">Publicação não encontrada.</p>
        <Link href="/ideas/feed" className="text-accent/70 hover:text-accent transition-colors text-sm mt-2 inline-block">
          Voltar ao feed
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <Link href="/ideas/feed" className="inline-flex items-center gap-1.5 text-sm text-muted/60 hover:text-accent transition-colors">
        <ArrowLeft size={14} /> Voltar ao feed
      </Link>

      {/* Post */}
      <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-sm font-semibold text-accent">
              {post.author.username[0].toUpperCase()}
            </div>
            <div>
              <Link href={`/profile/${post.author.username}`} className="font-medium hover:text-accent">
                @{post.author.username}
              </Link>
              <p className="text-xs text-muted/60">{new Date(post.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <BookmarkButton />
        </div>

        <p className="text-sm leading-relaxed">{post.content}</p>

        {post.marketTitle && (
          <Link href={`/markets/series/${post.marketId}`}>
            <Badge variant="accent" size="md">{post.marketTitle}</Badge>
          </Link>
        )}

        <div className="flex items-center gap-4 pt-2 border-t border-white/[0.04] text-muted/60">
          <span className="flex items-center gap-1.5 text-xs">
            <Heart size={14} /> {post.likes}
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <MessageCircle size={14} /> {post.replies}
          </span>
        </div>
      </div>

      {/* Reply thread */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-muted/60 uppercase tracking-wide">Respostas</h2>
        {MOCK_REPLIES.map((reply) => (
          <div key={reply.id} className="bg-card/40 border border-white/[0.06] rounded-xl p-4 ml-4 border-l-2 border-l-accent/30">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-[10px] font-semibold text-accent">
                {reply.author[0].toUpperCase()}
              </div>
              <span className="text-sm font-medium">@{reply.author}</span>
              <span className="text-xs text-muted/60">{reply.time}</span>
            </div>
            <p className="text-sm text-muted/60-foreground">{reply.content}</p>
          </div>
        ))}
      </div>

      {/* Reply input */}
      <div className="flex items-center gap-3 bg-card/40 border border-white/[0.06] rounded-2xl p-3">
        <input
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Escreva uma resposta..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted/60"
        />
        <Button disabled={!replyText.trim()}>
          <Send size={14} className="mr-1.5" />
          Responder
        </Button>
      </div>
    </div>
  );
}
