import Image from "next/image";
import Reveal from "@/components/motion/reveal";

export default function Engagements() {
  return (
    <section className="app-container">
      <div className="bg-secondary rounded-[45px] px-6 pt-12 pb-16 text-white sm:px-10 lg:px-15 lg:pt-23.5 lg:pb-34.25">
        <div className="flex flex-col items-center gap-x-19.25 gap-y-10 xl:flex-row">
          <Reveal className="xl:max-w-lg">
            <h2 className="text-[26px] leading-8 uppercase sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-none">
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna
            </h2>
            <p className="mt-6 lg:mt-15 lg:max-w-108.75">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
          </Reveal>
          <Reveal
            className="flex w-full shrink-0 flex-col items-center gap-6 rounded-[30px] bg-white p-4.5 md:flex-row md:gap-13.25 md:pe-9.5 xl:max-w-153.75"
            order={1}
          >
            <Image
              src="/assets/engagements/1.webp"
              alt="Piscine à débordement réalisée par Ivoire Pool"
              width={736}
              height={1308}
              sizes="(max-width: 768px) 100vw, 257px"
              className="h-60 w-full shrink-0 rounded-3xl object-cover md:h-74.25 md:w-64.25"
            />
            <div>
              <h3 className="text-dark text-[22px] leading-7 sm:text-[26px] sm:leading-8 lg:text-[32px] lg:leading-none">
                Consectetur adipiscing libero
              </h3>
              <p className="text-dark mt-6 text-sm">
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad.
              </p>
              <a
                href="#"
                className="bg-primary hover:bg-primary-hover mt-8 inline-block rounded-full px-9 py-3 uppercase transition-colors duration-200 lg:mt-14"
              >
                Estimer
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-y-10 lg:mt-54 xl:flex-row">
          <Reveal className="flex w-full shrink-0 flex-col gap-5 sm:w-auto sm:flex-row">
            <Image
              src="/assets/engagements/2.webp"
              alt="Réalisation Ivoire Pool : piscine et aménagement extérieur"
              width={736}
              height={1311}
              sizes="(max-width: 640px) 100vw, 243px"
              className="h-60.25 w-full rounded-[20px] object-cover sm:w-60.75"
            />
            <Image
              src="/assets/engagements/3.webp"
              alt="Réalisation Ivoire Pool : piscine et aménagement extérieur"
              width={735}
              height={945}
              sizes="(max-width: 640px) 100vw, 243px"
              className="h-60.25 w-full rounded-[20px] object-cover sm:w-60.75"
            />
          </Reveal>

          <Reveal className="flex w-full flex-col items-start xl:w-auto xl:items-end" order={1}>
            <p className="xl:max-w-68 xl:text-end">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
              tempus urna at turpis condimentum lobortis.
            </p>

            <ul className="text-dark mt-8 flex flex-wrap gap-2.5 lg:mt-23.5 xl:justify-end">
              <li>
                <a
                  href="#"
                  className="hover:bg-white-hover inline-block rounded-full bg-white px-3.25 py-1.5 whitespace-nowrap transition-colors duration-200"
                >
                  Innovation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-white-hover inline-block rounded-full bg-white px-3.25 py-1.5 whitespace-nowrap transition-colors duration-200"
                >
                  Piscines sur mesure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-white-hover inline-block rounded-full bg-white px-3.25 py-1.5 whitespace-nowrap transition-colors duration-200"
                >
                  Confort et bien-être
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-white-hover inline-block rounded-full bg-white px-3.25 py-1.5 whitespace-nowrap transition-colors duration-200"
                >
                  Excellence durable
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-white-hover inline-block rounded-full bg-white px-3.25 py-1.5 whitespace-nowrap transition-colors duration-200"
                >
                  Design élégant et moderne
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-white-hover inline-block rounded-full bg-white px-3.25 py-1.5 whitespace-nowrap transition-colors duration-200"
                >
                  Entretien professionnel
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
