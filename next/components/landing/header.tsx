import Image from "next/image";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import HideOnScroll from "@/components/landing/hide-on-scroll";
import MobileMenu from "@/components/landing/mobile-menu";
import type { NavLink } from "@/types/ui/navigation";

export default function Header() {
  const navLinks: NavLink[] = [
    { href: "#a-propos", label: "À propos" },
    { href: "#services", label: "Nos services" },
    { href: "#realisations", label: "Nos réalisations" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <HideOnScroll>
      <div className="app-container relative flex w-full items-center justify-center lg:justify-between">
        <div className="hidden items-center gap-x-2.5 lg:inline-flex">
          <a
            href="#"
            aria-label="Ivoire Pool sur Instagram"
            className="header-glass flex h-9 w-9 items-center justify-center rounded-full p-2.5 backdrop-blur-[20px] transition-colors duration-200"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label="Ivoire Pool sur Facebook"
            className="header-glass flex h-9 w-9 items-center justify-center rounded-full p-2.5 backdrop-blur-[20px] transition-colors duration-200"
          >
            <FacebookIcon />
          </a>
        </div>
        <nav
          aria-label="Navigation principale"
          className="header-glass inline-flex h-13 w-full items-center gap-x-5.25 rounded-full px-2 text-sm backdrop-blur-[20px] transition-colors duration-200 md:w-auto md:px-10"
        >
          <ul className="hidden gap-x-3.75 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#accueil" aria-label="Ivoire Pool, retour à l’accueil">
            <Image src="/assets/logo.webp" alt="Ivoire Pool" width={145} height={38} priority unoptimized />
          </a>

          <ul className="hidden gap-x-3.75 md:flex">
            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu links={navLinks} />
        <button
          type="button"
          className="header-glass-strong hidden rounded-full px-6.5 py-2 uppercase backdrop-blur-[20px] transition-colors duration-200 lg:inline-block"
        >
          Contact
        </button>
      </div>
    </HideOnScroll>
  );
}
