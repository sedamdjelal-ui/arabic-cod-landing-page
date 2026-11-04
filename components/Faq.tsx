// أسئلة شائعة. نستعمل details/summary من HTML فلا نحتاج JavaScript لفتح الإجابات.
const questions = [
  {
    q: "هل يمكنني فتح الطرد قبل الدفع؟",
    a: "نعم. تفتح الطرد وتعاين القارورة أمام عامل التوصيل، ثم تدفع.",
  },
  {
    q: "ماذا لو لم يعجبني العطر عند المعاينة؟",
    a: "يمكنك رفض الطرد ولا تدفع ثمن العطر. إذا وصلك المنتج تالفاً نستبدله دون مقابل.",
  },
  {
    q: "متى يصل طلبي؟",
    a: "بعد مكالمة التأكيد: من 2 إلى 3 أيام في ولايات الشمال، وحتى 5 أيام في الجنوب.",
  },
  {
    q: "كيف أعرف أن طلبي تأكّد؟",
    a: "نتصل بك هاتفياً خلال 24 ساعة في أيام العمل. إذا لم نصل إليك نعيد المحاولة مرة ثانية قبل إلغاء الطلب.",
  },
  {
    q: "هل يمكنني تغيير العنوان بعد إرسال الطلب؟",
    a: "نعم، أخبرنا بالعنوان الجديد خلال مكالمة التأكيد.",
  },
];

export default function Faq() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <h2 className="text-xl font-bold">أسئلة شائعة</h2>
        <div className="mt-5 divide-y divide-line border-y border-line">
          {questions.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-7 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
