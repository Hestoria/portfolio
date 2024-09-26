import { Dotnet, Nestjs, Qt, Springboot } from "@styled-icons/simple-icons";
import Circle from "../ui/circle";
import Marquee from "../ui/marquee";

const skillBackEnd = () => {
  return (
    <div className="flex items-center h-full bg-dot-white/[0.2]">
      <Marquee
        repeat={4}
        pauseOnHover
        className="[--duration:10s] overflow-hidden justify-center items-center] "
      >
        {[Nestjs, Dotnet, Qt, Springboot].map((T, i) => {
          return (
            <Circle className="size-14" key={`backend logo ${i}`}>
              <T className="size-8" />
            </Circle>
          );
        })}
      </Marquee>
    </div>
  );
};

export default skillBackEnd;
