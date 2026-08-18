import Image from "next/image";
import PlayIcon from "@/components/icons/play";
import Reveal from "@/components/motion/reveal";

export default function Video() {
  return (
    <section className="app-container pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-33.25 lg:pb-63.5">
      <Reveal>
        <h2 className="mx-auto text-center text-[26px] leading-8 sm:text-[32px] sm:leading-10 lg:max-w-122.75 lg:text-[40px] lg:leading-none">
          Sit amet, consectetur adipiscing libero et velit interdum.
        </h2>
      </Reveal>
      <p className="mx-auto mt-6 text-center md:mt-10 lg:mt-13.25 lg:max-w-123.5">
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
      </p>
      <Reveal delay={0.12}>
        <div
          data-youtube-facade
          data-video-id="eWnd3QQQKb0"
          data-video-title="Présentation d’Ivoire Pool"
          className="relative mx-auto mt-8 aspect-video w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:mt-10 lg:mt-20 lg:rounded-[45px]"
        >
          <Image
            src="/assets/video-poster.webp"
            alt="Aperçu de la vidéo de présentation d’Ivoire Pool"
            width={2000}
            height={1333}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            className="bg-dark/18 hover:bg-dark/35 group absolute inset-0 flex items-center justify-center transition-colors duration-200"
            aria-label="Lire la vidéo de présentation d’Ivoire Pool"
          >
            <PlayIcon className="h-12.5 w-12.5 transition-transform duration-300 group-hover:scale-110 sm:h-15.75 sm:w-15.75" />
          </button>
        </div>
      </Reveal>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Présentation d’Ivoire Pool",
        "thumbnailUrl": "/assets/video-poster.webp",
        "embedUrl": "https://www.youtube-nocookie.com/embed/eWnd3QQQKb0"
      }`,
        }}
      />
    </section>
  );
}
