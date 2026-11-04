"use client";

import { useEffect, useState } from "react";
import { formatPrice, product } from "@/lib/product";

// زر "اطلب الآن" ثابت أسفل شاشة الهاتف.
// يظهر فقط بعد تجاوز زر الطلب الأول، ويختفي عند الوصول إلى النموذج.
export default function StickyOrderButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroButton = document.getElementById("hero-cta");
    const order = document.getElementById("order");
    if (!heroButton || !order) return;

    function update() {
      const passedHero = heroButton!.getBoundingClientRect().bottom < 0;
      const beforeOrder = order!.getBoundingClientRect().top > window.innerHeight;
      setVisible(passedHero && beforeOrder);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-4 py-3 transition-transform duration-200 motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="#order"
        tabIndex={visible ? 0 : -1}
        className="flex items-center justify-between rounded-lg bg-oud px-5 py-3 font-bold text-white"
      >
        <span>اطلب الآن</span>
        <span>{formatPrice(product.price)}</span>
      </a>
    </div>
  );
}
