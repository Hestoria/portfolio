import { Docker as DockerLogo } from "@styled-icons/fa-brands";
import { motion } from "framer-motion";
import { useId } from "react";
import BoxReveal from "../ui/box-reveal";
import { CardSpotlight } from "../ui/card-spotlight";
import Marquee from "../ui/marquee";

export type Icon = typeof DockerLogo;

export interface Props {
  companyName: string;
  location: string;
  jobTitle: string;
  usedTechs: Array<Icon>;
  hightLights: Array<string>;
}

const workExperienceContext: React.FC<Props> = ({
  companyName,
  location,
  jobTitle,
  usedTechs = [],
  hightLights = [],
}) => {
  const _techStacksSectionDelay = 0.6 + hightLights.length * 0.1;

  return (
    <CardSpotlight
      key={useId()}
      id={useId()}
      className="font-mono text-neutral-400"
    >
      {/* job info section */}
      <BoxReveal>
        <p className="text-neutral-50 text-2xl md:text-3xl font-bold">
          {companyName}
        </p>
      </BoxReveal>
      <BoxReveal>
        <p className="text-neutral-100 text-sm md:text-base font-bold">
          {location}
        </p>
      </BoxReveal>
      <BoxReveal delay={0.25} className="mt-4">
        <div className="text-neutral-200 text-lg md:text-xl font-medium">
          <span>{jobTitle}</span>
        </div>
      </BoxReveal>

      {/* job hight lights section */}
      <div className="pt-8">
        <BoxReveal delay={0.5}>
          <p className="text-lg md:text-xl font-semibold pb-4 text-neutral-200 uppercase">
            hightLights:
          </p>
        </BoxReveal>
        {hightLights.map((h, i) => {
          return (
            <BoxReveal key={`highlight ${i}`} delay={0.5 + 0.1 * (i + 1)}>
              <div>- {h}</div>
            </BoxReveal>
          );
        })}
      </div>

      {/* used tech stacks in job section*/}
      {/* TODO: ADD tooltip WHEN HOVER pnpm dlx aceternity-ui@latest add animated-tooltip */}
      <div className="w-full overflow-hidden pt-10">
        <BoxReveal delay={_techStacksSectionDelay}>
          <p className="text-lg md:text-xl font-semibold text-neutral-200 uppercase">
            used tech stacks:
          </p>
        </BoxReveal>
        <Marquee
          repeat={3}
          pauseOnHover
          className="[--duration:15s] overflow-hidden max-full justify-center items-center"
        >
          {usedTechs.map((T, i) => {
            return (
              <motion.div
                id={`techs logo ${i}`}
                key={`techs logo ${i}`}
                className="h-14 w-14"
                whileHover={{ scale: 1.3 }}
              >
                <T />
              </motion.div>
            );
          })}
        </Marquee>
      </div>
    </CardSpotlight>
  );
};

export default workExperienceContext;
