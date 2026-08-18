"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const RANGES = {
  "scroll-out": { start: "top top", end: "bottom top" },
  "in-view": { start: "top bottom", end: "bottom top" },
} as const;

type ParallaxItemProps = {
  children: ReactNode;
  className?: string;
  range?: keyof typeof RANGES;
  distance: number;
};

export default function ParallaxItem({ children, className, distance, range = "in-view" }: ParallaxItemProps) {
  const item = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = item.current;
      const trigger = element?.closest("section");
      if (!element || !trigger) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(element, {
          y: distance,
          ease: "none",
          scrollTrigger: { trigger, ...RANGES[range], scrub: 0.5 },
        });
      });

      return () => media.revert();
    },
    { scope: item, dependencies: [distance, range] },
  );

  return (
    <div ref={item} className={className}>
      {children}
    </div>
  );
}
