import Link from "next/link";
import { IconGitHub, IconInstagram, IconTwitter } from "./icons";

const social = [
  {
    name: "twitter",
    href: "https://twitter.com/humberni",
    icon: <IconTwitter />,
  },
  {
    name: "github",
    href: "https://github.com/humberni",
    icon: <IconGitHub />,
  },
  {
    name: "instagram",
    href: "https://instagram.com/humber_nieto",
    icon: <IconInstagram />,
  },
];
export default function Social() {
  return (
    <div className="flex justify-center gap-8 px-6 lg-px-8 max-w-2xl mx-auto my-20">
      {social.map(({ name, href, icon }) => (
        <Link
          key={name}
          href={href}
          title={name}
          target="_blank"
          className="text-zinc-900 hover:text-[#09E989] dark:text-zinc-300 dark:hover:text-[#09E989]"
        >
          <div className="h-6 w-6 flex items-center justify-center">{icon}</div>
        </Link>
      ))}
    </div>
  );
}
