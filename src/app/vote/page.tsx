import PageHero from "@/components/PageHero";

const voteSites = [
  {
    label: "Vote 1",
    name: "Minecraft Best Servers",
    href: "https://minecraftbestservers.com/server-zelmyra.6908/vote",
  },
  {
    label: "Vote 2",
    name: "Play Minecraft Servers",
    href: "https://play-minecraft-servers.com/minecraft-servers/zelmyra/?tab=vote",
  },
  {
    label: "Vote 3",
    name: "Minecraft Buzz",
    href: "https://minecraft.buzz/vote/20949",
  },
  {
    label: "Vote 4",
    name: "MinecraftServers.org",
    href: "https://minecraftservers.org/vote/687097",
  },
  {
    label: "Vote 5",
    name: "Minecraft Server List",
    href: "https://minecraft-server-list.com/server/519850/vote/",
  },
];

export const metadata = {
  title: "Vote for Zelmyra | Minecraft SMP Voting Rewards",
  description:
    "Vote for Zelmyra on all five Minecraft server lists to support the server and earn vote rewards in-game.",
};

export default function VotePage() {
  return (
    <main className="min-h-screen bg-[#07030d] text-white">
      <PageHero
        eyebrow="Support The Realm"
        title="Vote for Zelmyra."
        text="Vote on each site to help more players discover the server. Voting supports Zelmyra and helps grow the community."
      />

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-black">Vote Sites</h2>
            <p className="mt-3 max-w-3xl text-zinc-400">
              Open each voting page below, vote with your Minecraft username, then return to vote on the next site.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {voteSites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-purple-400/60 hover:bg-purple-600/15"
              >
                <div className="text-sm font-black uppercase tracking-[0.25em] text-purple-300">
                  {site.label}
                </div>
                <div className="mt-3 text-2xl font-black text-white">{site.name}</div>
                <div className="mt-4 text-sm font-bold text-zinc-400 transition group-hover:text-purple-200">
                  Open voting page →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
