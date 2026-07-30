"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="landing">
      <div className="landing__glow landing__glow--b" aria-hidden="true" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8">
          Something went wrong
        </h1>
        <button
          type="button"
          onClick={() => reset()}
          className="text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
