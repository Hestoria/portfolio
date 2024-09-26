import {
  Aws,
  Bitbucket,
  Docker,
  Git,
  Github,
  Gitlab,
  Linux,
  Npm,
  Windows,
} from "@styled-icons/fa-brands";
import {
  Androidstudio,
  Firebase,
  Nuget,
  Vite,
} from "@styled-icons/simple-icons";
import { shuffleArray } from "../../lib/utils";
import Circle from "../ui/circle";
import OrbitingCircles from "../ui/orbiting-circles";

const SkillTool = () => {
  const _inner = shuffleArray([Github, Bitbucket, Gitlab, Git]);
  const _outer = shuffleArray([
    Nuget,
    Npm,
    Androidstudio,
    Aws,
    Firebase,
    Docker,
    Linux,
    Windows,
    Vite,
  ]);
  return (
    <div className="bg-dot-white/[0.2] relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap text-white-700  bg-clip-text text-center text-xl font-semibold leading-none text-transparent ">
        Tools & Version Controls
      </span>

      {/* Inner Circles */}
      {_inner.map((T, i) => {
        return (
          <OrbitingCircles
            key={`inner c ${i}`}
            className="size-14 border-none bg-transparent"
            duration={_inner.length * 5}
            delay={i * 5}
            radius={80}
          >
            <Circle className="size-12">
              <T className="size-6" />
            </Circle>
          </OrbitingCircles>
        );
      })}

      {/* Outer Circles (reverse) */}

      {_outer.map((T, i) => {
        return (
          <OrbitingCircles
            key={`outer c ${i}`}
            className="size-16 border-none bg-transparent"
            radius={190}
            duration={_outer.length * 5}
            delay={5 * i}
            reverse
          >
            <Circle className="size-14">
              <T className="size-8" />
            </Circle>
          </OrbitingCircles>
        );
      })}
    </div>
  );
};

export default SkillTool;
