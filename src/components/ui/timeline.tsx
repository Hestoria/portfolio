"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { _flippingWords } from "../../lib/const";
import { FlipWords } from "./flip-words";

interface TimelineEntry {
  time: [string, string];
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const _calHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    _calHeight();
    window.addEventListener("resize", _calHeight);
    return () => window.removeEventListener("resize", _calHeight);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-neutral-950 font-sans px-4 lg:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-20">
        <h2 className="text-3xl lg:text-6xl mb-4 text-white max-w-4xl font-bold">
          Work Experiences
        </h2>
        <span className="text-neutral-300 text-xl lg:text-2xl max-w-xl">
          Here's a timeline of my 5 years journey as a <br />
          <FlipWords words={_flippingWords} />
        </span>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={`data${index}`}
            className="flex justify-start pt-10 lg:pt-40 lg:gap-10"
          >
            <div className="sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="h-10 absolute left-3 lg:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <div>
                {item.time.map((item, index) => {
                  return (
                    <p
                      key={`title${index}`}
                      className="hidden lg:block text-xl lg:pl-20 lg:text-3xl font-bold text-neutral-500 font-mono"
                    >
                      {item}
                      {index <= 0 && " -"}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="relative pl-20 pr-4 lg:pl-4 w-full md:max-w-[70%]">
              <h3 className="lg:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.time.join(" - ")}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute lg:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
