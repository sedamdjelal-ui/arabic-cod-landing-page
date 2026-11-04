import Gallery from "@/components/Gallery";
import { formatPrice, product } from "@/lib/product";

const highlights = [
  "ثبات من 8 إلى 12 ساعة على البشرة",
  "عنبر وياسمين وخشب الصندل",
  "يصل في علبة هدية مغلقة",
];

const reassurance = [
  {
    text: "توصيل إلى كل الولايات خلال 2 إلى 5 أيام",
    icon: (
      <path d="M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6ZM7.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    ),
  },
  {
    text: "الدفع نقداً عند الاستلام",
    icon: <path d="M3 7h18v10H3V7Zm9 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  },
  {
    text: "تعاين الطرد قبل أن تدفع",
    icon: <path d="m5 12 4 4L19 6" />,
  },
];

export default function Hero() {
  const saving = product.oldPrice - product.price;

  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-xl font-bold">{product.brand}</span>
          <span className="text-sm text-muted">الدفع عند الاستلام</span>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-6 sm:px-6 md:grid-cols-2 md:gap-12 md:py-12">
        <Gallery />

        <div>
          <p className="text-sm text-muted">{product.brand}</p>
          <h1 className="mt-1 text-2xl font-bold leading-snug sm:text-3xl">
            عطر {product.name}
          </h1>
          <p className="mt-1 text-muted">
            {product.type}، {product.size}
          </p>

          <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-3xl font-bold">
              {formatPrice(product.price)}
            </span>
            <s className="text-lg text-muted">{formatPrice(product.oldPrice)}</s>
            <span className="text-sm font-medium text-amber">
              توفّر {formatPrice(saving)}
            </span>
          </div>

          <p className="mt-5 max-w-prose leading-8 text-muted">
            عطر شرقي دافئ يبدأ بلمسة هيل خفيفة، ثم يستقر على العنبر وخشب
            الصندل. مناسب للمساء وللمناسبات.
          </p>

          <ul className="mt-5 space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-oud">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            id="hero-cta"
            href="#order"
            className="mt-7 block rounded-lg bg-oud px-6 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-oud-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oud"
          >
            اطلب الآن
          </a>

          <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
            {reassurance.map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 text-muted"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
