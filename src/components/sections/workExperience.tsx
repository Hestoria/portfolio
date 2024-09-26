import { Timeline } from "@/components/ui/timeline";
import {
  Android,
  Bitbucket,
  Docker,
  Git,
  Gitlab,
  Linux,
  Npm,
  Rust,
} from "@styled-icons/fa-brands";
import {
  Cplusplus,
  Csharp,
  Dotnet,
  Electron,
  Laravel,
  Mysql,
  Nuget,
  Php,
  Phpmyadmin,
  Postgresql,
  Qt,
  ReactLogo,
  Typescript,
} from "@styled-icons/simple-icons";

import WorkExperienceContext from "../contextCards/workExperienceContext";

const _data: Array<{ time: [string, string]; content: React.ReactNode }> = [
  {
    time: ["Jan 2023", "Present"],
    content: (
      <WorkExperienceContext
        companyName={"Felix Payment Systems"}
        location={"Vancouver, BC, Canada"}
        jobTitle={"Software Engineer"}
        usedTechs={[
          Cplusplus,
          Qt,
          Csharp,
          Dotnet,
          Nuget,
          Typescript,
          ReactLogo,
          Npm,
          Docker,
          Linux,
          Rust,
          Android,
          Bitbucket,
        ]}
        hightLights={[
          "Developed Android app with tap-to-pay, enhancing transaction speed and user convenience.",
          "Led Docker pipeline project for npm and Nuget packages, optimizing workflow and resource use.",
          "Created client-facing SDK for web and mobile, simplifying client implementation and boosting adoption.",
          "Built internal tools for library automation, improving team productivity and reducing manual tasks.",
          "Integrated payment gateways, enhancing transaction security and user trust.",
        ]}
      />
    ),
  },
  {
    time: ["Apr 2022", "Dec 2022"],
    content: (
      <WorkExperienceContext
        companyName={"Goopter eCommerce Solutions"}
        location={"Burnaby, BC, Canada"}
        jobTitle={"Frontend Developer"}
        usedTechs={[Typescript, ReactLogo, Npm, Docker, Electron, Postgresql]}
        hightLights={[
          "Boosted website performance by 40%, improving load times and user experience.",
          "Developed web and desktop applications using TypeScript, React, Redux, and Electron.",
          "Delivered robust and scalable solutions, ensuring high-quality user interfaces.",
        ]}
      />
    ),
  },
  {
    time: ["Jun 2020", "Jul 2021"],
    content: (
      <WorkExperienceContext
        companyName={"A & A Ltd"}
        location="Hong Kong"
        jobTitle={"Web Developer"}
        usedTechs={[
          Laravel,
          Php,
          Phpmyadmin,
          Mysql,
          Typescript,
          ReactLogo,
          Gitlab,
          Git,
        ]}
        hightLights={[
          "Developed full-stack web app with LAMP stack, boosting user engagement and site performance by 40%.",
          "Integrated RESTful APIs for secure online payments, ensuring efficient transactions.",
          "Optimized CMS functionality, drastically improving content management efficiency and accuracy for streamlined operations.",
        ]}
      />
    ),
  },
  {
    time: ["Aug 2019", "May 2020"],
    content: (
      <WorkExperienceContext
        companyName={"NEC Hong Kong Ltd"}
        location="Hong Kong"
        jobTitle={"Software Developer (Internship)"}
        usedTechs={[Csharp, Dotnet, Nuget, Typescript, Gitlab, Git]}
        hightLights={[
          "Collaborated with the team to streamline installation processes, achieving measurable improvements.",
          "Diagnosed and fixed technical problems using analytical skills, contributing to project success.",
        ]}
      />
    ),
  },
];

const workExperience = () => {
  return (
    <section id="works">
      <Timeline data={_data} />
    </section>
  );
};

export default workExperience;
