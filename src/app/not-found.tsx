import Link from "next/link";

export default function NotFound() {
  return <main className="min-h-screen bg-[#050607] px-6 pt-36 text-center text-white"><h1 className="text-6xl font-black">Page not found</h1><p className="mt-5 text-lg text-zinc-300">Explore Zelmyra Skyblock or the Forever SMP instead.</p><div className="mt-8 flex justify-center gap-3"><Link href="/skyblock" className="rounded-xl bg-emerald-600 px-6 py-3 font-black">Skyblock</Link><Link href="/smp" className="rounded-xl bg-purple-600 px-6 py-3 font-black">Forever SMP</Link></div></main>;
}
