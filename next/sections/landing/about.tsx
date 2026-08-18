import Image from "next/image";
import PoolIcon from "@/components/icons/pool";
import ParallaxItem from "@/components/motion/parallax-item";
import Reveal from "@/components/motion/reveal";

export default function About() {
  return (
    <section className="pt-20 pb-24 lg:pt-46.75 lg:pb-51.5">
      <div id="a-propos" className="app-container">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-10">
          <h2 className="order-1 w-full text-center text-[28px] leading-8 sm:text-[34px] sm:leading-10 lg:order-2 lg:max-w-123 lg:text-start lg:text-[40px] lg:leading-none">
            Bienvenue sur Ivoire Pool, experts en piscines modernes et durables
          </h2>
          <div className="order-2 w-full shrink-0 lg:order-1 lg:max-w-170.5">
            <p className="text-center lg:mt-3.75 lg:max-w-96 lg:text-start">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
          </div>
        </Reveal>

        <ParallaxItem className="mt-12 lg:mt-41.25" distance={-50}>
          <Reveal className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-10">
            <div className="inline-flex w-full shrink-0 flex-col items-center gap-5 md:w-auto md:flex-row lg:max-w-170.5">
              <Image
                src="/assets/about/1.webp"
                alt="Piscine sur mesure réalisée par Ivoire Pool à Abidjan"
                width={1000}
                height={1500}
                sizes="331px"
                className="aspect-square h-auto w-full max-w-82.75 shrink-0 rounded-[30px] object-cover md:h-82.75 md:w-82.75"
              />
              <Image
                src="/assets/about/2.webp"
                alt="Bassin et plage d’une piscine construite par Ivoire Pool"
                width={1252}
                height={610}
                sizes="680px"
                className="aspect-square h-auto w-full max-w-82.75 shrink-0 rounded-[30px] object-cover md:h-82.75 md:w-82.75"
              />
            </div>
            <div className="w-full lg:order-2 lg:max-w-123">
              <div className="flex justify-center lg:justify-start">
                <div className="bg-primary flex h-11.75 w-11.75 items-center justify-center rounded-full text-white">
                  <PoolIcon />
                </div>
              </div>
              <p className="mt-2.75 text-center font-medium lg:text-start">Nunc vulputate libero</p>
              <h3 className="mt-7.75 text-center text-2xl font-medium uppercase lg:text-start">
                Des piscines sur mesure pour chaque projet
              </h3>
              <p className="mt-5 text-center lg:text-start">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                tempus urna at turpis condimentum lobortis.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="bg-primary hover:bg-primary-hover mt-9.5 inline-block rounded-full px-6.5 py-[14.5px] text-white uppercase transition-colors duration-200"
                >
                  Estimer mon projet
                </a>
              </div>
            </div>
          </Reveal>
        </ParallaxItem>
      </div>
    </section>
  );
}
