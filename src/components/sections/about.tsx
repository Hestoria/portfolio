import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { Canvas } from "@react-three/fiber";
import { useScroll, useTransform } from "framer-motion";
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
    <div ref={ref} className="relative h-[800vh]">
      <div className=" h-screen py-20 w-full top-0 sticky">
        <LayoutGrid s={selected} cards={cards} />
      </div>
    </div>
  );
};

export default about;

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: (
      <Suspense fallback={<div className="w-full text-center">Loading...</div>}>
        <Canvas>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} /> */}
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
    ),
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: (
      <Suspense fallback={<div className="w-full text-center">Loading...</div>}>
        <Canvas>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} /> */}
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
    ),
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: (
      <Suspense fallback={<div className="w-full text-center">Loading...</div>}>
        <Canvas>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} /> */}
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
    ),
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: (
      <Suspense fallback={<div className="w-full text-center">Loading...</div>}>
        <Canvas>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} /> */}
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
    ),
  },
];
