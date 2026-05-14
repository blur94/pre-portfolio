import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

export function LiveBadge({ className }: LiveBadgeProps) {
  return (
    <Badge
      className={cn(
        "gap-1.5 rounded-full border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-emerald-400",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-emerald-400" />
      Live Project
    </Badge>
  );
}
