import { motion, useScroll, useSpring } from "framer-motion";
import Sections from "../sections";

const mainPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div>
      <Sections.Navbar scaleX={scaleX} />
      <Sections.Hero />
      <Sections.About />
      <Sections.Skills />
      <Sections.WorkExperience />
      <Sections.Contact />
      <Sections.Footer />
    </motion.div>
  );
};

export default mainPage;
