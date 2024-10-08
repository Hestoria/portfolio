import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, useRef } from "react";
import CatModel from "../3d/cat";
import Easing from "../3d/easing";
import { LayoutGrid } from "../ui/layout-grid";

const about = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "80% end"],
  });

  const selected = useTransform(scrollYProgress, [0, 1], [1, 5.5]);

  return (
    <section id="#about" className="">
      <h2 className="text-3xl lg:text-6xl mb-4 lg:px-10 text-white font-bold max-w-7xl px-4">
        About Me
      </h2>
      <div ref={ref} className="relative md:h-[800vh]">
        <div className="md:h-screen pt-20 md:py-20 w-full top-0 md:sticky">
          <p className="w-full uppercase text-center py-8 md:text-3xl text-xl font-bold font-mono">
            I am always interested in
          </p>
          <LayoutGrid s={selected} cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default about;

const CarDream = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Driving the Dream
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience the thrill of the open road with a car that combines power,
        performance, and style. Every drive becomes a journey of excitement and
        freedom.
      </p>
    </div>
  );
};

const BadmintonBliss = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Smash on the Court
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A game of badminton is more than just sport—it’s strategy, agility, and
        the pure satisfaction of landing the perfect smash. Play your best, and
        the game is yours.
      </p>
    </div>
  );
};

const CatComfort = () => {
  return (
    <div className="p-4 h-full w-full">
      <p className="font-bold md:text-4xl text-xl text-white">Cat in Comfort</p>
      <div className="flex-grow h-4/5 w-full">
        <Suspense
          fallback={<div className="w-full h-full text-center">Loading...</div>}
        >
          <Canvas className="h-4/5 w-full">
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
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
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Whether it’s lounging in the sun or exploring every corner of the house,
        this cat knows how to live life with a perfect mix of curiosity and
        calm.
      </p>
    </div>
  );
};

const CodingCalm = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Coding Serenity
      </p>
      <Suspense
        fallback={<div className="w-full h-full text-center">Loading...</div>}
      >
        <Canvas
          className="h-screen w-full"
          style={{
            height: "100%",
          }}
        >
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
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
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        In the world of code, logic and creativity blend seamlessly. Whether
        debugging or building, there’s a unique calm that comes from seeing your
        ideas take shape, one line at a time.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <CarDream />,
    className: "md:col-span-2",
    thumbnail: <motion.img src="1.webp" />,
  },
  {
    id: 2,
    content: <BadmintonBliss />,
    className: "col-span-1",
    thumbnail: <motion.img src="1.webp" />,
  },
  {
    id: 3,
    content: <CatComfort />,
    className: "col-span-1",
    thumbnail: <motion.img src="1.webp" />,
  },
  {
    id: 4,
    content: <CodingCalm />,
    className: "md:col-span-2",
    thumbnail: <motion.img src="1.webp" />,
  },
];
