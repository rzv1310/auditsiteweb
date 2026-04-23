import { ArrowLeft } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title: "Politica Cookies — SEO Doctor" },
      {
        name: "description",
        content:
          "Află cum folosește SEO Doctor cookie-uri și tehnologii similare pentru funcționarea, analiza și îmbunătățirea site-ului.",
      },
      { property: "og:title", content: "Politica Cookies — SEO Doctor" },
      {
        property: "og:description",
        content:
          "Detalii despre tipurile de cookie-uri folosite de SEO Doctor, scopul lor și opțiunile tale de control.",
      },
    ],
  }),
  component: CookiesPolicyPage,
});

const cookieSections = [
  {
    title: "1. Ce sunt cookie-urile",
    paragraphs: [
      "Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul dumneavoastră atunci când vizitați un site. Acestea ajută la funcționarea corectă a site-ului, la memorarea preferințelor și la înțelegerea modului în care vizitatorii folosesc paginile noastre.",
    ],
  },
  {
    title: "2. Cum folosim cookie-urile",
    paragraphs: [
      "SEO Doctor utilizează cookie-uri strict necesare pentru funcționarea site-ului, cookie-uri de analiză pentru a înțelege comportamentul utilizatorilor și, dacă este cazul, cookie-uri funcționale pentru a îmbunătăți experiența de navigare.",
      "Nu folosim cookie-uri într-un mod care să permită identificarea directă a unei persoane fără un temei legal și fără informarea corespunzătoare.",
    ],
  },
  {
    title: "3. Tipuri de cookie-uri utilizate",
    paragraphs: [
      "Pe site-ul nostru pot fi utilizate cookie-uri de sesiune, care expiră la închiderea browserului, și cookie-uri persistente, care rămân pe dispozitiv pentru o perioadă limitată sau până la ștergerea lor manuală.",
    ],
  },
  {
    title: "4. Controlul cookie-urilor",
    paragraphs: [
      "Puteți controla sau șterge cookie-urile din setările browserului dumneavoastră. Dezactivarea anumitor cookie-uri poate afecta funcționarea unor secțiuni ale site-ului sau calitatea experienței de utilizare.",
    ],
  },
  {
    title: "5. Cookie-uri terțe",
    paragraphs: [
      "Este posibil să folosim servicii furnizate de terți, precum platforme de analiză sau instrumente de marketing, care pot seta propriile cookie-uri conform politicilor lor de confidențialitate.",
    ],
  },
  {
    title: "6. Contact",
    paragraphs: [
      "Pentru întrebări legate de utilizarea cookie-urilor pe site-ul SEO Doctor, ne puteți contacta la adresa de email hello@seo-doctor.ro sau pe WhatsApp la +40 742 702 982.",
    ],
  },
];

function CookiesPolicyPage() {
  return (
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
          {cookieSections.map(({ title, paragraphs }) => (
            <section key={title} className="legal-section" aria-labelledby={title}>
              <h2 id={title} className="legal-section-title">
                {title}
              </h2>

              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="legal-paragraph">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}