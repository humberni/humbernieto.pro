import Link from "next/link";

const projetcs = [
  {
    title: "Halley",
    emoji: "☄️",
    description:
      "Plantilla Single Page Application (SPA) Open Source, desarrollado con NextJs y Tailwindcss.",
    href: "https://halley.vercel.app/",
  },
  {
    title: "HUBCIG",
    emoji: "🌱",
    description:
      "Sitio web  de alto rendimiento desarrollado con NextJs, Typescript, Tailwindcss y Sanityio del lado backend.",
    href: "https://hubcig.com/",
  },
  {
    title: "CITE Utcubamba",
    emoji: "🧸",
    description:
      "Sitio web optimizado para el Centro de Innovación Tecnológica en Artesanía y Turismo, desarrollado con NextJs, Tailwindcss y Sanityio.",
    href: "https://citeutcubamba.pe/",
  },
  {
    title: "Quina ERP",
    emoji: "📊",
    description:
      "Sitio web informativo desarrollado con NextJs, Tailwind Css y desplegado en ▲ Vercel.",
    href: "https://quinaerp.com/",
  },
  {
    title: "Jhonsy Silva",
    emoji: "👷‍♂️",
    description: "Sitio web personal construido con NextJs y Tailwind Css",
    href: "https://jhonsysilva.vercel.app/",
  },
  {
    title: "La Rueca",
    emoji: "🧦",
    description:
      "Ecommerce de productos artesanales implementado sobre WordPress y WooCommerce.",
    href: "https://larueca.pe/",
  },
  {
    title: "Dark Mode",
    emoji: "🌓",
    description:
      "Ejemplo práctico de configurar un Dark Mode con Nextjs y Tailwindcss.",
    href: "https://darkmode-nextjs.vercel.app/",
  },

  {
    title: "Humber Nieto",
    emoji: "🦖",
    description:
      "Portafolio web minimalista desarrollado con NextJs, Tailwind Css y desplegado en ▲ Vercel.",
    href: "https://github.com/humberni/humbernieto.pro",
  },
];

export function Projects() {
  return (
    <div id="projects">
      <h2 className="text-4xl font-bold pt-16">Proyectos recientes </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 w-full my-16">
        {projetcs.map(({ title, href, description, emoji }) => (
          <Link
            key={title}
            href={href}
            target="_blank"
            className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 w-full"
          >
            <h3 className="text-lg font-bold text-left mt-2 text-neutral-900 dark:text-neutral-100">
              {title} <span className="text-3xl">{emoji}</span>
            </h3>
            <p className="mt-1 text-left text-neutral-700 dark:text-neutral-300">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
