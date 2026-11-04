"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery } from "@/lib/product";

// معرض الصور: صورة كبيرة وتحتها صور مصغّرة، الضغط على المصغّرة يغيّر الكبيرة.
export default function Gallery() {
  const [active, setActive] = useState(0);
  const current = gallery[active];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-md bg-mist">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          // الصورة الأولى هي أكبر عنصر في أول الشاشة: نحمّلها فوراً وبأولوية عالية.
          preload={active === 0}
          loading={active === 0 ? "eager" : undefined}
          fetchPriority={active === 0 ? "high" : undefined}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {gallery.length > 1 && (
        <ul className="mt-3 flex gap-3">
          {gallery.map((image, index) => (
            <li key={image.src} className="w-20">
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`عرض الصورة ${index + 1} من ${gallery.length}`}
                aria-current={index === active ? "true" : undefined}
                className={`relative block aspect-square w-full overflow-hidden rounded-md border-2 bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oud ${
                  index === active ? "border-ink" : "border-transparent"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
