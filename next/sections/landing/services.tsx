import Image from "next/image";
import ArrowUpRightIcon from "@/components/icons/arrow-up-right";
import Reveal from "@/components/motion/reveal";

export default function Services() {
  return (
    <section className="app-container pt-16 pb-24 lg:pt-31.5 lg:pb-66.25">
      <Reveal id="services">
        <h2 className="tracking-|-0.08em] mx-auto text-center text-[26px] leading-8 uppercase sm:text-[32px] sm:leading-10 lg:max-w-189 lg:text-[40px] lg:leading-none">
          Nous concevons, construisons et entretenons des piscines modernes, durables et sur mesure
        </h2>
      </Reveal>
      <div className="mt-14 flex flex-col gap-14 lg:mt-29.25 lg:gap-10">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 xl:gap-x-34.25">
          <Image
            src="/assets/services/1.webp"
            alt="Construction d’une piscine sur mesure moderne par Ivoire Pool"
            width={1408}
            height={768}
            sizes="(max-width: 1024px) 160vw, 808px"
            className="aspect-[7/6] w-full max-w-full rounded-[30px] object-cover lg:aspect-auto lg:h-110.25 lg:w-126.5"
          />
          <div className="lg:max-w-103">
            <h3 className="text-[22px] leading-7 sm:text-[26px] sm:leading-8 lg:text-[32px] lg:leading-none">
              Nous construisons des piscines sur mesure modernes et adaptées parfaitement
            </h3>
            <p className="mt-6 lg:mt-9">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <a href="#" className="group relative mt-8 -ml-5 flex w-fit items-center gap-x-6.5 pl-5 lg:mt-11.5">
              <span
                aria-hidden="true"
                className="bg-secondary group-hover:bg-secondary-hover absolute inset-y-0 right-0 w-9.25 rounded-full transition-[width,background-color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
              />
              <span className="relative font-medium transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
                Demander une estimation
              </span>
              <span className="relative flex h-9.25 w-9.25 items-center justify-center text-white transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45">
                <ArrowUpRightIcon />
              </span>
            </a>
            <hr className="mt-10 border-black/28 lg:mt-13.5" />
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 xl:gap-x-34.25">
          <Image
            src="/assets/services/2.webp"
            alt="Entretien et maintenance d’une piscine par Ivoire Pool"
            width={736}
            height={1104}
            sizes="(max-width: 1024px) 100vw, 506px"
            className="aspect-[7/6] w-full max-w-full rounded-[30px] object-cover lg:aspect-auto lg:h-110.25 lg:w-126.5"
          />
          <div className="lg:max-w-103">
            <h3 className="text-[22px] leading-7 sm:text-[26px] sm:leading-8 lg:text-[32px] lg:leading-none">
              Nous assurons l’entretien et maintenance complète de votre piscine régulièrement
            </h3>
            <p className="mt-6 lg:mt-9">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <a href="#" className="group relative mt-8 -ml-5 flex w-fit items-center gap-x-6.5 pl-5 lg:mt-11.5">
              <span
                aria-hidden="true"
                className="bg-secondary group-hover:bg-secondary-hover absolute inset-y-0 right-0 w-9.25 rounded-full transition-[width,background-color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
              />
              <span className="relative font-medium transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
                Demander une estimation
              </span>
              <span className="relative flex h-9.25 w-9.25 items-center justify-center text-white transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45">
                <ArrowUpRightIcon />
              </span>
            </a>
            <hr className="mt-10 border-black/28 lg:mt-13.5" />
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 xl:gap-x-34.25">
          <Image
            src="/assets/services/3.webp"
            alt="Rénovation d’une piscine existante par Ivoire Pool"
            width={1500}
            height={1000}
            sizes="(max-width: 1024px) 130vw, 662px"
            className="aspect-[7/6] w-full max-w-full rounded-[30px] object-cover lg:aspect-auto lg:h-110.25 lg:w-126.5"
          />
          <div className="lg:max-w-103">
            <h3 className="text-[22px] leading-7 sm:text-[26px] sm:leading-8 lg:text-[32px] lg:leading-none">
              Nous rénovons et modernisons les piscines existantes selon vos besoins
            </h3>
            <p className="mt-6 lg:mt-9">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <a href="#" className="group relative mt-8 -ml-5 flex w-fit items-center gap-x-6.5 pl-5 lg:mt-11.5">
              <span
                aria-hidden="true"
                className="bg-secondary group-hover:bg-secondary-hover absolute inset-y-0 right-0 w-9.25 rounded-full transition-[width,background-color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
              />
              <span className="relative font-medium transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white">
                Demander une estimation
              </span>
              <span className="relative flex h-9.25 w-9.25 items-center justify-center text-white transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45">
                <ArrowUpRightIcon />
              </span>
            </a>
            <hr className="mt-10 border-black/28 lg:mt-13.5" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
