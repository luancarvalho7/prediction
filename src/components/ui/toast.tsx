"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number;
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

export function Toast({ message, type = "info", onClose, duration = 4000 }: ToastProps) {
  const [visible, setVisible] = useState(true);
  const Icon = icons[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        {
          "bg-success/[0.08] border-success/20 text-success": type === "success",
          "bg-danger/[0.08] border-danger/20 text-danger": type === "error",
          "bg-warning/[0.08] border-warning/20 text-warning": type === "warning",
          "bg-accent/[0.08] border-accent/20 text-accent": type === "info",
        }
      )}
    >
      <Icon size={18} />
      <span className="text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100 cursor-pointer">
        <X size={14} />
      </button>
    </div>
  );
}
