"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Check, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReplyNotification {
  id: string;
  from: string;
  postId: string;
  postPreview: string;
  replyPreview: string;
  time: string;
  read: boolean;
}

const MOCK_REPLY_NOTIFICATIONS: ReplyNotification[] = [
  {
    id: "n1",
    from: "market_guru",
    postId: "post1",
    postPreview: "Acho que o mercado eleitoral está subprecificado...",
    replyPreview: "Ótima análise, concordo totalmente com a direção aqui.",
    time: "2h atrás",
    read: false,
  },
  {
    id: "n2",
    from: "skeptic42",
    postId: "post2",
    postPreview: "O BTC está consolidando em torno de 95K...",
    replyPreview: "Não tenho tanta certeza. Os fundamentos ainda não suportam isso totalmente.",
    time: "4h atrás",
    read: false,
  },
  {
    id: "n3",
    from: "data_driven",
    postId: "post1",
    postPreview: "Acho que o mercado eleitoral está subprecificado...",
    replyPreview: "Verifique os agregadores de pesquisa mais recentes — eles confirmam esta tese.",
    time: "1d atrás",
    read: true,
  },
];

export default function RepliesPage() {
  const [notifications, setNotifications] = useState(MOCK_REPLY_NOTIFICATIONS);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const allRead = notifications.every((n) => n.read);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Respostas &amp; Menções</h1>
        {!allRead && (
          <Button
            variant="ghost"
            onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
          >
            <Check size={14} className="mr-1.5" />
            Marcar tudo como lido
          </Button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Inbox size={40} className="text-muted/60 mb-3" />
          <p className="text-muted/60">Nenhuma resposta ou menção ainda.</p>
          <p className="text-xs text-muted/60 mt-1">Quando alguém responder às suas publicações, aparecerá aqui.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`bg-card border rounded-xl p-4 transition-colors ${
                n.read ? "border-white/[0.06]" : "border-accent/40 bg-accent/5"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-semibold text-accent shrink-0">
                    {n.from[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm">
                      <Link href={`/profile/${n.from}`} className="font-medium hover:text-accent">
                        @{n.from}
                      </Link>{" "}
                      respondeu à sua publicação
                    </p>
                    <p className="text-xs text-muted/60 mt-0.5 truncate">{n.postPreview}</p>
                    <Link href={`/ideas/post/${n.postId}`}>
                      <p className="text-sm mt-2 text-muted/60-foreground hover:text-foreground transition-colors">
                        &ldquo;{n.replyPreview}&rdquo;
                      </p>
                    </Link>
                    <p className="text-xs text-muted/60 mt-1.5">{n.time}</p>
                  </div>
                </div>
                {!n.read && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="text-xs text-accent/70 hover:text-accent transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Marcar como lido
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
