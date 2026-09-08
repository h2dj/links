import Image from "next/image";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({ name, src }: { name: string; src?: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-lg dark:ring-neutral-900"
        priority
      />
    );
  }

  return (
    <div
      className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent)] text-2xl font-semibold text-white shadow-lg ring-4 ring-white dark:ring-neutral-900"
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}
