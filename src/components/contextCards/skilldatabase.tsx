import { Mongodb, Mysql, Postgresql } from "@styled-icons/simple-icons";
import { motion } from "framer-motion";
import Circle from "../ui/circle";

const SkillDatabases = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  const arr = [Mysql, Postgresql, Mongodb];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2"
    >
      {arr.map((T, i) => (
        <motion.div
          key={"skelenton-" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full justify-end border border-white/[0.2] items-center space-x-2 bg-black w-full h-1/4"
        >
          <Circle className="size-8">
            <T className="size-4" />
          </Circle>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillDatabases;
