import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import galleryImages from "@/data/gallery-images.json";

export default function GalleryPage() {
  const images = galleryImages as string[];

  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero
        eyebrow="Gallery"
        title="A look inside the world of Zelmyra."
        text="Explore screenshots from spawn, player builds, towns, dungeon arenas, events, and community areas."
        image="/images/hero-spawn.png"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        {images.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-zinc-300">
            Add screenshots to <span className="font-bold text-white">public/images</span> and they will appear here automatically after you run <span className="font-bold text-white">npm run build</span> and push.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((src) => (
              <div
                key={src}
                className="group relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
              >
                <img
                  src={src}
                  alt="Zelmyra Minecraft SMP gallery screenshot"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <CTA />
    </main>
  );
}
