import "../styles/globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Bibek Aryal",
  description: "Bibek Aryal",
  metadataBase: new URL("https://bibeka.com.np"),
  manifest: "/manifest.json",
  authors: [{ name: "Bibek Aryal" }],
  keywords: ["Bibek", "Aryal", "bibeka.com.np"],
  openGraph: {
    siteName: "Bibek Aryal",
    type: "website",
    url: "https://bibeka.com.np",
    title: "Bibek Aryal",
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
