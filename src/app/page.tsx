import { site, links, socialLinks } from "@/config/site";
import { Avatar } from "@/components/Avatar";
import { LinkButton } from "@/components/LinkButton";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

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
          {links.map((link, i) => (
            <LinkButton key={link.title + link.url} link={link} index={i} />
          ))}
        </nav>
      </main>

      <footer className="mt-10 text-xs text-neutral-400 dark:text-neutral-600">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}
