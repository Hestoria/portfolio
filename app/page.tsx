import {
  ContactPage,
  HeroPage,
  ProjectsPage,
  ResumePage,
  ServicesPage,
} from "@/components/pages";

export default function Home() {
  return (
    <main>
      <HeroPage />
      <ServicesPage />
      <ResumePage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
