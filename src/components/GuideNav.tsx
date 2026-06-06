import Link from "next/link";

const guideOrder = [
  { title: "Getting Started", href: "/guides/getting-started" },
  { title: "Economy Guide", href: "/economy" },
  { title: "Rank Guide", href: "/guides/ranks" },
  { title: "Dungeons Guide", href: "/guides/dungeons" },
  { title: "Events Guide", href: "/guides/events" },
  { title: "Claims Guide", href: "/guides/claims" },
  { title: "Voting Guide", href: "/guides/voting" },
  { title: "Crates Guide", href: "/guides/crates" },
];

export default function GuideNav({ current }: { current: string }) {
  const index = guideOrder.findIndex((guide) => guide.href === current);
  const previous = index > 0 ? guideOrder[index - 1] : null;
  const next = index >= 0 && index < guideOrder.length - 1 ? guideOrder[index + 1] : null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-10">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-300">Guide Navigation</p>
          <p className="mt-2 text-zinc-400">Move through the server guides without going back to the hub.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {previous && (
            <Link href={previous.href} className="rounded-xl border border-white/10 px-5 py-3 text-center font-bold text-zinc-200 transition hover:bg-white/10">
              ← {previous.title}
            </Link>
          )}
          {next && (
            <Link href={next.href} className="rounded-xl bg-purple-600 px-5 py-3 text-center font-black text-white transition hover:bg-purple-500">
              Next Guide: {next.title} →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
