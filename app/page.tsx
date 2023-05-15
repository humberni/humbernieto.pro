import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Social from "@/components/social";
import Video from "@/components/video";

export default function Home() {
  return (
    <>
      <Video />
      <About />
      <Skills />
      <Projects />
      <Social />
    </>
  );
}
