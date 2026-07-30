import Link from "next/link";

export default function NotFound() {
  return (
    <main className="landing">
      <div className="landing__glow landing__glow--a" aria-hidden="true" />
      <div className="relative z-10 text-center px-6">
        <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8">
          Not found
        </h1>
        <Link
          href="/"
          className="text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
