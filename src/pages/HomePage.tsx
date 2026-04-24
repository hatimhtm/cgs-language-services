import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import Languages from "../components/Languages";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import Universities from "../components/Universities";
import CTA from "../components/CTA";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <TrustStrip />
      <Services />
      <Universities />
      <Languages />
      <Process />
      <WhyUs />
      <CTA />
    </PageTransition>
  );
}
