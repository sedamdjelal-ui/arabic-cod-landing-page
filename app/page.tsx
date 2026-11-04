import DemoBanner from "@/components/DemoBanner";
import Delivery from "@/components/Delivery";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OrderForm from "@/components/OrderForm";
import StickyOrderButton from "@/components/StickyOrderButton";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <main className="flex-1">
        <Hero />
        <Features />
        <Delivery />
        <Faq />
        <OrderForm />
      </main>
      <Footer />
      <StickyOrderButton />
    </>
  );
}
