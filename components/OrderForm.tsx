"use client";

import { useState } from "react";
import { formatPrice, product } from "@/lib/product";
import { wilayas } from "@/lib/wilayas";

// Algerian mobile numbers: 05 / 06 / 07 followed by 8 digits.
const PHONE_PATTERN = /^0[567]\d{8}$/;

const fieldClass =
  "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-muted/60 focus:border-oud focus:ring-2 focus:ring-oud/20";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Demo only: nothing is sent anywhere, we just show a confirmation.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!PHONE_PATTERN.test(phone.replace(/\s/g, ""))) {
      setPhoneError("أدخل رقم هاتف صحيحًا من 10 أرقام يبدأ بـ 05 أو 06 أو 07.");
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  }

  function reset() {
    setName("");
    setPhone("");
    setWilaya("");
    setSubmitted(false);
  }

  return (
    <section id="order" className="bg-mist px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold">اطلب الآن</h2>
        <p className="mt-2 text-muted">
          املأ النموذج وسنتصل بك لتأكيد الطلب. الدفع عند الاستلام.
        </p>

        <div className="mt-6 rounded-lg border border-line bg-white p-5 sm:p-8">
          {submitted ? (
            <div role="status" className="py-6 text-center">
              <p className="text-xl font-bold">
                شكرًا لك يا {name.trim()}!
              </p>
              <p className="mt-3 leading-7 text-muted">
                سجّلنا طلبك إلى ولاية {wilaya}، وسنتصل بك على الرقم{" "}
                <span dir="ltr">{phone}</span> لتأكيده.
              </p>
              <p className="mt-3 text-sm text-muted">
                (هذا عرض تجريبي: لم تُرسل أي بيانات.)
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 rounded-lg border border-line px-6 py-2.5 font-medium hover:border-ink"
              >
                طلب جديد
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block font-medium">
                الاسم الكامل
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="مثال: أمينة بن علي"
                  className={fieldClass}
                />
              </label>

              <label className="block font-medium">
                رقم الهاتف
                <input
                  type="tel"
                  name="phone"
                  required
                  inputMode="numeric"
                  autoComplete="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="0550 12 34 56"
                  aria-invalid={phoneError ? true : undefined}
                  aria-describedby={phoneError ? "phone-error" : undefined}
                  className={`${fieldClass} text-end`}
                />
                {phoneError && (
                  <span
                    id="phone-error"
                    role="alert"
                    className="mt-2 block text-sm font-normal text-red-700"
                  >
                    {phoneError}
                  </span>
                )}
              </label>

              <label className="block font-medium">
                الولاية
                <select
                  name="wilaya"
                  required
                  value={wilaya}
                  onChange={(event) => setWilaya(event.target.value)}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    اختر ولايتك
                  </option>
                  {wilayas.map((item, index) => (
                    <option key={item} value={item}>
                      {String(index + 1).padStart(2, "0")} - {item}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg bg-oud px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-oud-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oud"
              >
                تأكيد الطلب ({formatPrice(product.price)})
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
