"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Radio,
  BookOpen,
  Wallet,
  Search,
} from "lucide-react";

const BOTTOM_NAV_ITEMS = [
  { href: "/browse", label: "Mercados", icon: BarChart3 },
  { href: "/calendar", label: "Ao Vivo", icon: Radio, badge: 7 },
  { href: "/ideas/feed", label: "Social", icon: BookOpen },
  { href: "/portfolio", label: "Portfólio", icon: Wallet },
  { href: "/search", label: "Buscar", icon: Search },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Top fade gradient */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="glass border-t border-white/[0.06] px-2 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around h-14">
          {BOTTOM_NAV_ITEMS.map(({ href, label, icon: Icon, badge }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 w-full h-full transition-colors duration-200 relative",
                  isActive
                    ? "text-accent"
                    : "text-muted/50 active:text-foreground"
                )}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute top-0 w-5 h-0.5 rounded-full bg-accent" />
                )}
                <div className="relative">
                  <Icon size={20} strokeWidth={isActive ? 2.2 : 1.6} />
                  {badge != null && (
                    <span className="absolute -top-1.5 -right-2.5 min-w-[14px] h-[14px] rounded-full bg-accent text-[8px] font-bold text-white flex items-center justify-center px-0.5">
                      {badge}
                    </span>
                  )}
                </div>
                <span className={cn(
                  "text-[10px] leading-none",
                  isActive ? "font-medium" : "font-normal"
                )}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
