import { useTheme } from "next-themes";
import Image from "next/image";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <div className="mt-6 justify-end flex m-auto">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <Image
            className="h-12 w-auto m-2"
            src="/images/logo/humber-logo.svg"
            alt="Logo - Humber Nieto"
            width={512}
            height={512}
            quality={75}
            sizes="100vw"
          />
        </button>
      </div>
    </>
  );
}
