import { HeroSection } from "./components/HeroSection";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <main>
        <HeroSection />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
