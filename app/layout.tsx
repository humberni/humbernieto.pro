import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Humber Nieto",
  description: "Desarrollador Web Full Stack, apasionado por la tecnología y el desarrollo de software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white dark:bg-black`}>{children}</body>
    </html>
  );
}
