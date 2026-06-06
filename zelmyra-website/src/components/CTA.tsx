import CopyIpButton from "@/components/CopyIpButton";

export default function CTA() {
  return (
    <section className="px-6 py-28 text-center">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl shadow-purple-950/20 md:p-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">Ready to play?</p>
        <h2 className="mb-6 text-5xl font-black">Start your journey on Zelmyra.</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Join a medieval survival world with towns, economy progression, custom events, exclusive dungeons, and a community built for long-term play.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <CopyIpButton />
          <a href="https://discord.gg/Dvta9Z6cNE" target="_blank" rel="noreferrer" className="rounded-xl border border-white/20 px-8 py-4 font-black transition hover:bg-white/10">Join Discord</a>
        </div>
      </div>
    </section>
  );
}
