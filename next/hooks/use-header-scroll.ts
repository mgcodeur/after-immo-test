"use client";

import { useEffect, useState } from "react";

const SCROLLED_OFFSET = 8;

const REVEAL_OFFSET = 96;

const DIRECTION_THRESHOLD = 6;

type HeaderScroll = {
  hidden: boolean;
  scrolled: boolean;
};

export function useHeaderScroll(): HeaderScroll {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const currentY = window.scrollY;
      setScrolled(currentY > SCROLLED_OFFSET);

      const delta = currentY - lastY;
      if (Math.abs(delta) < DIRECTION_THRESHOLD) return;

      lastY = currentY;
      setHidden(delta > 0 && currentY > REVEAL_OFFSET);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { hidden, scrolled };
}
