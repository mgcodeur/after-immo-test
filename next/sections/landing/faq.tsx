import Image from "next/image";
import ChevronDownIcon from "@/components/icons/chevron-down";
import Reveal from "@/components/motion/reveal";

export default function Faq() {
  return (
    <section id="faq" className="app-container flex flex-col gap-5 text-white lg:flex-row">
      <Reveal className="bg-secondary w-full rounded-[30px] px-6 py-8 sm:px-10 lg:px-15 lg:py-10">
        <h2 className="w-full text-[24px] leading-8 sm:text-[28px] sm:leading-9 lg:max-w-93 lg:text-[32px] lg:leading-none">
          Vous avez des questions ? Nous sommes là pour vous aider .
        </h2>
        <p className="mt-6 w-full lg:max-w-107.75">
          Consultez les questions les plus fréquemment posées par nos clients. Vous avez encore des questions ?
          Contactez nous directement
        </p>
        <ul className="mt-8 flex -space-x-5.5">
          <li>
            <a href="#">
              <Image
                src="/assets/faq/1.webp"
                alt="Conseiller du service client Ivoire Pool"
                width={626}
                height={416}
                sizes="84px"
                className="border-secondary h-14 w-14 rounded-full border-2 object-cover"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/assets/faq/2.webp"
                alt="Conseiller du service client Ivoire Pool"
                width={417}
                height={626}
                sizes="56px"
                className="border-secondary h-14 w-14 rounded-full border-2 object-cover"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/assets/faq/3.webp"
                alt="Conseiller du service client Ivoire Pool"
                width={417}
                height={626}
                sizes="56px"
                className="border-secondary h-14 w-14 rounded-full border-2 object-cover"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/assets/faq/4.webp"
                alt="Conseiller du service client Ivoire Pool"
                width={626}
                height={447}
                sizes="78px"
                className="border-secondary h-14 w-14 rounded-full border-2 object-cover"
              />
            </a>
          </li>
        </ul>
        <p className="mt-6 w-full text-[13px] font-medium lg:max-w-84.5">
          Notre service client est disponible du lundi au vendredi de 8h à 20h30.
          <br />
          Délai de réponse moyen : 24 h
        </p>
        <a
          href="#"
          className="text-secondary hover:bg-white-hover mt-8 inline-block rounded-full bg-white px-9 py-4.25 font-medium transition-colors duration-200 lg:mt-12"
        >
          Contacter
        </a>
      </Reveal>

      <Reveal className="bg-dark w-full rounded-[30px] px-6 py-10 sm:px-10 lg:px-15 lg:py-20" delay={0.12}>
        <div className="mb-9.5">
          <div className="flex items-center justify-between gap-6 lg:gap-12.5">
            <h3 className="text-[17px] leading-6 font-medium lg:text-[20px] lg:leading-none">
              Combien de temps dure la construction d’une piscine ?
            </h3>
            <button
              type="button"
              aria-expanded="false"
              aria-label="Afficher la réponse : Combien de temps dure la construction d’une piscine ?"
              className="text-dark hover:bg-white-hover flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-colors duration-200"
            >
              <ChevronDownIcon />
            </button>
          </div>
          <hr className="mt-7.5 border-t border-white/50" />
        </div>
        <div className="mb-9.5">
          <div className="flex items-center justify-between gap-6 lg:gap-12.5">
            <h3 className="text-[17px] leading-6 font-medium lg:text-[20px] lg:leading-none">
              Proposez-vous des piscines sur mesure ?
            </h3>
            <button
              type="button"
              aria-expanded="false"
              aria-label="Afficher la réponse : Proposez-vous des piscines sur mesure ?"
              className="text-dark hover:bg-white-hover flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-colors duration-200"
            >
              <ChevronDownIcon />
            </button>
          </div>
          <hr className="mt-7.5 border-t border-white/50" />
        </div>
        <div className="mb-9.5">
          <div className="flex items-center justify-between gap-6 lg:gap-12.5">
            <h3 className="text-[17px] leading-6 font-medium lg:text-[20px] lg:leading-none">
              Quel type de piscine est le plus adapté à mon terrain ?
            </h3>
            <button
              type="button"
              aria-expanded="false"
              aria-label="Afficher la réponse : Quel type de piscine est le plus adapté à mon terrain ?"
              className="text-dark hover:bg-white-hover flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-colors duration-200"
            >
              <ChevronDownIcon />
            </button>
          </div>
          <hr className="mt-7.5 border-t border-white/50" />
        </div>
        <div>
          <div className="flex items-center justify-between gap-6 lg:gap-12.5">
            <h3 className="text-[17px] leading-6 font-medium lg:text-[20px] lg:leading-none">
              Proposez-vous des éclairages LED pour piscine ?
            </h3>
            <button
              type="button"
              aria-expanded="false"
              aria-label="Afficher la réponse : Proposez-vous des éclairages LED pour piscine ?"
              className="text-dark hover:bg-white-hover flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-colors duration-200"
            >
              <ChevronDownIcon />
            </button>
          </div>
          <hr className="mt-7.5 border-t border-white/50" />
        </div>
      </Reveal>
    </section>
  );
}
