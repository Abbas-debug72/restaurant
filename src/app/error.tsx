"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console in development; a production app would
    // report to an error tracker here.
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[80svh] items-center bg-forest-deep text-cream">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
          Something went wrong
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          The kitchen apologizes.
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-cream/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-10 bg-brass px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-deep transition-colors hover:bg-brass-light"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
