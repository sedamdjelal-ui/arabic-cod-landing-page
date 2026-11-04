"use client";

import { useState } from "react";
import {
  deliveryMethods,
  deliveryPrice,
  type DeliveryMethod,
} from "@/lib/delivery";
import { formatPrice, product } from "@/lib/product";
import { wilayas } from "@/lib/wilayas";

// أرقام الهاتف النقال الجزائرية: 05 أو 06 أو 07 ثم 8 أرقام.
const PHONE_PATTERN = /^0[567]\d{8}$/;
const MAX_QUANTITY = 3;

const fieldClass =
  "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-muted/60 focus:border-oud focus:ring-2 focus:ring-oud/20";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState(""); // رمز الولاية كنص، مثلاً "39"
  const [commune, setCommune] = useState("");
  const [address, setAddress] = useState("");
  const [method, setMethod] = useState<DeliveryMethod>("home");
  const [quantity, setQuantity] = useState(1);
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const wilayaCode = Number(wilaya);
  const wilayaName = wilayaCode ? wilayas[wilayaCode - 1] : "";
  const subtotal = product.price * quantity;
  const shipping = wilayaCode ? deliveryPrice(wilayaCode, method) : null;
  const total = subtotal + (shipping ?? 0);

  // عرض تجريبي فقط: لا يُرسل أي شيء إلى أي خادم، نعرض رسالة التأكيد فقط.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!PHONE_PATTERN.test(phone.replace(/\s/g, ""))) {
      setPhoneError("أدخل رقم هاتف من 10 أرقام يبدأ بـ 05 أو 06 أو 07.");
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  }

  function reset() {
    setName("");
    setPhone("");
    setWilaya("");
    setCommune("");
    setAddress("");
    setMethod("home");
    setQuantity(1);
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
            <div role="status" className="py-4">
              <p className="text-xl font-bold">شكراً لك يا {name.trim()}!</p>
              <p className="mt-3 leading-7 text-muted">
                وصل طلبك ({quantity} × {product.name}) إلى {commune.trim()}،
                ولاية {wilayaName}. سنتصل بك على الرقم{" "}
                <span dir="ltr">{phone}</span> لتأكيده، والمبلغ عند الاستلام{" "}
                {formatPrice(total)}.
              </p>
              <p className="mt-4 rounded-lg bg-mist p-3 text-sm text-muted">
                هذه صفحة تجريبية: لم يُرسل طلبك ولم تُحفظ بياناتك.
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

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block font-medium">
                  الولاية
                  <span className="relative block">
                    <select
                      name="wilaya"
                      required
                      value={wilaya}
                      onChange={(event) => setWilaya(event.target.value)}
                      className={`${fieldClass} appearance-none pe-10`}
                    >
                      <option value="" disabled>
                        اختر ولايتك
                      </option>
                      {wilayas.map((item, index) => (
                        <option key={item} value={index + 1}>
                          {String(index + 1).padStart(2, "0")} - {item}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="pointer-events-none absolute end-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-muted"
                      aria-hidden="true"
                    >
                      <path d="M5.2 7.2a.75.75 0 0 1 1.06 0L10 10.94l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.26a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </span>
                </label>

                <label className="block font-medium">
                  البلدية
                  <input
                    type="text"
                    name="commune"
                    required
                    autoComplete="address-level2"
                    value={commune}
                    onChange={(event) => setCommune(event.target.value)}
                    placeholder="مثال: باب الوادي"
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="block font-medium">
                العنوان
                <input
                  type="text"
                  name="address"
                  required
                  autoComplete="street-address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="الحي، الشارع، رقم المنزل"
                  className={fieldClass}
                />
              </label>

              <fieldset>
                <legend className="font-medium">طريقة الاستلام</legend>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {deliveryMethods.map((option) => (
                    <label
                      key={option.value}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-line px-4 py-3 has-[:checked]:border-oud has-[:checked]:bg-oud/5 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-oud/20"
                    >
                      <input
                        type="radio"
                        name="method"
                        value={option.value}
                        checked={method === option.value}
                        onChange={() => setMethod(option.value)}
                        className="accent-oud"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="flex items-center justify-between">
                <span className="font-medium" id="quantity-label">
                  الكمية
                </span>
                <div
                  className="flex items-center rounded-lg border border-line"
                  role="group"
                  aria-labelledby="quantity-label"
                >
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(q + 1, MAX_QUANTITY))}
                    disabled={quantity >= MAX_QUANTITY}
                    aria-label="زيادة الكمية"
                    className="h-11 w-11 text-xl disabled:text-line"
                  >
                    +
                  </button>
                  <span className="w-8 text-center font-bold" aria-live="polite">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                    disabled={quantity <= 1}
                    aria-label="إنقاص الكمية"
                    className="h-11 w-11 text-xl disabled:text-line"
                  >
                    −
                  </button>
                </div>
              </div>

              <dl className="space-y-2 border-t border-line pt-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">
                    المنتج ({quantity} × {formatPrice(product.price)})
                  </dt>
                  <dd>{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">التوصيل</dt>
                  <dd>
                    {shipping === null ? "اختر الولاية" : formatPrice(shipping)}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-line pt-3 text-base font-bold">
                  <dt>المجموع</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
              </dl>

              <button
                type="submit"
                className="w-full rounded-lg bg-oud px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-oud-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oud"
              >
                تأكيد الطلب ({formatPrice(total)})
              </button>
              <p className="text-center text-xs text-muted">
                صفحة تجريبية: لا يُرسل هذا النموذج أي بيانات.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
