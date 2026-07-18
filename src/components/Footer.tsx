import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/35">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-black"><span className="text-purple-300">Zel</span><span className="text-emerald-300">myra</span></p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">A Java and Bedrock Minecraft network featuring classic no-spawner Skyblock and a medieval Forever SMP.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm font-bold text-zinc-300">
          <Link href="/skyblock">Skyblock</Link>
          <Link href="/smp">Forever SMP</Link>
          <Link href="/events">Events</Link>
          <Link href="/vote">Vote</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/store">Store</Link>
        </div>
        <div className="text-sm text-zinc-400 md:text-right">
          <p>Server IP: <strong className="text-white">Zelmyra.net</strong></p>
          <p className="mt-2">Java + Bedrock crossplay</p>
          <p className="mt-4">© 2026 Zelmyra Network</p>
        </div>
      </div>
    </footer>
  );
}
