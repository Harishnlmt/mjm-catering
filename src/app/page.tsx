import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Gallery = dynamic(() => import("@/components/Gallery"));

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <MenuSection />
      <Testimonials />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
