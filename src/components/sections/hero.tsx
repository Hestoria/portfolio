import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="h-screen">
      {/* Background Image Div */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('3.webp')`,
          zIndex: -1, // Ensure it stays behind the content
          height: "100vh",
        }}
        initial={{
          opacity: 0,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
        animate={{
          opacity: 0.5,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          transition: {
            duration: 0.75,
            ease: "easeInOut",
          },
        }}
      />

      {/* Content Div  */}
      <div className="absolute inset-0 w-full h-full flex items-center flex-col">
        <div className="sm:mt-[18%] mt-[30%] px-4 w-3/4">
          <p className="text-center text-pretty uppercase xl:text-3xl md:text-2xl sm:text-xl text-lg font-medium text-white font-mono">
            my name todo: add init animation
          </p>
        </div>
        <div className="sm:mt-26 mt-12 px-4 w-3/4">
          <p className="text-center text-pretty xl:text-2xl md:text-xl sm:text-lg text-base font-mono">
            desc todo: add init animation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
