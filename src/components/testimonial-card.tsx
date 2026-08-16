function Stars() {
  return (
    <div className="flex gap-1 text-brass" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

type Props = {
  quote: string;
  attribution: string;
};

export default function TestimonialCard({ quote, attribution }: Props) {
  return (
    <figure className="flex h-full flex-col border border-ink/10 bg-cream p-8">
      <Stars />
      <blockquote className="mt-5 flex-1 font-display text-lg italic leading-relaxed text-ink/85">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
        — {attribution}
      </figcaption>
    </figure>
  );
}
