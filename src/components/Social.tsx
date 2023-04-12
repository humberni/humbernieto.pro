import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const social = [
  {
    name: "twitter",
    href: "https://twitter.com/humberni",
    icon: <FaTwitter size={25} />,
  },
  {
    name: "github",
    href: "https://github.com/humberni",
    icon: <FaGithub size={25} />,
  },
  {
    name: "instagram",
    href: "https://instagram.com/humber_nieto",
    icon: <FaInstagram size={25} />,
  },
];
export function Social() {
  return (
    <div className="flex justify-center gap-6 max-w-[350px] mx-auto mt-12">
      {social.map(({ name, href, icon }) => (
        <Link
          key={name}
          href={href}
          title={name}
          target="_blank"
          className="text-neutral-900 hover:text-indigo-500 dark:text-neutral-300 dark:hover:text-indigo-500"
        >
          <div className="flex items-center justify-center">{icon}</div>
        </Link>
      ))}
    </div>
  );
}
