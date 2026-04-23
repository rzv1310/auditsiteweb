import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";

type CookieSection = {
  title: string;
  paragraphs: ReactNode[];
  list?: ReactNode[];
  contact?: boolean;
};

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Politica Cookies — SEO Doctor" },
      {
        name: "description",
        content:
          "Află ce tipuri de cookie-uri folosește SEO Doctor, cum sunt utilizate și cum le poți gestiona.",
      },
      { property: "og:title", content: "Politica Cookies — SEO Doctor" },
      {
        property: "og:description",
        content:
          "Detalii despre cookie-urile esențiale, Stripe, Google Analytics și Google Ads, plus opțiunile tale de control.",
      },
    ],
  }),
  component: CookiesPolicyPage,
});

const cookieSections: CookieSection[] = [
  {
    title: "1. Ce sunt cookie-urile?",
    paragraphs: [
      "Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul dumneavoastră mobil atunci când vizitați un site web. Cookie-urile sunt utilizate pe scară largă pentru a face site-urile web să funcționeze mai eficient și pentru a furniza informații proprietarilor site-ului.",
    ],
  },
  {
    title: "2. Cookie-urile pe care le utilizăm",
    paragraphs: [
      "Site-ul nostru utilizează următoarele tipuri de cookie-uri:",
    ],
    list: [
      <>
        <strong>Cookie-uri esențiale</strong>
      </>,
      "Aceste cookie-uri sunt necesare pentru funcționarea site-ului nostru. Includ cookie-uri care vă permit să vă conectați în zonele securizate ale site-ului nostru sau să utilizați coșul de cumpărături.",
      <>
        <strong>Cookie-uri de la terți</strong>
      </>,
      "Stripe – pentru procesarea securizată a plăților. Stripe utilizează cookie-uri pentru a preveni fraudele și pentru a asigura securitatea tranzacțiilor.",
      "Google Analytics – pentru a înțelege cum utilizatorii interacționează cu site-ul nostru. Aceste cookie-uri colectează informații în mod anonim.",
      "Google Ads – pentru măsurarea conversiilor din campaniile publicitare și remarketing.",
    ],
  },
  {
    title: "3. Utilizarea cookie-urilor de publicitate",
    paragraphs: [
      "Utilizăm Google Ads ca unic serviciu de publicitate pentru a măsura eficiența campaniilor noastre și pentru remarketing. Nu vindem și nu partajăm datele dumneavoastră cu alte companii. În afara serviciilor menționate mai sus, nu utilizăm niciun alt cookie de la terți.",
    ],
  },
  {
    title: "4. Gestionarea cookie-urilor",
    paragraphs: [
      "Majoritatea browser-elor web vă permit să controlați cookie-urile prin setările lor. Rețineți că:",
    ],
    list: [
      "Dacă dezactivați cookie-urile esențiale, este posibil să nu puteți utiliza anumite funcții ale site-ului.",
      "Dacă dezactivați cookie-urile Stripe, nu veți putea efectua plăți pe site.",
      "Dacă dezactivați cookie-urile Google Analytics, nu vom putea îmbunătăți experiența dumneavoastră.",
      "Dacă dezactivați cookie-urile Google Ads, reclamele nu vor fi personalizate.",
    ],
  },
  {
    title: "5. Mai multe informații",
    paragraphs: [
      <>
        Pentru mai multe informații despre cookie-uri: {" "}
        <a className="legal-contact-link" href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">
          www.allaboutcookies.org
        </a>
      </>,
    ],
  },
  {
    title: "6. Contactați-ne",
    paragraphs: ["Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru:"],
    contact: true,
  },
  {
    title: "Vezi și:",
    paragraphs: [],
    list: [
      <Link to="/termeni-si-conditii" className="legal-contact-link">
        Termeni și Condiții
      </Link>,
      <Link to="/politica-de-confidentialitate" className="legal-contact-link">
        GDPR - Protecția Datelor
      </Link>,
    ],
  },
];

function CookiesPolicyPage() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-page-shell">
          <Link to="/" className="legal-back-link">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Înapoi la pagina principală
          </Link>

          <header className="legal-header">
            <h1 className="legal-title">Politica Cookies</h1>
          </header>

          <div className="legal-copy">
            {cookieSections.map(({ title, paragraphs, list, contact }) => (
              <section key={title} className="legal-section" aria-labelledby={title}>
                <h2 id={title} className="legal-section-title">
                  {title}
                </h2>

                {paragraphs.map((paragraph, index) => (
                  <p key={`${title}-paragraph-${index}`} className="legal-paragraph">
                    {paragraph}
                  </p>
                ))}

                {contact ? (
                  <p className="legal-contact-line">
                    Telefon:{" "}
                    <a className="legal-contact-link" href="https://wa.me/40742702982" target="_blank" rel="noreferrer">
                      +40 742 702 982
                    </a>
                  </p>
                ) : null}

                {list ? (
                  <ul className="legal-list">
                    {list.map((item, index) => (
                      <li key={`${title}-list-${index}`} className="legal-list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}