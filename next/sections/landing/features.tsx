import BlobCirclesIcon from "@/components/icons/blob-circles";
import BlobEllipsesIcon from "@/components/icons/blob-ellipses";
import TrolleyIcon from "@/components/icons/trolley";
import ParallaxItem from "@/components/motion/parallax-item";
import Reveal from "@/components/motion/reveal";

export default function Features() {
  return (
    <section className="app-container mt-20 md:mt-32 lg:mt-65">
      <div
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.34)), url('/assets/features/1.webp')",
        }}
        className="rounded-[45px] bg-cover bg-no-repeat px-6 pt-16 pb-12 sm:px-10 md:pt-24 md:pb-20 lg:px-15 lg:pt-36.25 lg:pb-33"
      >
        <ParallaxItem distance={-40}>
          <Reveal>
            <h2 className="text-[30px] leading-9 text-white sm:text-[40px] sm:leading-11 md:text-[48px] md:leading-14 lg:max-w-176.5 lg:text-[64px] lg:leading-none">
              Eau azurée contrastant avec le ciel ivoirien
            </h2>
          </Reveal>
        </ParallaxItem>
        <ParallaxItem distance={-90}>
          <Reveal order={1}>
            <ul className="mt-16 flex flex-col gap-5 md:mt-28 lg:mt-60 xl:flex-row xl:items-end">
              <li className="relative w-full overflow-hidden rounded-[30px] bg-white px-6 py-6 sm:px-8 sm:py-7">
                <div className="absolute top-0 right-0 text-primary">
                  <BlobCirclesIcon />
                </div>
                <div className="bg-primary inline-flex h-14 w-14 items-center justify-center rounded-xl text-white">
                  <TrolleyIcon />
                </div>
                <h3 className="mt-10 text-[20px] leading-7 sm:text-[24px] sm:leading-8 lg:mt-16.25 lg:text-[32px] lg:leading-none">
                  Conception d’espaces aquatiques élégants et lumineux
                </h3>
                <a
                  href="#"
                  className="bg-primary hover:bg-primary-hover mt-6 inline-block rounded-[10px] px-8 py-4 text-white uppercase transition-colors duration-200 lg:mt-9"
                >
                  Faire une estimation
                </a>
              </li>
              <li className="relative w-full overflow-hidden rounded-[30px] bg-white px-6 py-6 sm:px-8 sm:py-7">
                <div className="absolute top-0 right-0 text-secondary">
                  <BlobEllipsesIcon />
                </div>
                <div className="bg-secondary inline-flex h-14 w-14 items-center justify-center rounded-xl text-white">
                  <TrolleyIcon />
                </div>
                <h3 className="mt-10 text-[20px] leading-7 sm:text-[24px] sm:leading-8 lg:mt-16.25 lg:text-[32px] lg:leading-none">
                  Installation d’équipements premium pour piscines modernes
                </h3>
              </li>
              <li className="relative w-full overflow-hidden rounded-[30px] bg-white px-6 py-6 sm:px-8 sm:py-7">
                <div className="absolute top-0 right-0 text-secondary">
                  <BlobEllipsesIcon />
                </div>
                <div className="bg-secondary inline-flex h-14 w-14 items-center justify-center rounded-xl text-white">
                  <TrolleyIcon />
                </div>
                <h3 className="mt-10 text-[20px] leading-7 sm:text-[24px] sm:leading-8 lg:mt-16.25 lg:text-[32px] lg:leading-none">
                  Aménagement de piscines élégants et haut de gamme
                </h3>
              </li>
            </ul>
          </Reveal>
        </ParallaxItem>
      </div>
    </section>
  );
}
