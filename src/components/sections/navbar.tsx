import { Separator } from "@/components/ui/separator";
import { motion, MotionValue } from "framer-motion";

export interface Props {
  scaleX: MotionValue<number>;
}

const _hoverAnimation = {
  scale: 1.2,
  transition: {
    ease: "easeInOut",
  },
};

const navbar = ({ scaleX }: Props) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="w-full h-20 z-50 fixed top-0 backdrop-blur-lg"
    >
      <nav className="w-full h-14 md:h-20 items-center flex py-2 px-1 md:py-4 md:px-2 font-mono text-lg justify-between border-b-2 border-x-white-500">
        <div className="flex h-5 items-center space-x-4 ">
          <motion.a whileHover={_hoverAnimation} href="#hero">
            Sam Lee
          </motion.a>
          <Separator
            orientation="vertical"
            className="bg-white hidden sm:block"
          />
          <span className="hidden sm:block">Software Engineer</span>
        </div>
        <div className="flex h-5 items-center space-x-4 ">
          <motion.a whileHover={_hoverAnimation} href="#about">
            About
          </motion.a>
          <motion.a whileHover={_hoverAnimation} href="#skills">
            Skills
          </motion.a>
          <motion.a whileHover={_hoverAnimation} href="#works">
            Works
          </motion.a>
          {/* <a href=" #contact">Contact</a> */}
        </div>
      </nav>
      <div className="w-full h-2">
        <motion.div
          className="h-full via-orange-500 from-yellow-300 bg-gradient-to-r progress-bar"
          style={{ scaleX }}
        />
      </div>
    </motion.nav>
  );
};

export default navbar;
