import DemoBanner from "@/components/DemoBanner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import OrderForm from "@/components/OrderForm";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <Features />
        <Pricing />
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
