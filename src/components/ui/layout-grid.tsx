"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

const _animateProps = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
  },
};

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({
  cards,
}: // s,
{
  cards: Card[];
  // s: MotionValue<number>;
}) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger the animation only once

  // const [cop, setCop] = useState<boolean>(true);

  // useMotionValueEvent(s, "change", (v) => {
  //   if (v == 1) {
  //     setCop(false);
  //   } else if (v == 5.5) {
  //     setCop(true);
  //   }
  //   if (v >= 5.5 || v < 2) {
  //     handleOutsideClick();
  //   } else if (v >= 5) {
  //     handleClick(cards[3]);
  //   } else if (v >= 4) {
  //     handleClick(cards[2]);
  //   } else if (v >= 3) {
  //     handleClick(cards[1]);
  //   } else if (v >= 2) {
  //     handleClick(cards[0]);
  //   }
  // });

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={inView ? "show" : "hidden"}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.3,
            duration: 1.5,
            ease: "easeInOut",
          },
        },
      }}
      className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative"
    >
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className)}>
          <motion.div
            variants={_animateProps}
            onClick={() => {
              if (!selected) {
                handleClick(card);
              } else {
                handleOutsideClick();
              }
              // if (cop) {
              // }
            }}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-full md:h-4/5 w-full md:w-4/5 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={() => {
          handleOutsideClick();
        }}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </motion.div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      className="h-full w-full object-cover cursor-pointer"
      src={card.thumbnail ?? ""}
      alt={card.thumbnail}
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70] h-full"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
