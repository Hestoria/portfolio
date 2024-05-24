import { motion } from "framer-motion";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface heroProps {}

export const Hero: React.FC<heroProps> = ({}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <motion.div
            initial={{
              opacity: 0,
              x: 350,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>Create project</CardTitle>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 400,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
          >
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </motion.div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default Hero;
