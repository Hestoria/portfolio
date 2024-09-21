
import { motion } from "framer-motion";


export interface Props {
  setInit: React.Dispatch<React.SetStateAction<boolean>>;
  closeDelay?: number;
}
// TODO: better format
const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.75,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const bannerVariants = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: "0",
    transition: {
      ease: [0.35, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
  exit: {
    y: "100%",
    transition: {
      ease: [0.35, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
};

const bannerTitleVariants = {
  hidden: { opacity: 0, y: -25 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, delay: 2 + index * 0.5 },
  }),
};

const LoadingBanner = ({ setInit, closeDelay }: Props) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => {
        setTimeout(() => {
          setInit(false);
        }, closeDelay ?? 200);
      }}
      className="w-full flex h-screen z-[60] overflow-hidden"
    >
      {[].map((Logo, index) => (
        <motion.div
          key={index}
          variants={bannerVariants}
          className="h-full w-1/5 backdrop-blur-sm justify-center flex flex-col items-center"
        >
          {/* <Logo className="px-5" /> */}
          <motion.p
            custom={index}
            variants={bannerTitleVariants}
            initial="hidden"
            animate="show"
            className="text-xl"
          >
            short desc
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LoadingBanner;
