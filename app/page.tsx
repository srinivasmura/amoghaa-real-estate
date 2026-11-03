import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LocalitySection from "@/components/sections/LocalitySection";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import ValueSection from "@/components/sections/ValueSection";
import InsightSection from "@/components/sections/InsightSection";
import ContactSection from "@/components/sections/ContactSection";
import GuidanceStrip from "@/components/GuidanceStrip";
import SuccessStoriesAndReviews from "@/components/sections/SuccessStoriesAndReviews";
import AboutAmoghaa from "@/components/sections/AboutAmoghaa";
import HomeScrollReveal from "@/components/HomeScrollReveal";

export default function HomePage() {
  return (
    <>
      <HomeScrollReveal />
      <Header />
      <main>
        <HeroSection />
        <section className="trust-strip" aria-label="Amoghaa benefits">
          <div className="container trust-inner">
            <GuidanceStrip />
          </div>
        </section>
        <AboutAmoghaa />
        <LocalitySection />
        <FeaturedProperties />
        <ValueSection />
        <InsightSection />
        <SuccessStoriesAndReviews />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
