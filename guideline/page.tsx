import ScrollSpine from "@/components/ScrollSpine";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Swap in your existing <Hero /> and <Nav /> components here —
// #page-root must wrap everything, since ScrollSpine measures
// scroll progress against its full height.
export default function Home() {
  return (
    <main id="page-root" className="relative">
      <ScrollSpine />

      {/* <Nav /> */}
      {/* <Hero /> */}

      <Problem />
      <Services />
      <Work />
      <Process />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
