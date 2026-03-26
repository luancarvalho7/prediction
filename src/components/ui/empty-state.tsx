import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
      <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5">
        <Inbox className="text-muted/60" size={28} />
      </div>
      <h3 className="text-base font-medium mb-1 tracking-tight">{title}</h3>
      {description && <p className="text-sm text-muted/80 max-w-sm">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
