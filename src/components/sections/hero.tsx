import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";
import CatModel from "../3d/cat";
import Easing from "../3d/easing";

const _animateProps ={
  hidden:{ opacity: 0, y: -30 },
  show:{
    opacity: 1,
    y: 0,
  },
}
// transition:{ duration: 1.5, ease: "easeInOut" }

const Hero = () => {
  return (
    <section id="hero" className="aspect-[16/9]">
      {/* Content Div  */}
      <motion.div initial={"hidden"} animate={"show"} variants={{show:{
        transition:{staggerChildren:0.3,duration: 1.5, ease: "easeInOut"},
      }}} className="w-full flex items-center flex-col h-[40vh]">
        <div className="mt-36 px-4 w-3/4">
          <motion.p  variants={_animateProps}  className="text-center text-pretty uppercase xl:text-3xl md:text-2xl sm:text-xl text-lg font-black text-white font-mono">
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
          </motion.p>
        </div>
        <div className="sm:mt-26 mt-12 px-4 w-4/5 md:w-1/2">
          <motion.p  variants={_animateProps} className="text-center text-pretty xl:text-2xl md:text-xl sm:text-lg text-base font-mono">
          I'm a Software Engineer driven by curiosity and a passion for crafting elegant, efficient.
          </motion.p>
        </div>
      </motion.div>

       {/* Background Image Div */}
       <div className="bg-cover bg-center h-[60vh] px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Easing>
              <CatModel
                position={[0, -1, 0]}
                // make scale x bigger so the cat is fatter LOL
                scale={[7, 6, 6]}
                rotation={[0, 0.25, 0]}
              />
            </Easing>
            <Environment preset="city" />
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
