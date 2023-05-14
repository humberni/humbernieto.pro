import Link from "next/link";

const projetcs = [
  {
    title: "Halley",
    description:
      "Plantilla Single Page Application (SPA) Open Source, desarrollado con NextJs y Tailwindcss.",
    href: "https://halley.vercel.app/",
  },
  {
    title: "HUBCIG",
    description:
      "Sitio web  de alto rendimiento desarrollado con NextJs, Typescript, Tailwindcss y Sanityio del lado backend.",
    href: "https://hubcig.com/",
  },
  {
    title: "CITE Utcubamba",
    description:
      "Sitio web optimizado para el Centro de Innovación Tecnológica en Artesanía y Turismo, desarrollado con NextJs, Tailwindcss y Sanityio.",
    href: "https://citeutcubamba.pe/",
  },
  {
    title: "Quina ERP",
    description:
      "Sitio web informativo desarrollado con NextJs, Tailwind Css y desplegado en ▲ Vercel.",
    href: "https://quinaerp.com/",
  },
  {
    title: "Jhonsy Silva",
    description: "Sitio web personal construido con NextJs y Tailwind Css",
    href: "https://jhonsysilva.vercel.app/",
  },
  {
    title: "La Rueca",
    description:
      "Ecommerce de productos artesanales implementado sobre WordPress y WooCommerce.",
    href: "https://larueca.pe/",
  },
  {
    title: "Dark Mode",
    description:
      "Ejemplo práctico de configurar un Dark Mode con Nextjs y Tailwindcss.",
    href: "https://darkmode-nextjs.vercel.app/",
  },

  {
    title: "Humber Nieto",
    description:
      "Portafolio web minimalista desarrollado con NextJs, Tailwind Css y desplegado en ▲ Vercel.",
    href: "https://github.com/humberni/humbernieto.pro",
  },
];

export function Projects() {
  return (
    <div className="px-6 lg-px-8 mx-auto" id="projects">
      <h2 className="text-3xl font-bold pt-16">Proyectos recientes </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 w-full mt-16">
        {projetcs.map(({ title, href, description }) => (
          <Link
            key={title}
            href={href}
            target="_blank"
            className="group border hover:border hover:border-[#09E989] dark:border-zinc-800 dark:hover:border dark:hover:border-[#09E989] p-4 w-full"
          >
            <h3 className="text-lg font-bold text-left mt-2 text-zinc-900 dark:text-zinc-100 group-hover:text-[#09E989]">
              {title}
            </h3>
            <p className="mt-1 text-left text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
