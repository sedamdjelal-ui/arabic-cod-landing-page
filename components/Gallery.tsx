"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery, product } from "@/lib/product";

// معرض الصور: صورة كبيرة وتحتها صور مصغّرة، الضغط على المصغّرة يغيّر الكبيرة.
export default function Gallery() {
  const [active, setActive] = useState(0);
  const current = gallery[active];

  return (
    <section className="px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center font-display text-3xl font-bold text-forest sm:text-4xl">
          صور المنتج
        </h2>

        <div className="relative mt-10 aspect-square overflow-hidden rounded-3xl border border-sand bg-white">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 640px) 576px, 100vw"
            className="object-contain"
          />
        </div>

        <ul className="mt-4 grid grid-cols-4 gap-3">
          {gallery.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`عرض الصورة ${index + 1} من ${gallery.length}`}
                aria-current={index === active ? "true" : undefined}
                className={`relative block aspect-square w-full overflow-hidden rounded-xl border-2 bg-white transition ${
                  index === active
                    ? "border-gold"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center text-sm text-muted">
          {product.name} · {product.size}
        </p>
      </div>
    </section>
  );
}
