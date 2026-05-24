import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experiences from "@/components/sections/experiences";
import Projects from "@/components/sections/projects";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <About />
      <Projects />
      <Skills />
      <Experiences />
    </>
  );
}
