import Image from "next/image";
import { blurDataUrl, type Pic } from "@/lib/images";

type Props = {
  image: Pic;
  label?: string;
  caption?: string;
  tint?: string;
};

export default function ImageCard({ image, label, caption, tint = "#16231d" }: Props) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl(tint)}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <figcaption className="mt-4">
        {label ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-dark">
            {label}
          </p>
        ) : null}
        {caption ? <p className="mt-1 font-display text-lg italic text-ink">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
