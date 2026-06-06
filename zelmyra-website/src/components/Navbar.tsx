import Link from "next/link";
import CopyIpButton from "@/components/CopyIpButton";

const links = [
  { href: "/dungeons", label: "Dungeons" },
  { href: "/economy", label: "Economy" },
  { href: "/events", label: "Events" },
  { href: "/guides", label: "Guides" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-tight">
          Zelmyra
        </Link>

        <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <a
            href="https://zelmyra.tebex.io/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-4 py-2 font-bold text-white transition hover:bg-purple-500"
          >
            Store
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://discord.gg/Dvta9Z6cNE" target="_blank" rel="noreferrer" className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-bold transition hover:bg-purple-500">
            Join Discord
          </a>
          <CopyIpButton compact />
        </div>
      </div>
    </nav>
  );
}
