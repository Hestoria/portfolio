import { motion } from "framer-motion";

const _links = [
  { text: "LinkedIn", link: "https://www.linkedin.com/in/sam-lee-12a9ba220/" },
  { text: "GitHub", link: "https://github.com/Hestoria" },
  {
    text: "Resume",
    link: `Po-San-(Sam)-Lee-Software-Engineer.pdf`,
  },
];

const footer = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto pt-20 px-4 lg:px-10">
        <div className="flex justify-evenly w-full text-center py-4">
          {_links.map((v, i) => {
            return (
              <motion.a
                className="font-mono text-lg font-bold cursor-pointer"
                key={`sm${i}`}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, color: "#a855f7" }}
              >
                {v.text}
              </motion.a>
            );
          })}
        </div>
        <p className="font-mono text-sm text-gray-600 w-full pt-4 pb-8 text-center font-black">
          @ 2024 Sam Lee All rights reserved
        </p>
      </div>
    </section>
  );
};

export default footer;
