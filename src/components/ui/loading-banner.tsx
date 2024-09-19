import { motion } from "framer-motion";

export interface Props {
  showBanners: boolean;
  setShowBanners: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingBanner = ({ showBanners, setShowBanners }: Props) => {
  const containerVariants = {
    show: {
      display: showBanners ? "flex" : "none",
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
        duration: 1.6,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      onAnimationComplete={() => {
        setShowBanners(false);
      }}
      className="w-full h-screen z-[60] overflow-hidden"
    >
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            variants={bannerVariants}
            className="h-full w-1/5 bg-white"
          />
        ))}
    </motion.div>
  );
};

export default LoadingBanner;
