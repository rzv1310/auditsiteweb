import { ArrowLeft } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/politica-de-confidentialitate")({
  head: () => ({
    meta: [
      { title: "GDPR - Protecția Datelor — SEO Doctor" },
      {
        name: "description",
        content:
          "Află cum respectă SEO Doctor cerințele GDPR, ce date personale prelucrează și care sunt drepturile tale.",
      },
      {
        property: "og:title",
        content: "GDPR - Protecția Datelor — SEO Doctor",
      },
      {
        property: "og:description",
        content:
          "Detalii despre conformitatea GDPR, drepturile persoanelor vizate și modul în care SEO Doctor prelucrează datele personale.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const privacySections = [
  {
    title: "1. Conformitate GDPR",
    paragraphs: [
      <>
        <Link to="/" className="legal-contact-link">
          SEO Doctor
        </Link>{" "}
        SRL respectă Regulamentul General privind Protecția Datelor (GDPR) al Uniunii Europene,
        care a intrat în vigoare la 25 mai 2018. Această secțiune GDPR face parte din Politica
        noastră de Confidențialitate și explică drepturile dumneavoastră în ceea ce privește
        datele dumneavoastră personale și modul în care ne conformăm acestor reglementări.
      </>,
    ],
  },
  {
    title: "2. Operatorul de date",
    paragraphs: [
      'SEO Doctor SRL acționează în calitate de "operator de date" pentru orice date personale colectate prin Serviciul nostru.',
      "Nume: SEO Doctor SRL",
      "CUI: 49345207",
      "Adresă: Str. Campia Libertății 33, sector 3, București",
    ],
    contact: true,
  },
  {
    title: "3. Temeiurile juridice pentru prelucrare",
    paragraphs: [
      "Prelucrăm datele dumneavoastră personale numai atunci când avem un temei juridic valid pentru a face acest lucru:",
    ],
    list: [
      "Consimțământul – Când ne-ați dat permisiunea explicită.",
      "Executarea unui contract – Când prelucrarea este necesară pentru îndeplinirea unui contract.",
      "Obligație legală – Când prelucrarea este necesară pentru a respecta o obligație legală.",
      "Interese legitime – Când prelucrarea este necesară pentru interesele noastre legitime.",
    ],
  },
  {
    title: "4. Drepturile dumneavoastră GDPR",
    paragraphs: [
      "Conform GDPR, aveți următoarele drepturi:",
    ],
    list: [
      "Dreptul de a fi informat – informații clare despre utilizarea datelor.",
      "Dreptul de acces – confirmarea și accesul la datele personale.",
      "Dreptul la rectificare – corectarea datelor inexacte.",
      "Dreptul la ștergere – ștergerea datelor în anumite circumstanțe.",
      "Dreptul la restricționarea prelucrării",
      "Dreptul la portabilitatea datelor",
      "Dreptul la opoziție",
      "Drepturi legate de luarea deciziilor automatizate",
    ],
  },
  {
    title: "5. Exercitarea drepturilor dumneavoastră",
    paragraphs: [
      "Pentru a vă exercita drepturile GDPR, vă rugăm să ne contactați. Vom răspunde în termen de o lună de la primirea solicitării. Acest termen poate fi prelungit cu două luni suplimentare dacă este necesar.",
    ],
  },
  {
    title: "6. Transfer de date în afara UE/SEE",
    paragraphs: [
      "Dacă transferăm datele dumneavoastră personale în afara Uniunii Europene sau Spațiului Economic European, ne asigurăm că transferul este efectuat în conformitate cu GDPR, inclusiv utilizarea clauzelor contractuale standard aprobate de Comisia Europeană.",
    ],
  },
  {
    title: "7. Încălcări ale securității datelor",
    paragraphs: [
      "În cazul unei încălcări a securității datelor care prezintă un risc pentru drepturile și libertățile dumneavoastră, vom notifica autoritatea competentă în termen de 72 de ore. Dacă riscul este ridicat, vă vom notifica direct și fără întârzieri nejustificate.",
    ],
  },
  {
    title: "8. Autoritatea de supraveghere",
    paragraphs: [
      "Dacă considerați că prelucrarea datelor încalcă prevederile GDPR, aveți dreptul de a depune o plângere la:",
      "ANSPDCP – B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București – www.dataprotection.ro",
    ],
  },
  {
    title: "10. Datele personale pe care le colectăm",
    list: [
      "Nume și prenume",
      "Adresă de e-mail",
      "Număr de telefon",
      "Adresa IP",
      "Date de navigare (pagini vizitate, durata vizitei, tipul browserului)",
      "Date de facturare (nume, adresă, CUI)",
      "Orice alte date furnizate voluntar prin formulare de contact",
    ],
    paragraphs: [],
  },
  {
    title: "11. Scopurile prelucrării datelor",
    list: [
      "Furnizarea și îmbunătățirea serviciilor de SEO și marketing digital",
      "Comunicarea în legătură cu serviciile contractate",
      "Emiterea facturilor și gestionarea plăților",
      "Analiza traficului pe site (Google Analytics)",
      "Măsurarea eficienței campaniilor publicitare (Google Ads)",
      "Respectarea obligațiilor legale și fiscale",
      "Protecția împotriva fraudei (Stripe)",
    ],
    paragraphs: [],
  },
  {
    title: "12. Servicii terțe care prelucrează date",
    list: [
      "Google Analytics – date anonimizate despre trafic. Temeiul juridic: interes legitim.",
      "Google Ads – cookie-uri pentru conversii și remarketing. Temeiul juridic: consimțământ.",
      "Stripe – procesarea plăților. Temeiul juridic: executarea contractului.",
    ],
    paragraphs: ["Nu vindem și nu partajăm datele dumneavoastră cu alte terțe părți."],
  },
  {
    title: "13. Perioada de retenție a datelor",
    list: [
      "Date de cont și facturare: durata contractuală + 5 ani",
      "Date de navigare și analytics: maximum 26 de luni",
      "Date de marketing (Google Ads): până la retragerea consimțământului sau max. 540 de zile",
      "Date din formulare de contact: maximum 12 luni de la ultima comunicare",
    ],
    paragraphs: [],
  },
  {
    title: "14. Legătura cu alte politici",
    paragraphs: ["Prezenta Politică de Confidențialitate trebuie citită împreună cu:"],
    list: [
      <Link to="/politica-cookies" className="legal-contact-link">
        Politica de Cookies
      </Link>,
      <Link to="/termeni-si-conditii" className="legal-contact-link">
        Termenii și Condițiile
      </Link>,
    ],
  },
  {
    title: "15. Contactați-ne",
    contact: true,
    paragraphs: ["Dacă aveți întrebări sau doriți să vă exercitați drepturile GDPR:"],
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <main className="legal-page">
        <div className="legal-page-shell">
          <Link to="/" className="legal-back-link">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Înapoi la pagina principală
          </Link>

          <header className="legal-header">
            <h1 className="legal-title">GDPR - Protecția Datelor</h1>
          </header>

          <div className="legal-copy">
            {privacySections.map(({ title, paragraphs, list, contact }) => (
              <section key={title} className="legal-section" aria-labelledby={title}>
                <h2 id={title} className="legal-section-title">
                  {title}
                </h2>

                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="legal-paragraph">
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