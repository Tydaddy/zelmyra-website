import fs from "fs";
import path from "path";
import Image from "next/image";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";

const allowedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

function getImagesFromDirectory(directory: string, publicPrefix: string): string[] {
  if (!fs.existsSync(directory)) return [];

  const results: string[] = [];
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    const publicPath = `${publicPrefix}/${entry.name}`;

    if (entry.isDirectory()) {
      results.push(...getImagesFromDirectory(fullPath, publicPath));
      continue;
    }

    if (allowedExtensions.has(path.extname(entry.name).toLowerCase())) {
      results.push(publicPath);
    }
  }

  return results;
}

function getGalleryImages() {
  const publicDir = path.join(process.cwd(), "public");
  const preferredImagesDir = path.join(publicDir, "images");
  const fallbackImageDir = path.join(publicDir, "image");

  const images = [
    ...getImagesFromDirectory(preferredImagesDir, "/images"),
    ...getImagesFromDirectory(fallbackImageDir, "/image"),
  ];

  return Array.from(new Set(images))
    .filter((src) => !src.toLowerCase().endsWith("favicon.ico"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <main className="min-h-screen bg-[#08050d] text-white">
      <PageHero eyebrow="Gallery" title="A look inside the world of Zelmyra." text="Explore screenshots from spawn, player builds, towns, dungeon arenas, events, and community areas." image="/images/hero-spawn.png" />
      <section className="mx-auto max-w-7xl px-6 py-24">
        {images.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-zinc-300">
            Add screenshots to <span className="font-bold text-white">public/images</span> and they will appear here automatically.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((src) => (
              <div key={src} className="group relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
                <Image src={src} alt="Zelmyra Minecraft SMP gallery screenshot" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        )}
      </section>
      <CTA />
    </main>
  );
}
