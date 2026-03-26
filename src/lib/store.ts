import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  kycStatus: "none" | "pending" | "approved" | "rejected" | "manual-review";
  isDemo: boolean;
  balance: number;
  pendingBalance: number;
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  sidebarOpen: boolean;
  orderTicketOpen: boolean;
  selectedMarketId: string | null;
  setUser: (user: User | null) => void;
  toggleSidebar: () => void;
  setOrderTicketOpen: (open: boolean) => void;
  setSelectedMarket: (id: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  isAuthenticated: false,
  sidebarOpen: false,
  orderTicketOpen: false,
  selectedMarketId: null,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setOrderTicketOpen: (open) => set({ orderTicketOpen: open }),
  setSelectedMarket: (id) => set({ selectedMarketId: id }),
}));
