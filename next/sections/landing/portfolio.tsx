import Image from "next/image";
import ChevronLeftIcon from "@/components/icons/chevron-left";
import ChevronRightIcon from "@/components/icons/chevron-right";
import ParallaxItem from "@/components/motion/parallax-item";
import Reveal from "@/components/motion/reveal";

export default function Portfolio() {
  return (
    <section className="app-container pt-16 lg:pt-60">
      <div id="realisations" className="flex flex-col items-center justify-between gap-y-12 xl:flex-row">
        <ParallaxItem distance={-30}>
          <Reveal className="flex flex-col items-center xl:items-start">
            <h2 className="text-center text-[24px] leading-8 font-medium sm:text-[28px] sm:leading-9 lg:text-[32px] lg:leading-none xl:max-w-97.5 xl:text-start">
              Découvrez nos différents projets réalisés afin de satisfaire nos clients.
            </h2>
            <p className="mt-6 text-center lg:mt-9 xl:max-w-95 xl:text-start">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <div className="mt-10 flex items-center gap-3.25 lg:mt-25.25">
              <button
                type="button"
                aria-label="Voir la réalisation précédente"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D1DAE7] text-white ring-[0.3px] ring-black/19 transition-colors duration-200 hover:bg-[#BCC4D0]"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                aria-label="Voir la réalisation suivante"
                className="bg-dark hover:bg-dark-hover inline-flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors duration-200"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </Reveal>
        </ParallaxItem>
        <ParallaxItem className="shrink-0" distance={-90}>
          <Reveal className="flex flex-col gap-5 sm:flex-row" delay={0.12}>
            <Image
              src="/assets/portfolio/1.webp"
              alt="Projet de piscine réalisé par Ivoire Pool à Abidjan"
              width={735}
              height={945}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 417px"
              className="aspect-square h-auto w-full min-w-0 rounded-[30px] object-cover lg:aspect-auto lg:h-104.25 lg:w-104.25"
            />
            <Image
              src="/assets/portfolio/2.webp"
              alt="Projet de piscine réalisé par Ivoire Pool à Abidjan"
              width={735}
              height={945}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 417px"
              className="aspect-square h-auto w-full min-w-0 rounded-[30px] object-cover lg:aspect-auto lg:h-104.25 lg:w-104.25"
            />
          </Reveal>
        </ParallaxItem>
      </div>

      <hr className="mt-16 border-black/30 lg:mt-34.25" />
    </section>
  );
}
