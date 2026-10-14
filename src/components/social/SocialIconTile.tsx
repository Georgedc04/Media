
"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
  href: string;
  gradient: string;
};

export default function SocialIconTile({
  children,
  label,
  href,
  gradient,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Africa Suk on ${label}`}
      className="group flex w-28 flex-col items-center justify-center transition-transform duration-300 sm:w-32"
    >
      {/* Premium social icon tile */}
      <div
        className={`relative flex h-19 w-19 items-center justify-center
          overflow-hidden rounded-3xl
          bg-linear-to-br ${gradient}
          p-3 text-white
          shadow-[0_10px_25px_rgba(0,0,0,0.45)]
          ring-1 ring-white/15
          transition-all duration-300
          group-hover:-translate-y-1.5
          group-hover:scale-105
          group-hover:ring-emerald-400/50
          group-hover:shadow-[0_14px_30px_rgba(16,185,129,0.3)]
          active:scale-95
          sm:h-20 sm:w-20 sm:rounded-[26px]`}
      >
        {/* Gloss highlight */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-linear-to-b from-white/25 to-transparent sm:rounded-t-[26px]" />

        {/* Centered icon */}
        <div className="relative z-10 flex h-9 w-9 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
          {children}
        </div>
      </div>

      {/* Consistent label spacing */}
      <span className="mt-2 block w-full truncate text-center text-xs font-semibold tracking-wide text-white/80 transition-colors group-hover:text-emerald-300">
        {label}
      </span>
    </a>
  );
}
