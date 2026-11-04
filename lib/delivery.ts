import { southCodes } from "@/lib/wilayas";

// أسعار توصيل تجريبية بالدينار. عند العمل لعميل حقيقي تُستبدل بأسعار شركة التوصيل التي يتعامل معها.
export const deliveryPrices = {
  north: { home: 600, desk: 400 },
  south: { home: 1000, desk: 700 },
};

export type DeliveryMethod = "home" | "desk";

export const deliveryMethods: { value: DeliveryMethod; label: string }[] = [
  { value: "home", label: "المنزل" },
  { value: "desk", label: "مكتب التوصيل" },
];

// يرجع سعر التوصيل حسب رمز الولاية وطريقة الاستلام.
export function deliveryPrice(wilayaCode: number, method: DeliveryMethod) {
  const zone = southCodes.has(wilayaCode) ? "south" : "north";
  return deliveryPrices[zone][method];
}
