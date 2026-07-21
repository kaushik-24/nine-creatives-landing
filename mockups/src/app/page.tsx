import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ShowcaseDark from "@/components/ShowcaseDark";
import Approach from "@/components/Approach";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <ShowcaseDark />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
