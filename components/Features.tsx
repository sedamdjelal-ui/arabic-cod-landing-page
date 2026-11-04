import { product } from "@/lib/product";

// مكونات العطر كما تُكتب عادة: الافتتاحية ثم القلب ثم القاعدة.
const notes = [
  { stage: "الافتتاحية", hint: "أول 15 دقيقة", items: "هيل، برغموت" },
  { stage: "القلب", hint: "حتى 4 ساعات", items: "ياسمين، ورد" },
  { stage: "القاعدة", hint: "ما يبقى حتى المساء", items: "عنبر، خشب الصندل، مسك" },
];

const specs = [
  { label: "التركيز", value: product.type },
  { label: "الحجم", value: product.size },
  { label: "الثبات", value: "8 إلى 12 ساعة" },
  { label: "الفوحان", value: "متوسط" },
  { label: "في العلبة", value: "القارورة، وعيّنة 5 مل من عطر آخر" },
];

export default function Features() {
  return (
    <section className="bg-mist py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-xl font-bold">مكونات العطر</h2>
          <ol className="mt-5 space-y-4">
            {notes.map((note) => (
              <li
                key={note.stage}
                className="border-s-2 border-oud ps-4"
              >
                <p className="font-bold">
                  {note.stage}{" "}
                  <span className="text-sm font-normal text-muted">
                    ({note.hint})
                  </span>
                </p>
                <p className="mt-1 text-muted">{note.items}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold">تفاصيل المنتج</h2>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {specs.map((spec) => (
              <div key={spec.label} className="flex gap-4 py-3">
                <dt className="w-24 shrink-0 text-muted">{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
