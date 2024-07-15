
import BestSelling from "./BestSelling/BestSelling";
import CategoryTab from "./Category/CategoryTab";
import FAQs from "./FAQ/FAQs";
import Featured from "./Featured/Featured";
import HeroSection from "./HeroSection/HeroSection";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  

  return (
      <>
      <HeroSection/>
      <BestSelling />
      <CategoryTab/>
      <Featured/>
      <Testimonials/>
      <FAQs/>
      </>
  );
};

export default Home;