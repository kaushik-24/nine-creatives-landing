import { HeroSection } from "@/components/HeroSection";
import IntroStats from "@/components/IntroStats";
import Services from "@/components/Services";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { HomeClient } from "@/components/HomeClient";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroStats />
      <Services />
      <StatsBar />
      <About />
      <Testimonials />
      <HomeClient />
      <Footer />
    </>
  );
}
