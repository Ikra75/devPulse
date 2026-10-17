/*import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#070B18] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}*/
import Header from "../sections/header";
import Hero from "../sections/hero";
import Features from "../sections/features";
import DashboardPreview from "../sections/dashboardpreview";
import HowItWorks from "../sections/howitworks";
import Testimonials from "../sections/testimonials";
import CTA from "../sections/cta";
import Footer from "../sections/footer";
import Background from "../effects/background";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-950 text-white">
      <Header />
      <Hero />
      <Features />
      <DashboardPreview />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
      <Background />
    </main>
  );
}