// شريط ثابت أعلى الصفحة يوضّح أن الصفحة تجريبية.
export default function DemoBanner() {
  return (
    <div
      role="note"
      className="sticky top-0 z-50 bg-ink px-4 py-2 text-center text-xs leading-6 text-cream sm:text-sm"
    >
      <span className="font-bold text-gold-soft">صفحة تجريبية</span> · العلامة
      والمنتج افتراضيان ولا تُحفظ أي بيانات · تصميم وتطوير{" "}
      <a
        href="https://www.djellalco.com"
        target="_blank"
        rel="noopener"
        className="font-bold underline underline-offset-4 hover:text-gold-soft"
      >
        Djellal Design Studio
      </a>
    </div>
  );
}
