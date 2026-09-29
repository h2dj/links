import type { LinkItem } from "@/config/site";
import { site, links, socialLinks } from "@/config/site";
import { Avatar } from "@/components/Avatar";
import { LinkButton } from "@/components/LinkButton";
import { LinkGroup } from "@/components/LinkGroup";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

// `group`이 없는 링크는 그대로, 있는 링크는 같은 group 이름끼리 묶여
// 하단에 접었다 펼 수 있는 섹션으로 표시됩니다 (첫 등장 순서 유지).
const ungroupedLinks = links.filter((link) => !link.group);
const linkGroups = links.reduce<{ label: string; links: LinkItem[] }[]>(
  (groups, link) => {
    if (!link.group) return groups;
    const existing = groups.find((g) => g.label === link.group);
    if (existing) existing.links.push(link);
    else groups.push({ label: link.group, links: [link] });
    return groups;
  },
  [],
);

export default function Home() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center bg-gradient-to-b from-[color-mix(in_srgb,var(--accent)_10%,transparent)] to-transparent px-4 py-10 sm:py-16"
      style={{ "--accent": site.accentColor } as React.CSSProperties}
    >
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <main className="flex w-full max-w-md flex-1 flex-col items-center gap-6">
        {site.badge && (
          <span className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300">
            {site.badge}
          </span>
        )}

        <Avatar name={site.name} src={site.avatarUrl || undefined} />

        <div className="flex flex-col items-center gap-1.5 text-center">
          <h1 className="text-xl font-semibold">{site.name}</h1>
          <p className="max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
            {site.bio}
          </p>
        </div>

        <SocialLinks links={socialLinks} />

        <nav className="mt-2 flex w-full flex-col gap-3" aria-label="Links">
          {ungroupedLinks.map((link, i) => (
            <LinkButton key={link.title + link.url} link={link} index={i} />
          ))}
          {linkGroups.map((group, i) => (
            <LinkGroup
              key={group.label}
              label={group.label}
              links={group.links}
              index={ungroupedLinks.length + i}
            />
          ))}
        </nav>
      </main>

      <footer className="mt-10 text-xs text-neutral-400 dark:text-neutral-600">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}
