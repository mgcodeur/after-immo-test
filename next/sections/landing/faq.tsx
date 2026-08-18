import Image from "next/image";
import Reveal from "@/components/motion/reveal";
import Accordion from "@/components/ui/accordion";
import type { AccordionItem } from "@/types/ui/accordion";

export default function Faq() {
  const questions: AccordionItem[] = [
    {
      id: "duree-construction",
      title: "Combien de temps dure la construction d’une piscine ?",
      content:
        "Comptez huit à douze semaines entre le premier coup de pelle et la mise en eau, selon la nature du terrain et les finitions retenues. Un planning détaillé vous est remis dès la validation de l’étude technique.",
    },
    {
      id: "sur-mesure",
      title: "Proposez-vous des piscines sur mesure ?",
      content:
        "Chaque bassin est dessiné à partir de votre terrain, de vos usages et de votre budget. Forme libre, couloir de nage, plage immergée ou débordement : nous construisons le projet que vous avez en tête.",
    },
    {
      id: "type-de-piscine",
      title: "Quel type de piscine est le plus adapté à mon terrain ?",
      content:
        "Tout dépend de la nature du sol, de la pente et de l’accès au chantier. Une visite gratuite nous permet de vous orienter vers le béton, la coque ou le bloc à bancher, avec le coût et les délais de chaque solution.",
    },
    {
      id: "eclairage-led",
      title: "Proposez-vous des éclairages LED pour piscine ?",
      content:
        "Nous installons des projecteurs LED blancs ou multicolores, pilotables depuis votre téléphone. Ils s’intègrent aussi bien à une piscine neuve qu’à la rénovation d’un bassin existant.",
    },
  ];

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

      <Reveal className="bg-dark w-full rounded-[30px] px-6 py-10 sm:px-10 lg:px-15 lg:py-20" order={1}>
        <Accordion items={questions} />
      </Reveal>
    </section>
  );
}
