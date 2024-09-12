import { motion } from "framer-motion";
import { useState } from "react";

const LoadingBanner = () => {
  const [showBanners, setShowBanners] = useState(true);
  const containerVariants = {
    show: {
      display: showBanners ? "flex" : "none",
      transition: {
        staggerChildren: 0.2, // Adjust to match the desired stagger timing
      },
    },
  };

  const bannerVariants = {
    hidden: {
      y: 0,
    },
    show: {
      y: "100%",
      transition: { duration: 0.5 }, // Adjust to match the desired animation duration
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
      className="absolute top-0 left-0 w-full h-screen z-[60]"
    >
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            variants={bannerVariants}
            className="h-full w-1/6 bg-white"
          />
        ))}
    </motion.div>
  );
};

export default LoadingBanner;
