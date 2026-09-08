import Image from "next/image";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const avatarClassName =
  "h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-lg dark:ring-neutral-900";

export function Avatar({ name, src }: { name: string; src?: string }) {
  if (src) {
    const isExternal = /^https?:\/\//.test(src);
    // Local files under public/ (e.g. "/avatar.jpg") go through next/image for
    // optimization. External URLs (pasted from anywhere) fall back to a plain
    // <img> so you never have to touch next.config.ts's image allowlist just
    // to swap a photo link.
    return isExternal ? (
      // eslint-disable-next-line @next/next/no-img-element -- intentional: any external host, no config needed
      <img src={src} alt={name} width={96} height={96} className={avatarClassName} />
    ) : (
      <Image
        src={src}
        alt={name}
        width={96}
        height={96}
        className={avatarClassName}
        priority
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-[var(--accent)] text-2xl font-semibold text-white ${avatarClassName}`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}
