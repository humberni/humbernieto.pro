import Image from "next/image";

export default function About() {
  return (
    <div
      className="px-6 lg-px-8 max-w-2xl mx-auto lg:flex items-center pt-24 gap-x-8"
      id="about"
    >
      <Image
        alt="Humber Nieto"
        height={120}
        width={120}
        src="/images/avatar/avatar.jpg"
        sizes="100vw"
        priority
        className="filter grayscale hover:grayscale-0"
      />
      <p className="text-zinc-900 dark:text-zinc-300 mt-8 lg:mt-0">
        Soy un apasionado por la tecnología con experiencia en el desarrollo de
        soluciones innovadoras y accesibles para empresas y usuarios. Utilizo
        tecnologías modernas y metodologías ágiles para obtener los mejores
        resultados.
      </p>
    </div>
  );
}
