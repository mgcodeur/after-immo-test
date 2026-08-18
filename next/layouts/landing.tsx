import type { ReactNode } from "react";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="text-dark leading-none tracking-[-0.06em]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
