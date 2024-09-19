import { motion } from "framer-motion";

export interface Props {
  setInit: React.Dispatch<React.SetStateAction<boolean>>;
  closeDelay?: number
}

const LoadingBanner = ({ setInit, closeDelay }: Props) => {
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const bannerVariants = {
    hidden: {
      y: 0,
    },
    show: {
      y: "100%",
      transition: {
        ease: [0.35, 0.01, -0.05, 0.95],
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      onAnimationComplete={() => {
        setTimeout(() => {
          setInit(false);
        }, closeDelay ?? 1500)
      }}
      className="w-full flex h-screen z-[60] overflow-hidden"
    >
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            variants={bannerVariants}
            className="h-full w-1/5 backdrop-blur-sm"
          />
        ))}
    </motion.div>
  );
};

export default LoadingBanner;
