import { cn } from "@/lib/utils";
import Link from "next/link";
import { Shield } from "lucide-react";

interface ComplianceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ComplianceCard({ title, description, href, icon, className }: ComplianceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block bg-card/40 border border-white/[0.06] rounded-2xl p-5 hover:bg-card-hover hover:border-white/[0.1] transition-all duration-300 group",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2.5 bg-accent/[0.08] border border-accent/[0.12] rounded-xl text-accent">
          {icon || <Shield size={18} />}
        </div>
        <div>
          <h3 className="font-medium mb-1 text-sm tracking-tight group-hover:text-foreground transition-colors">{title}</h3>
          <p className="text-[13px] text-muted/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}
