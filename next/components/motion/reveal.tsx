"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BAND_START = 4;
const BAND_END = 32;
const ORDER_OFFSET = 6;

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  order?: number;
};

export default function Reveal({ children, className, id, order = 0 }: RevealProps) {
  const item = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = item.current;
      if (!element) return;

      const media = gsap.matchMedia();
      const offset = order * ORDER_OFFSET;

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: `clamp(top bottom-=${BAND_START + offset}%)`,
              end: `clamp(top bottom-=${BAND_END + offset}%)`,
              scrub: 0.3,
            },
          },
        );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(element, { opacity: 1, y: 0 });
      });

      return () => media.revert();
    },
    { scope: item, dependencies: [order] },
  );

  return (
    <div ref={item} id={id} data-reveal className={className}>
      {children}
    </div>
  );
}
