import Image from "next/image";
import ParallaxItem from "@/components/motion/parallax-item";
import HexagonMarkIcon from "@/components/icons/hexagon-mark";
import SunWavesIcon from "@/components/icons/sun-waves";

export default function Hero() {
  return (
    <section id="accueil" className="relative text-white lg:min-h-256">
      <Image
        src="/assets/hero-image.webp"
        alt=""
        fill
        priority
        quality={85}
        sizes="(max-width: 1024px) 1408px, 100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/7" />
      <div className="app-container relative min-h-[inherit] pt-28 lg:pt-40.5">
        <div className="flex flex-col items-start justify-between lg:flex-row">
          <ParallaxItem range="scroll-out" className="w-full lg:w-auto lg:max-w-134.5" distance={-60}>
            <div className="enter [animation-delay:150ms]">
              <h1 className="font-inter text-center text-[44px] leading-11 font-light sm:text-[64px] sm:leading-16 lg:text-start lg:text-[96px] lg:leading-24">
                Votre piscine sur mesure
              </h1>
            </div>
          </ParallaxItem>

          <ParallaxItem range="scroll-out" className="mt-8 w-full lg:mt-12 lg:w-auto lg:max-w-69.75" distance={-110}>
            <div className="enter [animation-delay:240ms]">
              <p className="text-center lg:text-start">
                Entre Piscinelle et Compass Pools haut de gamme africain, tropical luxe, unique sur le marché ivoirien.
                Pas une piscine française génériques. Une ambiance villa luxe Abidjan.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="button"
                  className="bg-primary hover:bg-primary-hover mt-8 rounded-full border border-white px-6.75 py-[8.5px] uppercase transition-colors duration-200 lg:mt-12.5"
                >
                  Estimer
                </button>
              </div>
            </div>
          </ParallaxItem>
        </div>

        <ParallaxItem
          range="scroll-out"
          className="mt-14 flex flex-col items-center justify-between lg:mt-25 lg:flex-row lg:items-end"
          distance={-170}
        >
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <div className="text-primary enter w-full max-w-90 rounded-[20px] bg-white px-4.25 py-4.75 [animation-delay:330ms] sm:w-57.5">
              <div className="mb-10 sm:mb-16.25">
                <HexagonMarkIcon />
              </div>
              <div className="text-[48px] leading-14.5">+435</div>
              <p className="mt-3 font-medium">Lorem Ipsum</p>
            </div>
            <div className="bg-dark enter w-full max-w-90 rounded-[20px] px-4.25 py-4.75 text-white ring-[0.3px] ring-white [animation-delay:420ms] sm:w-57.5">
              <div className="mb-10 flex items-center justify-between sm:mb-13.25">
                <p className="text-sm font-medium">Sit amet Dolor Sit Elit Vulputate</p>
                <div className="text-secondary">
                  <SunWavesIcon />
                </div>
              </div>
              <div className="text-[48px] leading-14.5">+752</div>
              <p className="mt-3 font-medium">Lorem Ipsum</p>
            </div>
          </div>

          <div className="enter [animation-delay:510ms] lg:min-w-69.75">
            <div className="mt-5 inline-flex w-60.5 items-center gap-x-2.25 rounded-full bg-white/10 py-1.5 ps-2 pe-4.75 ring-[0.3px] ring-white backdrop-blur-[10px] lg:mt-2.25">
              <ul className="flex">
                <li>
                  <Image
                    src="/assets/clients/1.webp"
                    alt="Portrait d’un client d’Ivoire Pool"
                    width={45}
                    height={45}
                    className="border-primary h-11.25 w-11.25 rounded-full border object-cover"
                  />
                </li>
                <li className="-ml-4">
                  <Image
                    src="/assets/clients/2.webp"
                    alt="Portrait d’une cliente d’Ivoire Pool"
                    width={45}
                    height={45}
                    className="border-primary h-11.25 w-11.25 rounded-full border object-cover"
                  />
                </li>
                <li className="-ml-4">
                  <Image
                    src="/assets/clients/3.webp"
                    alt="Portrait d’un client d’Ivoire Pool"
                    width={45}
                    height={45}
                    className="border-primary h-11.25 w-11.25 rounded-full border object-cover"
                  />
                </li>
              </ul>
              <div className="font-semibold">
                <div>+1000</div>
                <div className="mt-0.75">Client satisfait</div>
              </div>
            </div>
          </div>
        </ParallaxItem>

        <ParallaxItem range="scroll-out" className="mt-16 lg:mt-37.25" distance={-220}>
          <div className="enter [animation-delay:600ms]">
            <Image
              src="/assets/ivoire-pool.webp"
              alt="Ivoire Pool"
              width={1349}
              height={185}
              sizes="100vw"
              className="w-full max-w-full"
            />
          </div>
        </ParallaxItem>
      </div>
    </section>
  );
}
