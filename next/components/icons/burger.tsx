const BAR = "origin-center [transform-box:fill-box] transition duration-300 ease-out";

export default function BurgerIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="5" width="18" height="2" rx="1" className={`${BAR} ${open ? "translate-y-1.5 rotate-45" : ""}`} />
      <rect x="3" y="11" width="18" height="2" rx="1" className={`${BAR} ${open ? "scale-x-0 opacity-0" : ""}`} />
      <rect x="3" y="17" width="18" height="2" rx="1" className={`${BAR} ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
    </svg>
  );
}
