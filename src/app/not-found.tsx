import Link from "next/link";
import ButtonLink from "@/components/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-forest-deep text-cream">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
          Error 404
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
          This page has left the kitchen.
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-cream/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back Home</ButtonLink>
          <ButtonLink href="/menu" variant="outline">
            View the Menu
          </ButtonLink>
        </div>
        <p className="mt-10 text-xs text-cream/40">
          Or email{" "}
          <Link href="mailto:hello@ember-vine.example.com" className="underline underline-offset-4 hover:text-brass-light">
            hello@ember-vine.example.com
          </Link>
        </p>
      </div>
    </section>
  );
}
