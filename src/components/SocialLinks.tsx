import type { SocialLink } from "@/config/site";
import { socialLabels } from "@/config/social-meta";
import { SocialIcon } from "@/components/SocialIcon";

export function SocialLinks({ links }: { links: SocialLink[] }) {
  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map((link) => (
        <a
          key={link.platform + link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLabels[link.platform]}
          title={socialLabels[link.platform]}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-600 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300"
        >
          <SocialIcon platform={link.platform} className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
