import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      animate("#hero-bg", { opacity: 1 }, { duration: 1.5 });
    }
  }, [inView]);

  return (
    <motion.div
      ref={scope}
      id="hero"
      className="relative"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <motion.div
        id="hero-bg"
        initial={{ opacity: 0 }}
        className="h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('bg1.jpg')`,
        }}
      />
    </motion.div>
  );
};

export default Hero;
