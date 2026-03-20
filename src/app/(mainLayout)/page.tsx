import FeaturedJobs from "@/components/Home/FeaturedJobs";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import PopularCategories from "@/components/Home/PopularCategories";
import Testimonials from "@/components/Home/Testimonials";
import TrustedCompanies from "@/components/Home/TrustedCompanies";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Features />
      <PopularCategories />
      <FeaturedJobs />
      <Testimonials />
    </>
  );
};
export default Home;
