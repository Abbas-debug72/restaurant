import ButtonLink from "@/components/button";

type Props = {
  title: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaBand({
  title,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  ctaLabel = "Book a Table",
  ctaHref = "/reservations",
}: Props) {
  return (
    <section className="border-y border-brass/25 bg-forest-deep">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
          Ember &amp; Vine
        </p>
        <h2 className="mt-5 font-display text-3xl leading-tight text-cream md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/70">{text}</p>
        <div className="mt-9">
          <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
