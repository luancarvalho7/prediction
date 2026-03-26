"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Tablet, X } from "lucide-react";

interface Session {
  id: string;
  browser: string;
  os: string;
  ip: string;
  lastActive: string;
  device: "desktop" | "mobile" | "tablet";
  current: boolean;
}

const MOCK_SESSIONS: Session[] = [
  { id: "s1", browser: "Chrome 124", os: "Windows 11", ip: "192.168.1.***", lastActive: "Now", device: "desktop", current: true },
  { id: "s2", browser: "Safari 17", os: "macOS Sonoma", ip: "10.0.0.***", lastActive: "2 hours ago", device: "desktop", current: false },
  { id: "s3", browser: "Chrome Mobile", os: "Android 15", ip: "172.16.0.***", lastActive: "1 day ago", device: "mobile", current: false },
  { id: "s4", browser: "Safari", os: "iPadOS 18", ip: "192.168.2.***", lastActive: "3 days ago", device: "tablet", current: false },
];

const DeviceIcon = ({ device }: { device: Session["device"] }) => {
  if (device === "mobile") return <Smartphone size={20} />;
  if (device === "tablet") return <Tablet size={20} />;
  return <Monitor size={20} />;
};

export default function SessionsPage() {
  const [sessions, setSessions] = useState(MOCK_SESSIONS);

  const revoke = (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-semibold">Sessões Ativas</h1>

      <div className="space-y-3">
        {sessions.map((session) => (
          <div
            key={session.id}
            className={`bg-card border rounded-xl p-5 flex items-center justify-between ${
              session.current ? "border-accent" : "border-white/[0.06]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-muted/60">
                <DeviceIcon device={session.device} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm">{session.browser} · {session.os}</p>
                  {session.current && (
                    <span className="text-[10px] font-semibold bg-accent/20 text-accent px-2 py-0.5 rounded-full uppercase">
                      Atual
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted/60 mt-0.5">
                  IP: {session.ip} · Última atividade: {session.lastActive}
                </p>
              </div>
            </div>

            {!session.current && (
              <Button variant="outline" size="sm" onClick={() => revoke(session.id)} className="flex items-center gap-1 text-red-400 border-red-400/30 hover:bg-red-400/10">
                <X size={14} />
                Revogar
              </Button>
            )}
          </div>
        ))}

        {sessions.length === 0 && (
          <div className="text-center py-12 text-muted/60 text-sm">Nenhuma sessão ativa.</div>
        )}
      </div>
    </div>
  );
}
