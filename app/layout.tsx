import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Merriweather } from "@next/font/google";

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
      <head />
      <body className="font-serif dark:bg-slate-900">{children}</body>
    </html>
  );
}
