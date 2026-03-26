"use client";

import Link from "next/link";
import type { Post } from "@/lib/mock-data";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-card/40 border border-white/[0.06] rounded-2xl p-4 hover:bg-card-hover transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-semibold text-accent">
          {post.author.username[0].toUpperCase()}
        </div>
        <div>
          <Link href={`/profile/${post.author.username}`} className="text-sm font-medium hover:text-accent">
            @{post.author.username}
          </Link>
          <p className="text-xs text-muted/60">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <p className="text-sm mb-3">{post.content}</p>

      {post.marketTitle && (
        <Link href={`/markets/series/${post.marketId}`}>
          <Badge variant="accent" size="md" className="mb-3">{post.marketTitle}</Badge>
        </Link>
      )}

      <div className="flex items-center gap-4 text-muted/60">
        <button className="flex items-center gap-1.5 text-xs hover:text-danger transition-colors cursor-pointer">
          <Heart size={14} />
          {post.likes}
        </button>
        <button className="flex items-center gap-1.5 text-xs hover:text-accent transition-colors cursor-pointer">
          <MessageCircle size={14} />
          {post.replies}
        </button>
        <button className="flex items-center gap-1.5 text-xs hover:text-warning transition-colors cursor-pointer ml-auto">
          <Bookmark size={14} />
        </button>
      </div>
    </div>
  );
}
