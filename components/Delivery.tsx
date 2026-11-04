// قسم "كيف يصلك طلبك": خطوات الطلب بالترتيب، ثم معلومات التوصيل.
const steps = [
  {
    title: "املأ النموذج",
    text: "الاسم ورقم الهاتف والعنوان. لا يستغرق أكثر من دقيقة.",
  },
  {
    title: "نتصل بك للتأكيد",
    text: "خلال 24 ساعة في أيام العمل، لنتأكد من العنوان وموعد التوصيل.",
  },
  {
    title: "تستلم ثم تدفع",
    text: "تفتح الطرد وتعاينه أمام عامل التوصيل، ثم تدفع نقداً.",
  },
];

const deliveryInfo = [
  { label: "التغطية", value: "كل الولايات" },
  { label: "المدة", value: "من 2 إلى 3 أيام في الشمال، وحتى 5 أيام في الجنوب" },
  { label: "الاستلام", value: "في المنزل أو من مكتب شركة التوصيل" },
  { label: "السعر", value: "حسب الولاية، ويظهر في النموذج قبل التأكيد" },
  { label: "الاستبدال", value: "إذا وصلك المنتج تالفاً نستبدله دون مقابل" },
];

export default function Delivery() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-xl font-bold">كيف يصلك طلبك</h2>
          <ol className="mt-5 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink text-sm font-bold"
                >
                  {index + 1}
                </span>
                <div>
                  <p className="font-bold">{step.title}</p>
                  <p className="mt-1 text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold">معلومات التوصيل</h2>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {deliveryInfo.map((item) => (
              <div key={item.label} className="flex gap-4 py-3">
                <dt className="w-24 shrink-0 text-muted">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
