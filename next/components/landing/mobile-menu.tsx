"use client";

import { useEffect, useRef, useState } from "react";
import BurgerIcon from "@/components/icons/burger";
import type { NavLink } from "@/types/ui/navigation";

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      if (buttonRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="absolute top-1/2 right-5 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full ring-[0.3px] ring-white/60 transition-colors duration-200 hover:bg-white/20 md:hidden"
      >
        <BurgerIcon open={open} />
      </button>

      <div
        ref={panelRef}
        id="menu-mobile"
        inert={!open}
        className={`header-glass absolute top-full right-3 left-3 mt-3 origin-top rounded-3xl px-6 py-5 backdrop-blur-[20px] transition duration-300 ease-out md:hidden ${
          open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="header-glass-strong mt-6 w-full rounded-full px-6.5 py-2 uppercase transition-colors duration-200"
        >
          Contact
        </button>
      </div>
    </>
  );
}
