import CTA from "@/components/CTA";
import ImageCard from "@/components/ImageCard";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const events = [
  { title: "Fishing Frenzy", text: "Catch the biggest fish during the event and compete for leaderboard rewards." },
  { title: "Mining Mayhem", text: "Mine valuable ores and race other players for first place while the event is active." },
  { title: "Slaying Showdown", text: "Defeat mobs, climb the leaderboard, and earn rewards during combat-focused events." },
  { title: "Boss Bar Timers", text: "Events show live progress and timers so everyone knows what is happening." },
  { title: "Leaderboard Rewards", text: "Top players earn prizes, giving events real stakes and encouraging competition." },
  { title: "Server-Wide Activity", text: "Events give online players something to do together, even if they are spread across the world." },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Custom Events" title="Server-wide competitions throughout the day." text="Zelmyra events give Minecraft SMP players quick goals, leaderboard competition, crate keys, and rewards beyond normal survival gameplay." image="/images/players-event.png" />
      <section className="mx-auto max-w-7xl px-6 py-24"><div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Events</p><h2 className="text-5xl font-black">Compete, win rewards, and keep the server active.</h2></div><InfoGrid items={events} /></section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        <ImageCard title="Fishing Frenzy" tag="Fishing" image="/images/event-fishing-frenzy.png" text="Players compete to catch the largest fish while the event timer is active." />
        <ImageCard title="Mining Mayhem" tag="Mining" image="/images/event-mining-mayhem.png" text="Mine ores, climb the leaderboard, and take over first place for rewards." />
        <ImageCard title="Slaying Showdown" tag="Combat" image="/images/event-slaying-showdown.png" text="Fight mobs, push for first place, and earn rewards during combat events." />
      </section>
      <CTA />
    </main>
  );
}
