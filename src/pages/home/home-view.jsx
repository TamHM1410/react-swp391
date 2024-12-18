import { motion, useScroll, useSpring } from "framer-motion";
import Connect from "./connect";
import Hero from "./hero";
import Footer from "../../components/Footer";
import Services from "./service";
import CTA from "./CTA";
// HomeView component
import HomeCarousel from "./carousel";
const HomeView = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Hero />
      <Services/>
      <Connect/>
      <CTA/>
      {/* Thêm các nội dung khác như LoremIpsum */}
      {/* <HomeCarousel/> */}
      <Footer/>
    </>
  );
};

export default HomeView;