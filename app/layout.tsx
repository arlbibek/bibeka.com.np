import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Merriweather } from "next/font/google";

import Header from "../components/Header";

const merriweather = Merriweather({
  weight: "400",
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable}`}>
      <Header />
      <body className="font-serif dark:bg-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
