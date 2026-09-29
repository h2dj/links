import { ChevronDown } from "lucide-react";
import type { LinkItem } from "@/config/site";
import { LinkButton } from "@/components/LinkButton";

export function LinkGroup({
  label,
  links,
  index,
}: {
  label: string;
  links: LinkItem[];
  index: number;
}) {
  return (
    <details
      className="link-card group/details w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 shadow-sm backdrop-blur transition-colors open:shadow-md dark:border-neutral-800 dark:bg-neutral-900/70"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 select-none">
        <span className="text-xl leading-none" aria-hidden="true">
          🧰
        </span>
        <span className="flex-1 text-left font-medium text-neutral-900 dark:text-neutral-100">
          {label}
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 group-open/details:rotate-180" />
      </summary>
      <div className="flex flex-col gap-2 px-3 pb-3">
        {links.map((link) => (
          <LinkButton key={link.title + link.url} link={link} index={0} />
        ))}
      </div>
    </details>
  );
}
