type Props = {
  data: Record<string, unknown>;
};

/** Renders JSON-LD structured data. React escapes script children as text,
 *  so no dangerouslySetInnerHTML is involved. */
export default function JsonLd({ data }: Props) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
