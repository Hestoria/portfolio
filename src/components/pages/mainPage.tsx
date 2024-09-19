import Sections from "../sections";
import { useSpring, useScroll } from "framer-motion";

type Props = {};

const mainPage = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <Sections.Navbar scaleX={scaleX} />
      <Sections.Hero />
      <Sections.About />
      <Sections.WorkExperience />
      <Sections.Contact />
      <Sections.Footer />
    </div>
  );
};

export default mainPage;
