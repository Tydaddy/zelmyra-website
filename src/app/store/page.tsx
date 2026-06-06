import CTA from "@/components/CTA";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const ranks = [
  { title: "Eclipsion", text: "$5 rank with quality-of-life perks, a Legendary Key, and extra convenience features." },
  { title: "Celestaris", text: "$20 rank with more homes, /back, /top, Mythic rewards, and more player vault access." },
  { title: "Aetherion", text: "$50 rank with player warps, /hat, /craft, /ptime, /anvil, and strong crate rewards." },
  { title: "Drakaris", text: "$100 supporter rank with major convenience perks, /fly, /heal, /feed, and premium rewards." },
  { title: "Gameplay First", text: "Zelmyra is designed so players can still progress, earn keys, rank up, and enjoy the server through gameplay." },
  { title: "Support the Server", text: "Store purchases help fund hosting, development, builds, advertising, and future content updates." },
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Store" title="Support Zelmyra and unlock quality-of-life perks." text="The store helps fund development, hosting, builds, advertising, and future content while keeping the server focused on gameplay progression." image="/images/hero-castle.png" />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Ranks & Support</p><h2 className="text-5xl font-black">Store perks without replacing the survival grind.</h2></div>
        <InfoGrid items={ranks} />
      </section>
      <section className="px-6 py-24 text-center">
        <a href="https://zelmyra.tebex.io/" target="_blank" rel="noreferrer" className="inline-block rounded-xl bg-purple-600 px-10 py-5 text-lg font-black transition hover:bg-purple-500">Open Zelmyra Store</a>
      </section>
      <CTA />
    </main>
  );
}
