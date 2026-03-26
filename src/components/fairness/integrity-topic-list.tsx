import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface IntegrityTopic {
  title: string;
  description: string;
  href: string;
}

interface IntegrityTopicListProps {
  topics: IntegrityTopic[];
}

export function IntegrityTopicList({ topics }: IntegrityTopicListProps) {
  return (
    <div className="space-y-2">
      {topics.map((topic) => (
        <Link
          key={topic.href}
          href={topic.href}
          className="flex items-center justify-between p-4 bg-card/40 border border-white/[0.06] rounded-2xl hover:bg-card-hover transition-colors group"
        >
          <div>
            <h3 className="font-medium text-sm group-hover:text-accent transition-colors">{topic.title}</h3>
            <p className="text-xs text-muted/60 mt-0.5">{topic.description}</p>
          </div>
          <ChevronRight size={16} className="text-muted/60 group-hover:text-accent" />
        </Link>
      ))}
    </div>
  );
}
