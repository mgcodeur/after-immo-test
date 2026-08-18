"use client";

import type { ReactNode } from "react";
import { useHeaderScroll } from "@/hooks/use-header-scroll";

export default function HideOnScroll({ children }: { children: ReactNode }) {
  const { hidden, scrolled } = useHeaderScroll();

  return (
    <header
      data-scrolled={scrolled || undefined}
      className={`fixed top-4 z-10 w-full text-white transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none ${
        hidden ? "-translate-y-[calc(100%+1rem)]" : "translate-y-0"
      }`}
    >
      {children}
    </header>
  );
}
