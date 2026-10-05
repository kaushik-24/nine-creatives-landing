import HeroBlueprint from "@/components/HeroBlueprint";
import ClientLogos from "@/components/ClientLogos";
import IntroStats from "@/components/IntroStats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { HomeClient } from "@/components/HomeClient";

export default function HomePage() {
  return (
    <>
      <HeroBlueprint />
      <ClientLogos />
      <IntroStats />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <HomeClient />
      <Footer />
    </>
  );
}
