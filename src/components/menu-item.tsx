type Props = {
  name: string;
  description: string;
  price: string;
};

export default function MenuItem({ name, description, price }: Props) {
  return (
    <div className="py-5">
      <div className="flex items-baseline gap-3">
        <h3 className="font-display text-xl text-ink">{name}</h3>
        <span aria-hidden="true" className="flex-1 border-b border-dotted border-ink/30" />
        <span className="text-sm font-medium tracking-wide text-brass-dark">{price}</span>
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">{description}</p>
    </div>
  );
}
