import { forwardRef, useRef } from "react";
import { cn } from "../../lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const skills = () => {
  return (
    <section className="max-w-7xl mx-auto" id="Skills">
      <div className="my-20">
        <h2 className="text-3xl lg:text-6xl mb-4 text-white max-w-4xl font-bold">
          Skills
        </h2>
      </div>
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

const DetaBaseSkeleton:React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return(

  <div ref={containerRef}>

  </div>
)}


const items = [
  {
    title: "Programming Language",
    description: "Explore the building blocks of software, from syntax to semantics, that power modern applications.",
    header: <Skeleton />
  },
  {
    title: "Frontend Development",
    description: "Uncover the art and science behind creating dynamic and interactive user interfaces.",
    header: <Skeleton />
  },
  {
    title: "Backend Development",
    description: "Dive deep into the server-side logic, architecture, and databases that support web applications.",
    header: <Skeleton />
  },
  {
    title: "API Development",
    description: "Learn about designing robust, scalable interfaces that enable communication between systems.",
    header: <Skeleton />
  },
  {
    title: "Databases",
    description: "Understand the importance of storing, managing, and retrieving structured data efficiently.",
    header: <DetaBaseSkeleton />
  },
  {
    title: "DevOps & Cloud",
    description: "Explore how cloud computing and DevOps streamline software development and operations.",
    header: <Skeleton />
  },
  {
    title: "Testing",
    description: "Discover how testing ensures software reliability, performance, and security across platforms.",
    header: <Skeleton />
  }

];



export default skills;
