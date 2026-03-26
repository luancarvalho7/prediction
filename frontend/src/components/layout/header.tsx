"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import {
  Search, Menu, X, Bell, User, Wallet,
  TrendingUp, BarChart3, Calendar,
  BookOpen, Shield, FlaskConical,
  Settings, LogOut, ChevronDown, HelpCircle,
  Radio,
} from "lucide-react";

/* ── Primary nav ───────────────────────────────────────── */
const PRIMARY_NAV = [
  { href: "/browse", label: "MERCADOS", icon: BarChart3 },
  { href: "/calendar", label: "AO VIVO", icon: Radio },
  { href: "/ideas/feed", label: "SOCIAL", icon: BookOpen },
  { href: "/fairness", label: "TRANSPARÊNCIA", icon: Shield },
  { href: "/research", label: "PESQUISA", icon: FlaskConical },
];

/* ── Trending category tabs ────────────────────────────── */
const TRENDING_TABS = [
  { id: "trending", href: "/browse", label: "Em Alta" },
  { id: "elections", href: "/category/politics", label: "Eleições" },
  { id: "politics", href: "/category/politics", label: "Política" },
  { id: "sports", href: "/category/sports", label: "Esportes" },
  { id: "culture", href: "/category/entertainment", label: "Cultura" },
  { id: "crypto", href: "/category/crypto", label: "Cripto" },
  { id: "climate", href: "/category/climate", label: "Clima" },
  { id: "economics", href: "/category/economics", label: "Economia" },
  { id: "mentions", href: "/ideas/feed", label: "Menções" },
  { id: "companies", href: "/category/economics", label: "Empresas" },
  { id: "financials", href: "/category/economics", label: "Finanças" },
  { id: "tech", href: "/category/science", label: "Ciência e Tech" },
];

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("trending");
  const tabsRef = useRef<HTMLDivElement>(null);

  /* close dropdown on route change */
  useEffect(() => {
    setProfileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const isNavActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 glass border-b border-white/[0.06]">
      {/* ── Row 1: Brand + Primary Nav + Search + Actions ── */}
      <div className="max-w-[1400px] mx-auto px-4 h-12 flex items-center gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-sm flex-shrink-0 tracking-tight"
        >
          <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
            <TrendingUp className="text-accent" size={14} />
          </div>
          <span className="hidden sm:block">FutureBet</span>
        </Link>

        {/* Desktop primary nav */}
        <nav className="hidden lg:flex items-center gap-0.5 ml-4">
          {PRIMARY_NAV.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "relative px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all duration-200 whitespace-nowrap flex items-center gap-1.5",
                isNavActive(href)
                  ? "text-foreground bg-white/[0.07]"
                  : "text-muted/50 hover:text-foreground hover:bg-white/[0.04]"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Tagline — desktop only */}
        <span className="hidden xl:block ml-auto text-[11px] text-muted/30 italic tracking-wide select-none">
          Negocie qualquer coisa
        </span>

        {/* Search */}
        <div className="flex-1 max-w-sm ml-auto lg:ml-4">
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-input/80 border border-input-border/60 rounded-lg px-3 backdrop-blur-sm">
              <Search size={14} className="text-muted/60 shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Buscar mercados..."
                className="w-full bg-transparent py-1.5 text-sm focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSearchOpen(false);
                  if (e.key === "Enter") {
                    window.location.href = `/search?q=${encodeURIComponent(e.currentTarget.value)}`;
                  }
                }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-muted/60 hover:text-foreground cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-[12px] text-muted/50 bg-white/[0.02] border border-white/[0.06] rounded-lg hover:border-white/[0.1] w-full max-w-xs cursor-pointer transition-all duration-200"
            >
              <Search size={13} />
              Buscar...
              <kbd className="ml-auto text-[10px] font-mono bg-white/[0.06] px-1.5 py-0.5 rounded text-muted/40">
                ⌘K
              </kbd>
            </button>
          )}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => setSearchOpen(true)}
            className="md:hidden p-2 text-muted/50 hover:text-foreground rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
          >
            <Search size={17} />
          </button>

          <Link
            href="/account/notifications"
            className="p-2 text-muted/50 hover:text-foreground rounded-lg hover:bg-white/[0.04] transition-colors hidden sm:flex"
          >
            <Bell size={17} />
          </Link>

          {/* Profile / Log in */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-1 p-1 rounded-lg hover:bg-white/[0.04] cursor-pointer transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center ring-1 ring-accent/20">
                <User size={13} className="text-white" />
              </div>
              <ChevronDown size={10} className="text-muted/50 hidden sm:block" />
            </button>

            {profileOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-56 glass glass-border rounded-2xl shadow-2xl glow-sm z-50 py-1.5 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-white/[0.06]">
                    <p className="text-sm font-medium">trader_user</p>
                    <p className="text-xs text-muted/60">user@example.com</p>
                  </div>
                  <div className="py-1">
                    <Link href="/portfolio" className="flex items-center gap-2.5 px-4 py-2 text-[13px] text-muted/60 hover:text-foreground hover:bg-white/[0.04] transition-colors">
                      <Wallet size={15} /> Portfólio
                    </Link>
                    <Link href="/wallet" className="flex items-center gap-2.5 px-4 py-2 text-[13px] text-muted/60 hover:text-foreground hover:bg-white/[0.04] transition-colors">
                      <BarChart3 size={15} /> Carteira
                    </Link>
                    <Link href="/account/settings" className="flex items-center gap-2.5 px-4 py-2 text-[13px] text-muted/60 hover:text-foreground hover:bg-white/[0.04] transition-colors">
                      <Settings size={15} /> Configurações
                    </Link>
                    <Link href="/help" className="flex items-center gap-2.5 px-4 py-2 text-[13px] text-muted/60 hover:text-foreground hover:bg-white/[0.04] transition-colors">
                      <HelpCircle size={15} /> Ajuda
                    </Link>
                  </div>
                  <div className="border-t border-white/[0.06] pt-1">
                    <Link href="/login" className="flex items-center gap-2.5 px-4 py-2 text-[13px] text-danger/80 hover:text-danger hover:bg-white/[0.04] transition-colors">
                      <LogOut size={15} /> Sair
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent border border-accent/25 rounded-lg hover:bg-accent/[0.08] transition-all duration-200 ml-1"
          >
            Entrar
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-muted/50 hover:text-foreground rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer ml-0.5"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Row 2: Trending category tabs (desktop) ─────── */}
      <div className="hidden md:block border-t border-white/[0.04]">
        <div
          ref={tabsRef}
          className="max-w-[1400px] mx-auto px-4 flex items-center gap-0 overflow-x-auto scrollbar-hide"
        >
          {TRENDING_TABS.map(({ id, href, label }) => {
            const active = activeTab === id;
            return (
              <Link
                key={id}
                href={href}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "relative px-3 py-2 text-[12px] whitespace-nowrap shrink-0 transition-colors duration-200",
                  active
                    ? "text-foreground font-medium"
                    : "text-muted/45 hover:text-foreground/80"
                )}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Mobile slide-out nav ────────────────────────── */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-white/[0.06] bg-background/95 backdrop-blur-xl px-4 py-3 space-y-0.5 max-h-[70vh] overflow-y-auto">
          {PRIMARY_NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] transition-all duration-200",
                isNavActive(href)
                  ? "text-foreground bg-white/[0.06] font-medium"
                  : "text-muted/60 hover:text-foreground hover:bg-white/[0.04]"
              )}
            >
              <Icon size={17} />
              {label}
            </Link>
          ))}

          {/* Category links */}
          <div className="border-t border-white/[0.06] pt-2 mt-2">
            <p className="px-3 text-[10px] uppercase tracking-wider text-muted/30 font-semibold mb-1">
              Em Alta
            </p>
            <div className="flex flex-wrap gap-1.5 px-3 pb-1">
              {TRENDING_TABS.map(({ id, href, label }) => (
                <Link
                  key={id}
                  href={href}
                  onClick={() => { setActiveTab(id); setMenuOpen(false); }}
                  className="px-2.5 py-1 text-[11px] text-muted/50 hover:text-foreground bg-white/[0.03] border border-white/[0.06] rounded-full hover:border-white/[0.12] transition-colors whitespace-nowrap"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-2 mt-1 space-y-0.5">
            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] text-muted/60 hover:text-foreground hover:bg-white/[0.04]">
              <Wallet size={17} /> Portfólio
            </Link>
            <Link href="/wallet" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] text-muted/60 hover:text-foreground hover:bg-white/[0.04]">
              <BarChart3 size={17} /> Carteira
            </Link>
          </div>

          {/* Log in for mobile */}
          <div className="border-t border-white/[0.06] pt-2 mt-1 sm:hidden">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold text-accent border border-accent/25 hover:bg-accent/[0.08] transition-colors"
            >
              Entrar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
