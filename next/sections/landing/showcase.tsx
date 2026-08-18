import Image from "next/image";
import Reveal from "@/components/motion/reveal";

export default function Showcase() {
  return (
    <section className="app-container text-white">
      <div className="bg-primary rounded-[45px] px-6 py-12 sm:px-10 lg:px-15 lg:pt-20 lg:pb-31.5">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <Reveal className="order-2 mt-12 flex flex-col items-center lg:mt-23.25 xl:order-1 xl:mt-0 xl:items-start">
            <h2 className="text-center text-[28px] leading-8 sm:text-[34px] sm:leading-10 lg:text-[40px] lg:leading-none xl:max-w-110.75 xl:text-start">
              Nous construisons des piscines personnalisées, équipées et de qualité.
            </h2>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row lg:mt-23.25">
              <Image
                src="/assets/showcase/1.webp"
                alt="Piscine construite sur mesure par Ivoire Pool"
                width={736}
                height={1104}
                sizes="194px"
                className="h-48.5 w-48.5 shrink-0 rounded-[10px] object-cover"
              />
              <Image
                src="/assets/showcase/2.webp"
                alt="Piscine construite sur mesure par Ivoire Pool"
                width={736}
                height={1104}
                sizes="194px"
                className="h-48.5 w-48.5 shrink-0 rounded-[10px] object-cover"
              />
            </div>
            <div className="mt-10 lg:mt-17.25">
              <button
                type="button"
                className="bg-secondary hover:bg-secondary-hover rounded-full px-6 py-[14.5px] transition-colors duration-200 sm:px-[30.5px]"
              >
                Demander une estimation
              </button>
            </div>
          </Reveal>
          <Reveal className="order-1 flex shrink-0 justify-center xl:order-2 xl:justify-end" delay={0.12}>
            <Image
              src="/assets/showcase/ing.webp"
              alt="Piscine personnalisée équipée réalisée par Ivoire Pool"
              width={592}
              height={565}
              sizes="(max-width: 1024px) 100vw, 592px"
              className="h-auto w-full shrink-0 lg:h-141.25 lg:w-148 xl:object-cover"
            />
          </Reveal>
        </div>
        <Reveal>
          <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-36.25 lg:grid-cols-4">
            <li className="flex h-24 items-center justify-center rounded-xl bg-white/44 p-4 px-7.75 ring ring-white/52 sm:h-33.75">
              <Image
                src="/assets/showcase/logo-ipsum-1.webp"
                alt="Logo d’un partenaire d’Ivoire Pool"
                width={200}
                height={29}
                unoptimized
                className="max-w-full"
              />
            </li>
            <li className="flex h-24 items-center justify-center rounded-xl bg-white/44 p-4 px-7.75 ring ring-white/52 sm:h-33.75">
              <Image
                src="/assets/showcase/logo-ipsum-2.webp"
                alt="Logo d’un partenaire d’Ivoire Pool"
                width={223}
                height={31}
                unoptimized
                className="max-w-full"
              />
            </li>
            <li className="flex h-24 items-center justify-center rounded-xl bg-white/44 p-4 px-7.75 ring ring-white/52 sm:h-33.75">
              <Image
                src="/assets/showcase/logo-ipsum-3.webp"
                alt="Logo d’un partenaire d’Ivoire Pool"
                width={198}
                height={36}
                unoptimized
                className="max-w-full"
              />
            </li>
            <li className="flex h-24 items-center justify-center rounded-xl bg-white/44 p-4 px-7.75 ring ring-white/52 sm:h-33.75">
              <Image
                src="/assets/showcase/logo-ipsum-4.webp"
                alt="Logo d’un partenaire d’Ivoire Pool"
                width={189}
                height={34}
                unoptimized
                className="max-w-full"
              />
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
