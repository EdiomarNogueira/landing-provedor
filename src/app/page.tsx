// import { Benefits } from "@/components/Benefits";
// import { Coverage } from "@/components/Coverage";
// import { Faq } from "@/components/Faq";
// import { Footer } from "@/components/Footer";

import { AboutCompanySection } from "../components/AboutCompanySection";
import { BenefitsSection } from "../components/BenefitsSection";
import { ContactSection } from "../components/ContactSection";
import { CoverageSearch } from "../components/CoverageAreas";
import { CustomerPortalSection } from "../components/CustomerPortalSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { HeroInternet } from "../components/HeroInternet";
import { PlansSection } from "../components/PlansSection";
import { PromotionsSection } from "../components/PromotionsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />

      <main>
        <HeroInternet />
        <CoverageSearch />
        <PlansSection />
        <PromotionsSection />

        <BenefitsSection />
        <AboutCompanySection/>
        <CustomerPortalSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      {/* <Footer /> */}
    </div>
  );
}