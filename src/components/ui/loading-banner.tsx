import * as faBrands from "@styled-icons/fa-brands";
import * as simpleIcons from "@styled-icons/simple-icons";
import { motion } from "framer-motion";
import { PageState } from "../../App";
import { shuffleArray } from "../../lib/utils";

type Icons = typeof simpleIcons.Typescript;

const _col = 4;

const techHighLight = (() => {
  const a: Icons[][] = [];
  const _ = shuffleArray([
    simpleIcons.Typescript,
    simpleIcons.ReactLogo,
    simpleIcons.Tailwindcss,
    simpleIcons.Cplusplus,
    simpleIcons.Qt,
    simpleIcons.Csharp,
    simpleIcons.Dotnet,
    simpleIcons.Nuget,
    simpleIcons.Redux,
    simpleIcons.Tauri,
    faBrands.Rust,
    faBrands.Android,
  ]);
  const _row = _.length / _col;

  for (let i = 0; i < _col; i++) {
    a.push(_.slice(i * _row, i * _row + _row));
  }
  return a;
})();

export interface Props {
  setPageState: React.Dispatch<React.SetStateAction<PageState>>;
  closeDelay?: number;
}

const _transition = {
  staggerChildren: 0.35,
};

const containerVariants = {
  show: {
    transition: {
      delayChildren: 0.75,
      ..._transition,
      delay: 0.5,
    },
  },
  exit: {
    transition: _transition,
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

const bannerIconsVariants = {
  hidden: { opacity: 0, y: -50 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      delay: 1.8 + index * 0.55,
    },
  }),
};

const LoadingBanner = ({ setPageState, closeDelay }: Props) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => {
        setTimeout(() => {
          setPageState(PageState.INIT_EXITING);
        }, closeDelay ?? 1000);
      }}
      className="w-full flex h-screen z-[60] overflow-hidden"
    >
      {techHighLight.map((row, index) => (
        <motion.div
          key={index}
          variants={bannerVariants}
          className="h-full w-1/4 grid place-items-center"
        >
          <motion.div className="h-4/5 w-full grid grid-cols-1 gap-8">
            {row.map((Logo, i) => (
              <motion.div
                custom={index + i}
                className="h-1/3 w-1/3 grid m-auto"
                variants={bannerIconsVariants}
                initial="hidden"
                animate="show"
                key={`l${i}`}
              >
                <Logo className="m-auto" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LoadingBanner;
