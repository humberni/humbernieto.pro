import { Layout, Projects, Skills, Social } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="justify-center text-center">
        <h1 className="text-4xl font-bold mt-16">Humber Nieto</h1>
        <h2 className="text-lg font-normal mt-4 text-neutral-900 dark:text-neutral-300">
          Developer
        </h2>
        <p className="max-w-lg text-neutral-900 dark:text-neutral-300 mx-auto mt-6">
          <span className="text-4xl ">💡</span> Soy un apasionado por la
          tecnología con experiencia en el desarrollo de soluciones innovadoras
          y accesibles para empresas y usuarios. Utilizo tecnologías modernas y
          metodologías ágiles para obtener los mejores resultados.
        </p>
        <Social />
        <div className="flex justify-center mt-12">
          <Image
            alt="Humber Nieto"
            height={130}
            width={130}
            src="/images/avatar/avatar.jpg"
            sizes="100vw"
            priority
            className="rounded-full filter hover:grayscale rotate-45"
          />
        </div>
        <Skills />
        <Projects />
        <p className="max-w-lg mx-auto dark:text-neutral-300">
          Actualmente no estoy buscando nuevas oportunidades, pero mi bandeja de
          entrada siempre está abierta. Ya sea que tenga una pregunta o
          simplemente quiera saludar.
        </p>
        <Social />
      </div>
    </Layout>
  );
}
