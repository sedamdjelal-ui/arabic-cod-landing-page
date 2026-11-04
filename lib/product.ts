export const product = {
  brand: "دار مِسك",
  name: "ليالي القصبة",
  size: "100 مل",
  price: 4900,
  oldPrice: 6500,
};

// صور معرض المنتج. لتغيير صورة: ارفع ملفاً جديداً بنفس الاسم في public/gallery
// أو أضف سطراً جديداً هنا. الصور مربعة (1200×1200) بصيغة WebP.
export const gallery = [
  {
    src: "/gallery/bottle-square.webp",
    alt: "قارورة عطر ليالي القصبة الزجاجية المربعة",
  },
  {
    src: "/gallery/bottle-dropper.webp",
    alt: "قارورة زجاجية بقطّارة من مجموعة دار مِسك",
  },
  {
    src: "/perfume.svg",
    alt: "رسم توضيحي لقارورة ليالي القصبة",
  },
];

export function formatPrice(amount: number) {
  return `${amount.toLocaleString("en-US")} د.ج`;
}
