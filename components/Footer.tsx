import { product } from "@/lib/product";

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 text-sm text-muted sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:justify-between">
        <div>
          <p className="text-lg font-bold text-ink">{product.brand}</p>
          <p className="mt-1">عطور تُركَّب في الجزائر.</p>
        </div>

        <ul className="space-y-1">
          <li>الجزائر العاصمة</li>
          <li>
            الهاتف: <span dir="ltr">0550 00 00 00</span>
          </li>
          <li>من السبت إلى الخميس، من 9:00 إلى 18:00</li>
        </ul>
      </div>

      <div className="mx-auto mt-8 max-w-6xl space-y-1 border-t border-line pt-6 text-xs">
        <p>
          © 2026 {product.brand}. موقع تجريبي لمنتج وهمي، ولا تُجرى عبره أي
          عملية بيع حقيقية.
        </p>
        <p>صور القوارير: Muhammad Sulyman على Unsplash.</p>
      </div>
    </footer>
  );
}
