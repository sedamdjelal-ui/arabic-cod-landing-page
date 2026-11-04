"use client";

import { useEffect, useState } from "react";
import { formatPrice, product } from "@/lib/product";

// زر "اطلب الآن" ثابت أسفل شاشة الهاتف.
// يظهر فقط بعد تجاوز زر الطلب الأول، ويختفي عند الوصول إلى النموذج.
// نستعمل IntersectionObserver: المتصفح يخبرنا متى يدخل العنصر الشاشة أو يخرج منها،
// دون حساب المواقع عند كل تمرير، فتبقى الصفحة خفيفة.
export default function StickyOrderButton() {
  const [passedHero, setPassedHero] = useState(false);
  const [reachedOrder, setReachedOrder] = useState(false);

  useEffect(() => {
    const heroButton = document.getElementById("hero-cta");
    const order = document.getElementById("order");
    if (!heroButton || !order) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const box = entry.boundingClientRect;
        if (entry.target === heroButton) {
          // تجاوزنا الزر الأول عندما يخرج من أعلى الشاشة.
          setPassedHero(!entry.isIntersecting && box.bottom < 0);
        } else {
          // وصلنا إلى النموذج عندما يظهر، أو عندما نكون تحته.
          setReachedOrder(entry.isIntersecting || box.top < 0);
        }
      }
    });

    observer.observe(heroButton);
    observer.observe(order);
    return () => observer.disconnect();
  }, []);

  const visible = passedHero && !reachedOrder;

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
