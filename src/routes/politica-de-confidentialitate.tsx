import { ArrowLeft } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politica de Confidențialitate (GDPR) — SEO Doctor" },
      {
        name: "description",
        content:
          "Vezi cum colectează, utilizează și protejează SEO Doctor datele personale, în conformitate cu cerințele GDPR.",
      },
      {
        property: "og:title",
        content: "Politica de Confidențialitate (GDPR) — SEO Doctor",
      },
      {
        property: "og:description",
        content:
          "Informații despre datele personale prelucrate de SEO Doctor, scopurile prelucrării și drepturile persoanelor vizate.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const privacySections = [
  {
    title: "1. Operatorul de date",
    paragraphs: [
      "SEO Doctor SRL este operatorul datelor personale colectate prin intermediul acestui site. Pentru orice solicitare legată de protecția datelor, ne puteți contacta la hello@seo-doctor.ro sau pe WhatsApp la +40 742 702 982.",
    ],
  },
  {
    title: "2. Ce date putem colecta",
    paragraphs: [
      "Putem colecta date precum numele, adresa de email, numărul de telefon, detalii despre companie, informații despre site-ul analizat și orice alte date pe care ni le transmiteți voluntar prin formularele de contact sau în cadrul colaborării.",
    ],
  },
  {
    title: "3. Scopurile prelucrării",
    paragraphs: [
      "Prelucrăm datele pentru a răspunde solicitărilor transmise, pentru a oferi servicii de audit și consultanță, pentru comunicări comerciale legate de cererile dumneavoastră, pentru emiterea documentelor fiscale și pentru îmbunătățirea serviciilor noastre.",
    ],
  },
  {
    title: "4. Temeiul legal",
    paragraphs: [
      "Prelucrarea datelor se realizează în baza executării unui contract sau a demersurilor precontractuale, a obligațiilor legale aplicabile, a interesului legitim sau, după caz, în baza consimțământului oferit de dumneavoastră.",
    ],
  },
  {
    title: "5. Durata stocării",
    paragraphs: [
      "Datele personale sunt păstrate doar atât timp cât este necesar pentru scopurile pentru care au fost colectate, pentru respectarea obligațiilor legale sau pentru apărarea drepturilor și intereselor legitime ale SEO Doctor SRL.",
    ],
  },
  {
    title: "6. Drepturile dumneavoastră",
    paragraphs: [
      "Aveți dreptul de acces, rectificare, ștergere, restricționare a prelucrării, opoziție, portabilitate a datelor și dreptul de a depune o plângere la autoritatea competentă, în condițiile prevăzute de legislația aplicabilă.",
    ],
  },
  {
    title: "7. Divulgarea către terți",
    paragraphs: [
      "Putem transmite datele către furnizori implicați în livrarea serviciilor noastre, precum procesatori de plăți, furnizori de hosting, soluții de analiză sau parteneri contractuali, numai în măsura necesară și cu protecții adecvate.",
    ],
  },
  {
    title: "8. Securitatea datelor",
    paragraphs: [
      "Aplicăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele personale împotriva accesului neautorizat, pierderii, divulgării sau modificării nepermise.",
    ],
  },
];

function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="legal-page-shell">
        <Link to="/" className="legal-back-link">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Înapoi la pagina principală
        </Link>

        <header className="legal-header">
          <h1 className="legal-title">Politica de Confidențialitate (GDPR)</h1>
        </header>

        <div className="legal-copy">
          {privacySections.map(({ title, paragraphs }) => (
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