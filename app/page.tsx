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
      <div className="landing__milkyway" aria-hidden="true">
        <div className="landing__milkyway-band" />
        <div className="landing__milkyway-core" />
        <div className="landing__milkyway-dust landing__milkyway-dust--a" />
        <div className="landing__milkyway-dust landing__milkyway-dust--b" />
        <div className="landing__milkyway-dust landing__milkyway-dust--c" />
      </div>
      <h1 className="landing__name">
        <span>BIBEK</span>
        <span>ARYAL</span>
      </h1>
      <LandingFloatingIcons />
    </main>
  );
}
