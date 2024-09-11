import Sections from "@/sections";
import { useScroll, useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative">
      <Sections.Navbar scaleX={scaleX} />
      <Sections.Hero />
      <Sections.About />
      <Sections.WorkExperience />
      <Sections.Contact />
      <Sections.Footer />
    </main>
  );
};

export default App;
