import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import CatModel from "../3d/cat";
import Easing from "../3d/easing";

const Hero = () => {
  return (
    <section id="hero" className="h-screen">
      {/* Background Image Div */}
      <motion.div className="absolute inset-0 bg-cover bg-center  h-screen px-4 z-[30]">
        <Canvas>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <Easing>
            <CatModel
              position={[0, -2, 0]}
              // make scale x bigger so the cat is fatter LOL
              scale={[7, 6, 6]}
              rotation={[0, 0.25, 0]}
            />
          </Easing>

          <Environment preset="city" />
        </Canvas>
      </motion.div>

      {/* Content Div  */}
      <div className="absolute inset-0 w-full h-full flex items-center flex-col">
        <div className="md:mt-48 sm:mt-52 mt-52 px-4 w-3/4">
          <p className="text-center text-pretty uppercase xl:text-3xl md:text-2xl sm:text-xl text-lg font-black text-white font-mono">
            Hello, I am Sam{" "}
            <motion.span
              className="inline-block origin-[70%_70%]"
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              👋
            </motion.span>
          </p>
        </div>
        <div className="sm:mt-26 mt-12 px-4 w-1/2">
          <p className="text-center text-pretty xl:text-2xl md:text-xl sm:text-lg text-base font-mono">
            I am a Software Engineer with years of experience creating in
            developing robust, scalable applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
