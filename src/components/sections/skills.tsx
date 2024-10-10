import SkillBackEnd from "../contextCards/skillBackEnd";
import SkillDatabases from "../contextCards/skilldatabase";
import SkillsFE from "../contextCards/skillFrontEnd";
import SkillPL from "../contextCards/skillProgrammingLanguage";
import SkillTool from "../contextCards/SkillTool";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

// TODO: add context for each skill card for details displays
const skills = () => {
  return (
    <section
      className="w-full bg-neutral-950 font-sans px-4 lg:px-10"
      id="skills"
    >
      <div className="max-w-7xl mx-auto pt-20">
        <h2 className="text-3xl lg:text-6xl my-4 text-white max-w-4xl font-bold">
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
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

const items = [
  {
    title: "Programming Language",
    description: "Languages: Rust, C++, JavaScript, TypeScript, C#, Java",
    header: <SkillPL />,
    className: "row-span-1 col-span-1",
    context: <></>,
  },
  {
    title: "Backend Development",
    description: [
      "Technologies: NestJS, .NET, Rust (Actix, Rokect), Spring Boot, Qt",
      "Architectures: RESTful APIs, Tcp/IP, SFTP",
    ],
    header: <SkillBackEnd />,
    className: "row-span-1 col-span-1",
    context: <></>,
  },
  {
    title: "Frontend Development",
    description: [
      "Frameworks/Libraries: React, Vue.js, NextJS.",
      "Styling: Tailwind CSS, Sass, Styled Components.",
      "Animation: Framer Motion, GSAP, Three.js for 3D Animations.",
    ],
    header: <SkillsFE />,
    className: "md:row-span-2 col-span-1",
    context: <></>,
  },
  {
    title: "Tools & Version Control",
    description: [
      "Version Control: Git, GitHub, GitLab, Bitbucket.",
      "Editors/IDEs: Visual Studio Code, Vim",
    ],
    header: <SkillTool />,
    className: "md:row-span-2 md:col-span-2",
    context: <></>,
  },
  {
    title: "Databases",
    description: [
      "SQL Databases: MySQL, PostgreSQL",
      "NoSQL Databases: MongoDB, Redis",
      "ORMs: TypeORM, Prisma.",
    ],
    header: <SkillDatabases />,
    className: "row-span-1 col-span-1",
    context: <></>,
  },
];

export default skills;
