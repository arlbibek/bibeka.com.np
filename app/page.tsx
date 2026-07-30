import type { Metadata } from "next";
import LandingFloatingIcons from "@/components/LandingFloatingIcons";

export const metadata: Metadata = {
  title: "Bibek Aryal",
  description: "Bibek Aryal",
  openGraph: {
    title: "Bibek Aryal",
    description: "Bibek Aryal",
    url: "https://bibeka.com.np",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="landing" aria-label="Bibek Aryal">
      <div className="landing__glow landing__glow--a" aria-hidden="true" />
      <div className="landing__glow landing__glow--b" aria-hidden="true" />
      <div className="landing__glow landing__glow--c" aria-hidden="true" />
      <h1 className="landing__name">
        <span>BIBEK</span>
        <span>ARYAL</span>
      </h1>
      <LandingFloatingIcons />
    </main>
  );
}
