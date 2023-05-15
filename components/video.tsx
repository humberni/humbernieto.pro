import Image from "next/image";
import Link from "next/link";
import { IconArrowDown } from "./icons";

export default function Video() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-40"
        poster="/images/preload.webp"
      >
        <source
          src="https://storage.googleapis.com/projects-video/nieto-ia.mp4"
          type="video/mp4"
        />
        Su navegador no soporta la etiqueta de vídeo.
      </video>
      <div className="relative h-screen mx-auto ">
        <div className="px-6 sm:px-6 lg:px-8 absolute bottom-36 lg:bottom-24">
          <h1 className="md:max-w-2xl text-4xl md:text-5xl font-bold text-white">
            Humber Nieto
          </h1>
          <p className="text-[#09E989] text-lg">{"Developer </>"}</p>
        </div>
        <div>
          <Link href="/">
            <Image
              className="h-10 w-auto fixed top-0 left-0 right-0 pl-6 lg:pl-8 mt-6 lg:mt-8"
              src="/images/logo/humber-green.svg"
              alt="Logo - Humber Nieto"
              width={300}
              height={300}
              quality={75}
              sizes="100vw"
            />
          </Link>
        </div>
        <div className="px-6 sm:px-6 lg:px-8 absolute right-0 bottom-20 lg:bottom-8">
          <Link href="#about" passHref legacyBehavior>
            <button className="border hover:bg-white text-white hover:text-black p-2 font-medium">
              <IconArrowDown />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
