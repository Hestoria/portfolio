import { motion, MotionValue } from "framer-motion";
import { Separator } from "../components/ui/separator";

type Props = {
  scaleX: MotionValue<number>;
};

const navbar = ({ scaleX }: Props) => {
  return (
    <div className="w-full h-12 md:h-20 z-50 sticky top-0 backdrop-blur-lg">
      <nav className="w-full h-12 md:h-20 items-center flex py-2 px-1 md:py-4 md:px-2 font-mono text-lg justify-between">
        <div className="flex h-5 items-center space-x-4 ">
          <a href="/">Sam Lee</a>
          <Separator orientation="vertical" className="bg-white" />
          <span>Software Engineer</span>
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
    </div>
  );
};

export default navbar;
