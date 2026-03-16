import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata, Viewport } from "next";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: "400",
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bibek Aryal",
  description:
    "Portfolio of Bibek Aryal, information security and GRC professional.",
  metadataBase: new URL("https://bibeka.com.np"),
  manifest: "/manifest.json",
  authors: [{ name: "Bibek Aryal" }],
  keywords: ["Bibek", "Aryal", "Information Security", "GRC", "Nepal"],
  openGraph: {
    siteName: "Bibek Aryal",
    type: "website",
    url: "https://bibeka.com.np",
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1b22",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className="font-serif dark:bg-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
