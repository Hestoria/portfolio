import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const about = () => {
  const aboutSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <section ref={aboutSectionRef} id="about" className="h-[300vh] relative">
      <div className="h-screen overflow-hidden top-0 sticky">
        <motion.div
          style={{ scale }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div
            className="relative w-[25vw] h-[25vh] bg-cover object-cover"
            style={{ backgroundImage: `url('1.webp')` }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default about;
