"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import React, { ReactNode, useState } from "react";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: ReactNode;
};

export const LayoutGrid = ({
  cards,
  s,
}: {
  cards: Card[];
  s: MotionValue<number>;
}) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const [cop, setCop] = useState<boolean>(false);

  useMotionValueEvent(s, "change", (v) => {
    if (v == 1) {
      setCop(false);
    } else if (v == 5.5) {
      setCop(true);
    }
    if (v >= 5.5 || v < 2) {
      handleOutsideClick();
    } else if (v >= 5) {
      handleClick(cards[3]);
    } else if (v >= 4) {
      handleClick(cards[2]);
    } else if (v >= 3) {
      handleClick(cards[1]);
    } else if (v >= 2) {
      handleClick(cards[0]);
    }
  });

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <motion.div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => {
              if (cop) {
                handleClick(card);
              }
            }}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
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
          if (cop) {
            handleOutsideClick();
          }
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
  return <motion.div>{card.thumbnail}</motion.div>;
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
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
