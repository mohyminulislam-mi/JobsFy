import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import PopularCategories from "@/components/Home/PopularCategories";
import TrustedCompanies from "@/components/Home/TrustedCompanies";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Features />
      <PopularCategories />
    </>
  );
};
export default Home;
