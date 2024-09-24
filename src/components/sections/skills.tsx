import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const skills = () => {
  return (
    <section className="max-w-7xl mx-auto" id="Skills">
      <div className="my-20">
        <span>Skills</span>
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

const items = [
  { title: "Programming Language", description: "asd", header: <Skeleton /> },
  {
    title: "Frontend Development",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
  {
    title: "Backend Development",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    title: "API Development",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "Databases",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "DevOps & Cloud",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "Testing",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
  },
];

export default skills;
