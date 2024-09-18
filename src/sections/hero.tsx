import { motion } from "framer-motion";
import BoxReveal from "../components/ui/box-reveal";

const Hero = () => {
  return (
    <motion.div
      id="hero"
      className="relative bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 0.85,
      }}
      transition={{ delay: 0.5, duration: 3.5, ease: "easeInOut" }}
      style={{
        height: "calc(100vh - 80px)",
        backgroundImage: `url('bg1.jpg')`,
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="sm:mt-36 mt-20 px-4 w-full">
          <BoxReveal delay={1.5} className="mx-auto">
            <p className="text-pretty uppercase xl:text-3xl md:text-2xl sm:text-xl text-lg font-medium text-white font-mono">
              Hi, I am sam.
            </p>
          </BoxReveal>
        </div>
        <div className="sm:mt-26 mt-12 px-4 w-full">
          <BoxReveal delay={2} className="mx-auto">
            <p className="text-pretty xl:text-2xl md:text-xl sm:text-lg text-base font-mono">
              content content content content content content content
            </p>
          </BoxReveal>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
