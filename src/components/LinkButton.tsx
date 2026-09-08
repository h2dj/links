import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/config/site";

export function LinkButton({ link, index }: { link: LinkItem; index: number }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${index * 60}ms` }}
      className={[
        "link-card group relative flex w-full items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md",
        link.highlighted
          ? "border-transparent bg-[var(--accent)] text-white shadow-md hover:brightness-110"
          : "border-neutral-200 bg-white/80 text-neutral-900 shadow-sm backdrop-blur hover:border-[var(--accent)]/40 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-100",
      ].join(" ")}
    >
      {link.emoji && (
        <span className="text-xl leading-none" aria-hidden="true">
          {link.emoji}
        </span>
      )}
      <span className="flex-1 text-left">
        <span className="block font-medium">{link.title}</span>
        {link.description && (
          <span
            className={
              "block text-sm " +
              (link.highlighted
                ? "text-white/80"
                : "text-neutral-500 dark:text-neutral-400")
            }
          >
            {link.description}
          </span>
        )}
      </span>
      <ArrowUpRight
        className={
          "h-4 w-4 shrink-0 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        }
      />
    </a>
  );
}
