import { Layout, Projects, Skills, Social } from "@/components";
import { About } from "@/components/About";
import HeroVideo from "@/components/HeroVideo";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <Layout>
      <HeroVideo />
      <About />
      <Skills />
      <Projects />
      <Social />
      <div className="justify-center mx-auto flex py-12">
        <ThemeSwitch />
      </div>
    </Layout>
  );
}
