import fs from "fs";
import path from "path";
import Image from "next/image";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";

function getGalleryImages() {
  const imageDir = path.join(process.cwd(), "public", "images");
  const galleryDir = path.join(imageDir, "gallery");
  const allowed = new Set([".png", ".jpg", ".jpeg", ".webp"]);

  const readImages = (dir: string, prefix: string) => {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((file) => allowed.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `${prefix}/${file}`);
  };

  const galleryImages = readImages(galleryDir, "/images/gallery");
  if (galleryImages.length > 0) return galleryImages;

  return readImages(imageDir, "/images");
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Gallery" title="A look inside the world of Zelmyra." text="Explore screenshots from spawn, player builds, towns, dungeon arenas, events, and community areas." image="/images/hero-spawn.png" />
      <section className="mx-auto max-w-7xl px-6 py-24">
        {images.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-zinc-300">
            Add screenshots to <span className="font-bold text-white">public/images/gallery</span> or <span className="font-bold text-white">public/images</span> and they will appear here automatically.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((src) => (
              <div key={src} className="group relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
                <Image src={src} alt="Zelmyra Minecraft SMP gallery screenshot" fill className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        )}
      </section>
      <CTA />
    </main>
  );
}
