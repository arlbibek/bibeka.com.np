"use client";

import { useEffect, useState } from "react";
import {
  LANDING_FLOATING_ICONS,
  LANDING_FLOATING_TONE_CLASS,
} from "@/lib/landing-floating-icons";

export default function LandingFloatingIcons() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <div
      className="landing-floating-icons pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden
    >
      {LANDING_FLOATING_ICONS.map(
        (
          {
            Icon,
            top,
            left,
            size,
            tone,
            opacityMin,
            opacityMax,
            rotate,
            driftX,
            driftY,
            duration,
            delay,
            filled,
            twinkle,
            twinkleDuration = 16,
            twinkleDelay = 0,
            desktopOnly,
          },
          index
        ) => {
          const stroke = filled ? undefined : size >= 22 ? 1.15 : 1.3;
          const showGlow = Boolean(twinkle) && !reducedMotion;

          return (
            <span
              key={index}
              className={`landing-floating-icon absolute -translate-x-1/2 -translate-y-1/2${
                desktopOnly ? " hidden sm:block" : ""
              }`}
              style={{
                top,
                left,
                ["--float-rotate" as string]: `${rotate}deg`,
                ["--float-drift-x" as string]: `${driftX}px`,
                ["--float-drift-y" as string]: `${driftY}px`,
                ["--float-drift-x-alt" as string]: `${Math.round(driftX * 0.65)}px`,
                ["--float-drift-y-alt" as string]: `${Math.round(driftY * 0.55)}px`,
                ["--float-opacity-min" as string]: String(opacityMin),
                ["--float-opacity-max" as string]: String(opacityMax),
                ["--float-duration" as string]: reducedMotion
                  ? "0s"
                  : `${duration}s`,
                ["--float-delay" as string]: `${delay}s`,
                ["--twinkle-duration" as string]: reducedMotion
                  ? "0s"
                  : `${twinkleDuration}s`,
                ["--twinkle-delay" as string]: `${twinkleDelay}s`,
              }}
            >
              <span className="relative inline-flex">
                <span className="landing-floating-icon-base">
                  <Icon
                    size={size}
                    strokeWidth={stroke}
                    className={LANDING_FLOATING_TONE_CLASS[tone]}
                  />
                </span>
                {showGlow ? (
                  <span className="landing-floating-icon-glow" aria-hidden>
                    <Icon size={size} strokeWidth={stroke} />
                  </span>
                ) : null}
              </span>
            </span>
          );
        }
      )}
    </div>
  );
}
