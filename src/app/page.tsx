import { HeroSection } from "@/components/HeroSection";
import IntroStats from "@/components/IntroStats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroStats />
      <Services />
      <Work />
      <StatsBar />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
