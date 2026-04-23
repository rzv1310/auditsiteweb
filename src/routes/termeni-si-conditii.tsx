import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

type TermsSection = {
  title: string;
  paragraphs: ReactNode[];
  list?: ReactNode[];
  closing?: string;
  contact?: boolean;
};

const sections: TermsSection[] = [
  {
    title: "1. Introducere",
    paragraphs: [
      <>
        Bine ați venit la <Link to="/" className="legal-contact-link">SEO Doctor</Link>. Acești
        Termeni și Condiții guvernează utilizarea de către dumneavoastră a serviciului nostru,
        operat de SEO Doctor SRL, Cod Unic de Înregistrare 49345207, cu sediul în Str. Campia
        Libertății 33, sector 3, București.
      </>,
      "Prin accesarea sau utilizarea Serviciului, sunteți de acord să respectați acești Termeni. Dacă nu sunteți de acord cu vreo parte a termenilor, atunci nu aveți permisiunea de a accesa Serviciul.",
    ],
  },
  {
    title: "2. Definiții",
    paragraphs: [
      "Serviciu se referă la site-ul web și serviciile oferite de SEO Doctor.",
      'Termeni și Condiții (denumiți și "Termeni") reprezintă aceste Termeni și Condiții care formează întregul acord între dumneavoastră și SEO Doctor SRL cu privire la utilizarea Serviciului.',
      "Conținut se referă la conținutul cum ar fi text, imagini sau alte informații care pot fi postate, încărcate, legate de sau puse la dispoziție prin Serviciu.",
    ],
  },
  {
    title: "3. Conturile",
    paragraphs: [
      "Când creați un cont la noi, trebuie să ne furnizați informații care sunt corecte, complete și actuale în orice moment. Nerespectarea acestui lucru constituie o încălcare a Termenilor, care poate duce la încetarea imediată a contului dumneavoastră pe Serviciul nostru.",
      "Sunteți responsabil pentru protejarea parolei pe care o utilizați pentru a accesa Serviciul și pentru orice activități sau acțiuni sub parola dumneavoastră, indiferent dacă parola dumneavoastră este cu Serviciul nostru sau un serviciu terț.",
    ],
  },
  {
    title: "4. Proprietate intelectuală",
    paragraphs: [
      "Serviciul și conținutul său original, caracteristicile și funcționalitatea sunt și vor rămâne proprietatea exclusivă a SEO Doctor SRL și a licențiatorilor săi. Serviciul este protejat de drepturi de autor, mărci comerciale și alte legi atât din România, cât și din străinătate.",
      "Mărcile noastre comerciale și aspectul comercial nu pot fi utilizate în legătură cu niciun produs sau serviciu fără acordul prealabil scris al SEO Doctor SRL.",
    ],
  },
  {
    title: "5. Limitarea răspunderii",
    paragraphs: [
      "În niciun caz SEO Doctor SRL, directorii, angajații, partenerii, agenții, furnizorii sau afiliații săi nu vor fi răspunzători pentru orice daune indirecte, incidentale, speciale, exemplare sau de consecință, inclusiv fără limitare, pierderea de profit, date, utilizare, bunăvoință sau alte pierderi intangibile, rezultate din: (i) accesul dumneavoastră la sau utilizarea sau imposibilitatea de a accesa sau utiliza Serviciul; (ii) orice conduită sau conținut al oricărei terțe părți pe Serviciu; (iii) orice conținut obținut de la Serviciu; și (iv) acces neautorizat, utilizare sau modificare a transmisiilor sau conținutului dumneavoastră.",
    ],
  },
  {
    title: "6. Reziliere",
    paragraphs: [
      "Putem rezilia sau suspenda contul dumneavoastră imediat, fără notificare prealabilă sau răspundere, din orice motiv, inclusiv, fără limitare, dacă încălcați Termenii.",
      "La reziliere, dreptul dumneavoastră de a utiliza Serviciul va înceta imediat. Dacă doriți să vă reziliați contul, puteți pur și simplu să întrerupeți utilizarea Serviciului.",
    ],
  },
  {
    title: "7. Modificări ale Serviciului",
    paragraphs: [
      "Ne rezervăm dreptul de a retrage sau modifica Serviciul nostru, și orice serviciu sau material pe care îl furnizăm prin Serviciu, la discreția noastră fără notificare. Nu vom fi răspunzători dacă, din orice motiv, toate sau oricare dintre părțile Serviciului sunt indisponibile în orice moment sau pentru orice perioadă.",
    ],
  },
  {
    title: "8. Modificări ale Termenilor",
    paragraphs: [
      "Ne rezervăm dreptul, la discreția noastră, de a modifica sau înlocui acești Termeni în orice moment. Dacă o revizuire este materială, vom încerca să oferim cel puțin o notificare de 30 de zile înainte ca orice termeni noi să intre în vigoare.",
      "Continuând să accesați sau utilizați Serviciul nostru după ce aceste revizuiri devin efective, sunteți de acord să fiți legat de termenii revizuiți. Dacă nu sunteți de acord cu noii termeni, vă rugăm să încetați utilizarea Serviciului.",
    ],
  },
  {
    title: "9. Politica de rambursare",
    paragraphs: [
      "SEO Doctor SRL oferă servicii digitale care implică alocarea imediată de resurse și începerea muncii după procesarea plății. În consecință, toate plățile efectuate pentru serviciile noastre sunt nerambursabile.",
      "După achiziționarea unui serviciu și confirmarea plății, echipa noastră începe să lucreze la implementarea soluțiilor personalizate pentru afacerea dumneavoastră. Datorită naturii acestor servicii și a resurselor dedicate, nu putem oferi rambursări pentru serviciile deja achiziționate, indiferent de stadiul implementării sau de rezultate.",
      "Vă recomandăm să analizați cu atenție descrierile serviciilor și să ne contactați pentru orice întrebări înainte de a face o achiziție. Suntem dedicați să oferim valoare reală pentru investiția dumneavoastră și vom lucra pentru a asigura satisfacția dumneavoastră în limitele serviciului achiziționat.",
    ],
  },
  {
    title: "10. Legea aplicabilă",
    paragraphs: [
      "Acești Termeni vor fi guvernați și interpretați în conformitate cu legile României, fără a ține cont de prevederile sale privind conflictul de legi.",
      "Incapacitatea noastră de a aplica orice drept sau prevedere a acestor Termeni nu va fi considerată o renunțare la aceste drepturi. Dacă orice prevedere a acestor Termeni este considerată a fi invalidă sau inaplicabilă de către o instanță, prevederile rămase ale acestor Termeni vor rămâne în vigoare.",
    ],
  },
  {
    title: "11. Contactați-ne",
    contact: true,
    paragraphs: ["Dacă aveți întrebări despre acești Termeni, vă rugăm să ne contactați:"],
  },
  {
    title: "12. Descrierea serviciilor și obligațiile clientului",
    paragraphs: [
      "SEO Doctor SRL oferă servicii de optimizare pentru motoare de căutare (SEO), marketing digital, audit tehnic al site-urilor web și consultanță strategică online. Serviciile sunt prestate conform specificațiilor agreate la momentul achiziției și pot include, fără a se limita la: cercetare de cuvinte cheie, optimizare on-page și off-page, creare de conținut optimizat, link building și raportare periodică.",
      "Clientul se obligă să furnizeze accesul necesar la site-ul web, conturile de analytics, Search Console și orice alte platforme relevante pentru prestarea serviciilor. Întârzierile în furnizarea accesului sau a materialelor solicitate pot afecta termenele de livrare, fără ca SEO Doctor SRL să fie responsabil pentru aceste întârzieri.",
    ],
  },
  {
    title: "13. Condiții de plată",
    paragraphs: [
      "Plățile pentru serviciile SEO Doctor se efectuează conform facturii emise, prin transfer bancar sau prin intermediul platformei de plăți online Stripe. Moneda de plată este RON sau EUR, conform ofertei acceptate.",
      "Facturile sunt scadente în termen de 5 zile lucrătoare de la emitere, cu excepția cazului în care se convine altfel în scris. Neplata la termen poate duce la suspendarea temporară a serviciilor până la regularizarea situației financiare, fără ca aceasta să constituie o reziliere a contractului.",
    ],
  },
  {
    title: "14. Forță majoră",
    paragraphs: [
      "Niciuna dintre părți nu va fi răspunzătoare pentru neexecutarea sau executarea cu întârziere a obligațiilor sale dacă aceasta este cauzată de un eveniment de forță majoră. Prin forță majoră se înțelege orice eveniment imprevizibil și insurmontabil, inclusiv, dar fără a se limita la: dezastre naturale, pandemii, modificări legislative majore, întreruperi ale serviciilor de internet sau hosting, atacuri cibernetice sau orice alt eveniment în afara controlului rezonabil al părților.",
      "Partea afectată de forța majoră va notifica cealaltă parte în termen de 5 zile lucrătoare de la apariția evenimentului și va depune toate eforturile rezonabile pentru a minimiza impactul asupra serviciilor contractate.",
    ],
  },
  {
    title: "15. Confidențialitate",
    paragraphs: [
      "Ambele părți se obligă să păstreze confidențialitatea tuturor informațiilor sensibile obținute în cadrul colaborării, inclusiv, dar fără a se limita la: date de acces, strategii de marketing, date financiare, informații despre clienți și orice alte informații desemnate ca fiind confidențiale.",
      "Obligația de confidențialitate se menține pe toată durata colaborării și pentru o perioadă de 2 ani după încetarea acesteia, indiferent de motivul încetării. Încălcarea acestei obligații poate atrage răspunderea civilă conform legislației române în vigoare.",
    ],
  },
  {
    title: "16. Legătura cu alte politici",
    paragraphs: [
      "Acești Termeni și Condiții trebuie citiți împreună cu următoarele politici ale SEO Doctor, care fac parte integrantă din prezentul acord:",
    ],
    list: [
      <>
        <Link to="/politica-cookies" className="legal-contact-link">
          Politica de Cookies
        </Link>{" "}
        – descrie modul în care utilizăm cookie-urile și tehnologiile similare pe site-ul nostru.
      </>,
      <>
        <Link to="/politica-de-confidentialitate" className="legal-contact-link">
          Politica de Confidențialitate (GDPR)
        </Link>{" "}
        – detaliază modul în care colectăm, utilizăm și protejăm datele dumneavoastră personale,
        în conformitate cu Regulamentul General privind Protecția Datelor.
      </>,
    ],
    closing:
      "Prin acceptarea acestor Termeni și Condiții, confirmați că ați citit și înțeles toate politicile menționate mai sus.",
  },
];

export const Route = createFileRoute("/termeni-si-conditii")({
  head: () => ({
    meta: [
      { title: "Termeni și Condiții — SEO Doctor" },
      {
        name: "description",
        content:
          "Citește Termenii și Condițiile SEO Doctor pentru utilizarea serviciilor de audit website și consultanță digitală.",
      },
      { property: "og:title", content: "Termeni și Condiții — SEO Doctor" },
      {
        property: "og:description",
        content:
          "Detalii despre utilizarea serviciilor SEO Doctor, condițiile comerciale, confidențialitate și contact.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-page-shell">
        <Link to="/" className="legal-back-link">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Înapoi la pagina principală
        </Link>

        <header className="legal-header">
          <h1 className="legal-title">Termeni și Condiții</h1>
        </header>

        <div className="legal-copy">
          {sections.map(({ title, paragraphs, list, closing, contact }) => (
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

              {closing ? <p className="legal-paragraph">{closing}</p> : null}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}