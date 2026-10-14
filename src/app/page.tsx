
import Image from "next/image";

import FacebookIcon from "@/components/social/FacebookIcon";
import InstagramIcon from "@/components/social/InstagramIcon";
import WhatsAppIcon from "@/components/social/WhatsAppIcon";
import LinkedInIcon from "@/components/social/LinkedInIcon";
import XIcon from "@/components/social/XIcon";
import ThreadsIcon from "@/components/social/ThreadsIcon";
import TikTokIcon from "@/components/social/TikTokIcon";
import YouTubeIcon from "@/components/social/YouTubeIcon";
import SocialIconTile from "@/components/social/SocialIconTile";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/africa.suk",
    gradient: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
    component: InstagramIcon,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@africasuk",
    gradient: "from-[#1a1a1a] via-[#0f0f0f] to-black",
    component: TikTokIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@africasuk",
    gradient: "from-[#e50914] via-[#b20710] to-[#800000]",
    component: YouTubeIcon,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/211923866290",
    gradient: "from-[#25D366] via-[#1ebe5d] to-[#128C7E]",
    component: WhatsAppIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592236599092",
    gradient: "from-[#1877F2] via-[#166fe5] to-[#0e4da4]",
    component: FacebookIcon,
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@africa.suk",
    gradient: "from-[#404040] via-[#171717] to-black",
    component: ThreadsIcon,
  },
  {
    name: "X",
    href: "https://x.com/africasuk",
    gradient: "from-[#262626] via-[#171717] to-black",
    component: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/africasuk",
    gradient: "from-[#0A66C2] via-[#095196] to-[#063b6f]",
    component: LinkedInIcon,
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col justify-between overflow-hidden bg-[#031c12] px-4 py-4 text-white sm:px-8 sm:py-6">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-95 w-95 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-28 left-1/2 h-95 w-95 -translate-x-1/2 rounded-full bg-emerald-800/20 blur-[120px]" />

      <header className="relative z-10 flex w-full shrink-0 items-center justify-center pt-10">
        <a
          href="https://africasuk.com/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90 sm:gap-3"
        >
          <div className="relative h-8 w-8 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
            <Image
              src="/logo.png"
              alt="Africa Suk official logo"
              fill
              priority
              sizes="40px"
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black tracking-tight sm:text-2xl">
            Africa<span className="text-emerald-400"> Suk</span>
          </span>
        </a>
      </header>

      <section className="relative z-10 mx-auto my-10 flex w-full max-w-xl flex-col items-center justify-center text-center">
        <div className="mb-5">
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            Let&apos;s <span className="text-emerald-400">Connect</span>
          </h1>
          <p className="mt-2 text-xs leading-6 text-white/50 sm:text-sm">
            Follow Africa Suk for new arrivals, daily updates, exclusive
            offers, and customer support.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-7">
          {socials.map(({ name, href, gradient, component: Icon }) => (
            <SocialIconTile
              key={name}
              label={name}
              href={href}
              gradient={gradient}
            >
              <Icon />
            </SocialIconTile>
          ))}
        </div>

        <a
          href="https://africasuk.com/"
          className="mt-8 flex w-full max-w-md items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/20 active:scale-[0.98]"
        >
          <div className="text-left">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
              Official Store
            </span>
            <p className="text-xs font-bold text-white sm:text-sm">
              Shop on Africa Suk Marketplace
            </p>
          </div>
          <span className="text-sm font-bold text-emerald-400" aria-hidden="true">
            →
          </span>
        </a>
      </section>

      <footer className="relative z-10 flex w-full shrink-0 flex-col items-center justify-center border-t border-white/10 pt-4 text-[10px] text-white/40">
        <span>© 2026 Africa Suk · All rights reserved</span>
        <a
          href="https://africasuk.com/"
          className="mt-1 text-white/30 transition-colors hover:text-emerald-400"
        >
          africasuk.com
        </a>
      </footer>
    </main>
  );
}
