import { motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      ref={ref}
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
         shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </motion.div>
  );
});

Circle.displayName = "Circle";

export default Circle;
