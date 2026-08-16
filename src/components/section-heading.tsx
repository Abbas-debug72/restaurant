type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
          tone === "dark" ? "text-brass-dark" : "text-brass"
        }`}
      >
        {eyebrow}
      </p>
      <div className={`hairline mt-3 ${centered ? "mx-auto" : ""} w-16`} aria-hidden="true" />
      <h2
        className={`mt-5 font-display text-3xl leading-tight md:text-5xl ${
          tone === "dark" ? "text-ink" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 leading-relaxed ${
            tone === "dark" ? "text-ink/70" : "text-cream/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
