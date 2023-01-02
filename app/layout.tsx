import "../styles/globals.css";

import { Merriweather } from "@next/font/google";

const merriweather = Merriweather({
  weight: "400",
  variable: "--font-merriweather",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
