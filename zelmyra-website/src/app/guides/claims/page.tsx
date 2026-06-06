import CTA from "@/components/CTA";
import GuideNav from "@/components/GuideNav";
import InfoGrid from "@/components/InfoGrid";
import PageHero from "@/components/PageHero";

const items = [
  { title: "What Claims Do", text: "Claims protect a square region of land so other players cannot normally build, break, steal, or mess with your base." },
  { title: "Start With A Chest", text: "On many GriefPrevention servers, placing your first chest can create an automatic starter claim around it. Use this as early protection while you settle in." },
  { title: "Use A Golden Shovel", text: "Hold a golden shovel, right-click one corner of the land you want, then right-click the opposite corner to create or resize your claim." },
  { title: "Check Claim Borders", text: "Use a stick or golden shovel to view claim borders. Temporary markers help you see what land is protected." },
  { title: "Trust Friends Carefully", text: "Use trust commands only for players you know. Build trust, container trust, and access trust can give different levels of permission." },
  { title: "Protect Towns And Shops", text: "Claims are important for medieval towns, shops, farms, storage rooms, player warps, and any build you do not want griefed." },
  { title: "Claim Blocks Matter", text: "Claims use claim blocks. As you play more, you can earn or receive more space to protect larger bases and town projects." },
  { title: "Ask Staff If Stuck", text: "If a claim looks wrong, you cannot expand, or you trusted the wrong player, ask staff before risking your items or build." },
];

export default function ClaimsGuide() {
  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Guide" title="Claims Guide" text="Protect your Minecraft survival base, shops, farms, player towns, and valuables with Zelmyra's claim system." image="/images/community-town.png" />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Land Protection</p>
          <h2 className="text-5xl font-black">Keep your builds safe.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Claims let players protect land while still playing normal SMP survival. They are especially useful for economy shops, farms, town districts, storage rooms, and player warp areas.
          </p>
        </div>
        <InfoGrid items={items} />
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          <div className="p-6 md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Video Guide</p>
            <h3 className="text-3xl font-black">How to claim land on Zelmyra</h3>
            <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
              Watch this quick walkthrough if you want to see the claim system in action before protecting your base, shop, farm, or town plot.
            </p>
          </div>
          <div className="aspect-video w-full bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/yvStNIm64oM"
              title="Zelmyra land claiming guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-6 md:p-8">
            <a
              href="https://www.youtube.com/shorts/yvStNIm64oM?feature=share"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-white/10 px-5 py-3 font-bold text-zinc-200 transition hover:bg-white/10"
            >
              Open the claiming video on YouTube
            </a>
          </div>
        </div>
      </section>
      <GuideNav current="/guides/claims" />
      <CTA />
    </main>
  );
}
