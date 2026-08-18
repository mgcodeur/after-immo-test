import Image from "next/image";
import FacebookIcon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/instagram";
import MapPinIcon from "@/components/icons/map-pin";
import PhoneIcon from "@/components/icons/phone";

export default function Footer() {
  return (
    <footer className="bg-primary pt-14 pb-12 text-white md:pt-18 md:pb-14 lg:pt-23.25 lg:pb-18">
      <div className="border-y border-white pt-10 pb-12 md:pt-14 md:pb-20 lg:pt-16.5 lg:pb-27">
        <div className="app-container flex flex-col gap-y-10 lg:flex-row lg:items-start lg:gap-y-0">
          <div className="flex-1">
            <h3 id="footer-liens-utiles" className="text-[20px] font-medium uppercase lg:text-[24px]">
              Liens utiles
            </h3>
            <nav aria-labelledby="footer-liens-utiles">
              <ul className="mt-6 flex flex-col gap-5 lg:mt-11">
                <li>
                  <a href="#" className="text-[17px] leading-6 hover:underline lg:text-[20px] lg:leading-none">
                    Estimer un projet
                  </a>
                </li>
                <li>
                  <a
                    href="#realisations"
                    className="text-[17px] leading-6 hover:underline lg:text-[20px] lg:leading-none"
                  >
                    Nos réalisations
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-[17px] leading-6 hover:underline lg:text-[20px] lg:leading-none"
                  >
                    Nos services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[17px] leading-6 hover:underline lg:text-[20px] lg:leading-none">
                    Nous contacter
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-1">
            <h3 id="footer-pages-legales" className="text-[20px] font-medium uppercase lg:text-[24px]">
              Pages légales
            </h3>
            <nav aria-labelledby="footer-pages-legales">
              <ul className="mt-6 flex flex-col gap-5 lg:mt-11">
                <li>
                  <a href="#" className="text-[17px] leading-6 hover:underline lg:text-[20px] lg:leading-none">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[17px] leading-6 hover:underline lg:text-[20px] lg:leading-none">
                    Conditions générales d’utilisation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[17px] leading-6 hover:underline lg:text-[20px] lg:leading-none">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:max-w-86.5">
            <a href="#accueil" aria-label="Ivoire Pool, retour à l’accueil">
              <Image src="/assets/logo-circle.webp" alt="Ivoire Pool" width={74} height={74} unoptimized />
            </a>
            <p className="mt-4.5">
              Ivoire Pool conçoit, construit et entretient des piscines modernes et sur mesure en Côte d’Ivoire,
              alliant qualité, durabilité et design personnalisé pour chaque client.
            </p>
            <hr className="mt-6 mb-5.25 border-white" />
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3.5">
                <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-lg border-[0.5px] border-white bg-white/24">
                  <MapPinIcon />
                </div>
                <address className="text-[13px] not-italic">
                  L2 rue des jardins, Cocody 2e étage magasin Ixina, Abidjan, Côte d’Ivoire
                </address>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-lg border-[0.5px] border-white bg-white/24">
                  <PhoneIcon />
                </div>
                <div className="text-[13px]">
                  Téléphone :
                  <a href="tel:+2250757027157" className="hover:underline">
                    +225 07 57 02 71 57
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="app-container mb-8 pt-10 lg:mb-12.5 lg:pt-13.75">
        <div>
          <Image
            src="/assets/ivoire-pool.webp"
            alt="Ivoire Pool"
            width={1349}
            height={185}
            sizes="100vw"
            className="w-full"
          />
          <p className="text-center">© Ivoire Pool. Tous droits réservés</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2.5 border-t border-white pt-8 lg:pt-10.25">
        <a
          href="#"
          aria-label="Ivoire Pool sur Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/23 p-2.5 ring ring-white backdrop-blur-[20px] transition-colors duration-200 hover:bg-white/36"
        >
          <InstagramIcon />
        </a>
        <a
          href="#"
          aria-label="Ivoire Pool sur Facebook"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/23 p-2.5 ring ring-white backdrop-blur-[20px] transition-colors duration-200 hover:bg-white/36"
        >
          <FacebookIcon />
        </a>
      </div>
    </footer>
  );
}
