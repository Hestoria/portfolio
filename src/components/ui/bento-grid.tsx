import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const _animateProps = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const ref = useRef(null);

  // Use useInView to check if the component is in the viewport
  const inView = useInView(ref, { once: true }); // Trigger the animation only once

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
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode | string[];
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={_animateProps}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-300">
          {Array.isArray(description) ? (
            description.map((d, i) => <p key={`desc${i}`}>{d}</p>)
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
