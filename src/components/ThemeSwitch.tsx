import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "./Icons";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      className="relative w-10 h-6 flex items-center rounded-full bg-zinc-200 dark:bg-zinc-800 focus:outline-none"
      onClick={handleClick}
    >
      {mounted && (
        <>
          <div
            className={`absolute inset-0 w-5 h-5 mt-0.5 ml-0.5 rounded-full transition-transform ${
              resolvedTheme === "dark" ? "translate-x-4" : ""
            } bg-white dark:bg-zinc-900`}
          ></div>

          <div
            className={`absolute transition-transform text-zinc-400 flex items-center justify-center w-6 h-0 ${
              resolvedTheme === "dark" ? "translate-x-4" : ""
            }`}
          >
            {resolvedTheme === "dark" ? <IconMoon /> : <IconSun />}
          </div>
        </>
      )}
    </button>
  );
}