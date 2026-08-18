import type { ReactNode } from "react";
import LandingLayout from "@/layouts/landing";

export default function Layout({ children }: { children: ReactNode }) {
  return <LandingLayout>{children}</LandingLayout>;
}
