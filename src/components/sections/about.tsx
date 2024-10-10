import { Environment, PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import Badminton from "../../assets/badminton.webp";
import BS from "../../assets/badmintonsmash.webp";
import Cat from "../../assets/cats.webp";
import Coding from "../../assets/coding.jpg";
import GT3 from "../../assets/gt3.webp";
import CarModel from "../3d/car";
import CatsModel from "../3d/cats";
import Easing from "../3d/easing";
import PcModel from "../3d/pc";
import { LayoutGrid } from "../ui/layout-grid";

const about = () => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "80% end"],
  // });

  // const selected = useTransform(scrollYProgress, [0, 1], [1, 5.5]);

  return (
    <section id="about" className="">
      <h2 className="text-3xl lg:text-6xl mb-4 lg:px-10 text-white font-bold max-w-7xl px-4">
        About Me
      </h2>
      <div ref={ref} className="relative md:h-screen">
        <p className="w-full uppercase text-center py-8 md:text-3xl text-xl font-bold font-mono">
          I am always interested in ...
        </p>
        <div className="md:h-screen pt-20 md:py-20 w-full top-0 md:sticky">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default about;

const CarDream = () => {
  return (
    <div className="p-4 h-full w-full">
      <p className="font-bold md:text-4xl text-xl text-white">
        Driving the Dream
      </p>
      <div className="flex-grow h-4/5 w-full">
        <Suspense
          fallback={<div className="w-full h-full text-center">Loading...</div>}
        >
          <Canvas className="h-4/5 w-full">
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <CarModel position={[0, -1, 0]} scale={[1.75, 1.75, 1.75]} />
            <Environment preset="city" />
          </Canvas>
        </Suspense>
      </div>
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
    <div className="p-4 h-full w-full flex flex-col">
      <p className="font-bold md:text-4xl text-xl text-white text-left">
        Smash on the Court
      </p>
      <div className="flex justify-center my-4 max-h-[60%]">
        <motion.img
          src={BS}
          alt="A badminton player smashing the shuttlecock"
          className="max-w-full h-auto"
        />
      </div>
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
            <CatsModel
              position={[0, 0, 0]}
              // make scale x bigger so the cat is fatter LOL
              scale={0.35}
              rotation={[0, -1.5, -0.5]}
            />
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
    <div className="p-4 h-full w-full">
      <p className="font-bold md:text-4xl text-xl text-white">
        Coding Serenity
      </p>
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

            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Easing>
              <PcModel
                position={[0, -2, 0]}
                // make scale x bigger so the cat is fatter LOL
                scale={5}
                rotation={[0, Math.PI, 0]}
              />
            </Easing>
            <Environment preset="city" />
          </Canvas>
        </Suspense>
      </div>
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
    thumbnail: GT3,
  },
  {
    id: 2,
    content: <BadmintonBliss />,
    className: "col-span-1",
    thumbnail: Badminton,
  },
  {
    id: 3,
    content: <CatComfort />,
    className: "col-span-1",
    thumbnail: Cat,
  },
  {
    id: 4,
    content: <CodingCalm />,
    className: "md:col-span-2",
    thumbnail: Coding,
  },
];
