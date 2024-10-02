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

const _animateProps = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
  },
};
// transition:{ duration: 1.5, ease: "easeInOut" }

const Hero = () => {
  return (
    <section id="hero" className="aspect-[16/9] relative">
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.3,
              duration: 1.5,
              ease: "easeInOut",
            },
          },
        }}
        className="w-full flex items-center flex-col h-[40vh]"
      >
        <div className="mt-36 px-4 w-3/4">
          <motion.p
            variants={_animateProps}
            className="text-center text-pretty uppercase xl:text-3xl md:text-2xl sm:text-xl text-lg font-black text-white font-mono"
          >
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
          <motion.p
            variants={_animateProps}
            className="text-center text-pretty xl:text-2xl md:text-xl sm:text-lg text-base font-mono"
          >
            I am a Software Engineer motivated by curiosity and committed to
            designing sleek and effective solutions.
          </motion.p>
        </div>
      </motion.div>

      <div className="bg-cover bg-center h-[60vh] px-4">
        <Suspense
          fallback={<div className="w-full text-center">Loading...</div>}
        >
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

      {/* <motion.div
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        animate={{
          translateY: [0, 6, -3, 8, -2, 4, 0],
        }}
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-6 "
      >
        Start Scrolling
      </motion.div> */}
    </section>
  );
};

export default Hero;
