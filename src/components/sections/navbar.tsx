import { Separator } from "@/components/ui/separator";
import { motion, MotionValue } from "framer-motion";

export interface Props {
  scaleX: MotionValue<number>;
}

const navbar = ({ scaleX }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="w-full h-20 z-50 sticky top-0 backdrop-blur-lg"
    >
      <nav className="w-full h-20 items-center flex py-2 px-1 md:py-4 md:px-2 font-mono text-lg justify-between border-b-2 border-x-white-500">
        <div className="flex h-5 items-center space-x-4 ">
          <a href="/">Sam Lee</a>
          <Separator
            orientation="vertical"
            className="bg-white hidden sm:block"
          />
          <span className="hidden sm:block">Software Engineer</span>
        </div>
        <div className="flex h-5 items-center space-x-4 ">
          <a href="/#about">About</a>
          <a href="/#works">Works</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>
      <div className="w-full h-2">
        <motion.div
          className="h-full via-purple-500 from-blue-500 bg-gradient-to-r progress-bar"
          style={{ scaleX }}
        />
      </div>
    </motion.div>
  );
};

export default navbar;
