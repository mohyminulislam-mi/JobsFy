import Features from "@/components/pages/home/Features";
import Popular from "@/components/pages/home/Popular";
import HeroSection from "@/components/pages/home/HeroSection";
import TrustedCompanies from "@/components/pages/home/TrustedCompanies";
import Testimonials from "@/components/pages/home/Testimonials";
import PlatformStatistics from "@/components/pages/home/PlatformStatistics";
import FeaturedCompanies from "@/components/pages/home/FeaturedCompanies";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Hero Section ── */}
      <HeroSection />

      {/* ── Trusted Companies ── */}
      <TrustedCompanies />

      {/* ── Features Section ── */}
      <Features />

      {/* ── Popular Categories ── */}
      <Popular />

      {/* ── Platform Statistics (Animated Counters) ── */}
      <PlatformStatistics />

      {/* ── Featured Companies Section ── */}
      <FeaturedCompanies />

      {/* ── Testimonials ── */}
      <Testimonials />
    </div>
  );
};
export default Home;
