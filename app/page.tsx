import DemoBanner from "@/components/DemoBanner";
import Delivery from "@/components/Delivery";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <main className="flex-1">
        <Hero />
        <Features />
        <Delivery />
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
