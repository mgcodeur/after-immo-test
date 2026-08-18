import Image from "next/image";
import Reveal from "@/components/motion/reveal";

export default function Testimonials() {
  return (
    <section className="app-container pt-14 pb-10 lg:pt-25.25 lg:pb-34.5">
      <Reveal className="flex flex-col items-start justify-between gap-x-15 gap-y-8 lg:flex-row">
        <h2 className="text-center text-[24px] leading-8 font-medium uppercase sm:text-[28px] sm:leading-9 lg:max-w-145 lg:text-start lg:text-[36px] lg:leading-none">
          Torem ipsum dolor sit amet, consectetur adipiscing libero et velit interdum.
        </h2>

        <figure className="bg-primary w-full shrink-0 rounded-[10px] p-6.5 pb-12 text-white lg:w-111.75 lg:pb-19.25">
          <figcaption className="flex items-center gap-6">
            <Image
              src="/assets/testimonials/avatar.webp"
              alt="Portrait de Lorem ipsum Dolor Sit Amet, client d’Ivoire Pool"
              width={48}
              height={48}
              unoptimized
              className="h-12 w-12 rounded-full object-cover"
            />
            <cite className="text-[20px] font-medium not-italic lg:text-[24px]">Lorem ipsum Dolor Sit Amet</cite>
          </figcaption>
          <hr className="mt-3.75 mb-8.75 border-white/22" />
          <blockquote>
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
          </blockquote>
        </figure>
      </Reveal>

      <div className="mt-10 flex flex-col items-center justify-between gap-x-5 gap-y-8 lg:mt-13.75 lg:flex-row lg:items-end">
        <Reveal className="flex w-full flex-col items-center gap-5 sm:flex-row lg:w-auto">
          <Image
            src="/assets/testimonials/1.webp"
            alt="Piscine réalisée par Ivoire Pool pour un client"
            width={735}
            height={945}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 272px"
            className="h-59.5 w-full min-w-0 rounded-[10px] object-cover lg:w-68"
          />
          <Image
            src="/assets/testimonials/2.webp"
            alt="Piscine réalisée par Ivoire Pool pour un client"
            width={683}
            height={1024}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 272px"
            className="h-59.5 w-full min-w-0 rounded-[10px] object-cover lg:w-68"
          />
        </Reveal>
        <Reveal className="w-full lg:w-auto lg:max-w-84.5" delay={0.12}>
          <h3 className="text-center font-semibold lg:text-start">Nunc vulputate libero</h3>
          <p className="mt-6 text-center lg:text-start">
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
