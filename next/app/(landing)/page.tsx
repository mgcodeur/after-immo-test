import Hero from "@/sections/landing/hero";
import About from "@/sections/landing/about";
import Showcase from "@/sections/landing/showcase";
import Services from "@/sections/landing/services";
import Engagements from "@/sections/landing/engagements";
import Portfolio from "@/sections/landing/portfolio";
import Testimonials from "@/sections/landing/testimonials";
import Faq from "@/sections/landing/faq";
import Features from "@/sections/landing/features";
import Video from "@/sections/landing/video";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Showcase />
        <Services />
        <Engagements />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Features />
        <Video />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ivoire Pool",
              "description": "Conception, construction, rénovation et entretien de piscines sur mesure à Abidjan.",
              "image": "/assets/hero-image.webp",
              "telephone": "+2250757027157",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "L2 rue des jardins, Cocody, 2e étage magasin Ixina",
                "addressLocality": "Abidjan",
                "addressCountry": "CI"
              },
              "areaServed": { "@type": "City", "name": "Abidjan" },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "20:30"
                }
              ]
            }`,
        }}
      />
    </>
  );
}
