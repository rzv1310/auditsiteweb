import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { ArrowRight, Eye, Search, Shield, Zap } from "lucide-react";

import { HeroAuditPreview } from "@/components/hero-audit-preview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Audit Website — Optimizează conversiile" },
      {
        name: "description",
        content:
          "Landing page pentru serviciul de audit website: identifică rapid blocajele de SEO, viteză, securitate și accesibilitate.",
      },
      { property: "og:title", content: "Audit Website — Optimizează conversiile" },
      {
        property: "og:description",
        content:
          "Descoperă unde pierde clienți site-ul tău și ce trebuie reparat mai întâi, în ordinea corectă.",
      },
    ],
  }),
  component: Index,
});

const auditPillars = [
  {
    icon: Search,
    title: "Ei apar primii în Google",
  },
  {
    icon: Zap,
    title: "Site-ul lor se încarcă mai repede",
  },
  {
    icon: Shield,
    title: "Ei nu au erori de securitate",
  },
  {
    icon: Eye,
    title: "Ei au conținut accesibil",
  },
];

const journeyTabs = [
  {
    value: "services",
    label: "Website de servicii",
    items: [
      {
        step: "1",
        title: "Caută serviciul pe Google",
        body: "Site-ul apare pe pagina 3. Fără meta description, fără titlu optimizat, fără fișă LocalBusiness în Google Maps. Concurenții cu site-uri mai slabe îl depășesc.",
      },
      {
        step: "2",
        title: "Aterizează pe homepage",
        body: "Hero-ul descrie compania, nu problema clientului. Lipsesc o propoziție clară de valoare, dovezi sociale și un CTA vizibil fără scroll.",
      },
      {
        step: "3",
        title: "Deschide site-ul pe telefon",
        body: "Formularul de contact nu funcționează pe iOS. Numărul de telefon nu e clickabil. LCP de 8 secunde. Jumătate din vizitatori pleacă înainte să citească o propoziție.",
      },
      {
        step: "4",
        title: "Sună concurența",
        body: "Nu a găsit recenzii, nu a înțeles rapid ce oferi, nu a avut încredere. Tu nu știi că a fost — nicio urmă a vizitei.",
      },
    ],
  },
  {
    value: "store",
    label: "Magazin online",
    items: [
      {
        step: "1",
        title: "Caută produsul pe Google",
        body: "Site-ul apare în rezultate, dar produsele lipsesc din Google Shopping — nu există date structurate Schema.org. Concurenții cu stocuri mai mici îl depășesc pentru că au rezolvat elementele de bază.",
      },
      {
        step: "2",
        title: "Ajunge pe fișa de produs",
        body: "Nu vede prețul sau vede „Cere ofertă”. Nu știe dacă produsul e pe stoc. Nu găsește recenzii. Nu există un buton clar de cumpărare.",
      },
      {
        step: "3",
        title: "Încearcă să cumpere",
        body: "Checkout-ul îl forțează să creeze cont. 14 câmpuri de completat. Interfața e pe jumătate în engleză. Abandonează înainte de a introduce cardul.",
      },
      {
        step: "4",
        title: "Cumpără de la concurență",
        body: "Tu nu știi că a fost pe site, că a abandonat coșul sau de unde a venit — nu există GA4 și niciun sistem de recuperare.",
      },
    ],
  },
  {
    value: "showcase",
    label: "Site de prezentare",
    items: [
      {
        step: "1",
        title: "Vine din reclamă plătită",
        body: "Pagina de destinație nu se potrivește cu mesajul din reclamă. Scorul de relevanță e scăzut, costul per click crește, bugetul se consumă fără conversii.",
      },
      {
        step: "2",
        title: "Citește pagina, pare interesat",
        body: "Nu găsește suficiente argumente să acționeze acum. Lipsesc urgență, dovezi sociale, răspunsuri la obiecții și o ofertă clară de intrare.",
      },
      {
        step: "3",
        title: "Încearcă să completeze formularul",
        body: "9 câmpuri obligatorii, fără confirmare vizuală, fără email automat. Rata de abandon a formularului e 70% — dar nimeni nu a măsurat-o vreodată.",
      },
      {
        step: "4",
        title: "Lead-ul se răcește înainte să fie contactat",
        body: "Fără notificare în timp real, fără integrare CRM, fără follow-up automatizat. Lead-urile vin în inbox și se pierd printre alte mailuri.",
      },
    ],
  },
];

function Index() {
  const [activeJourney, setActiveJourney] = React.useState(journeyTabs[0]?.value ?? "services");
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      const selectedTab = journeyTabs[carouselApi.selectedScrollSnap()];
      if (selectedTab) {
        setActiveJourney(selectedTab.value);
      }
    };

    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  React.useEffect(() => {
    if (!carouselApi) return;

    const nextIndex = journeyTabs.findIndex(({ value }) => value === activeJourney);
    if (nextIndex >= 0 && carouselApi.selectedScrollSnap() !== nextIndex) {
      carouselApi.scrollTo(nextIndex);
    }
  }, [activeJourney, carouselApi]);

  return (
    <main className="audit-page">
      <section className="grid-stage hero-section">
        <div className="section-shell">
          <div className="hero-stack">
            <div className="hero-panel">
              <h1 className="display-hero">
                <span className="hero-accent block">
                  Site-ul tău
                  <br />
                  pierde clienți.
                </span>
                <span className="mt-[15px] block">
                  Noi îți spunem
                  <br />
                  de ce.
                </span>
              </h1>

              <div className="hero-copy">
                <p>
                  Indiferent că vinzi servicii sau produse, site-ul tău are un singur scop: să
                  transforme vizitatorii în clienți.
                </p>
                <p className="mt-4">
                  Auditul nostru îți arată exact unde se rupe lanțul și cum îl repari, în ordinea
                  corectă.
                </p>
              </div>

              <div className="cta-row">
                <a className="cta-primary" href="#audit-focus">
                  Vreau audit gratuit
                  <ArrowRight className="size-6" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-frame">
                <HeroAuditPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block bg-background">
        <div className="section-shell">
          <Tabs value={activeJourney} onValueChange={setActiveJourney} className="journey-tabs">
            <div className="journey-heading-wrap">
              <h2 className="journey-heading-title">
                Traseul unui vizitator pe un site <span className="journey-heading-accent">ne</span>optimizat
              </h2>
              <TabsList
                className="journey-tabs-list journey-tabs-list-desktop !h-auto !rounded-none !bg-transparent !p-0 !shadow-none"
                aria-label="Tipuri de site-uri auditate"
              >
                {journeyTabs.map(({ value, label }) => (
                  <TabsTrigger key={value} value={value} className="journey-tab-trigger !rounded-none">
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="journey-tabs-carousel" aria-label="Tipuri de site-uri auditate">
                <Carousel
                  setApi={setCarouselApi}
                  opts={{ align: "center", loop: false, containScroll: false }}
                  className="journey-carousel-shell"
                >
                  <CarouselContent className="journey-carousel-track">
                    {journeyTabs.map(({ value, label }) => (
                      <CarouselItem key={value} className="journey-carousel-item basis-[78%]">
                        <button
                          type="button"
                          className={`journey-carousel-chip ${activeJourney === value ? "is-active" : ""}`}
                          onClick={() => setActiveJourney(value)}
                          aria-pressed={activeJourney === value}
                        >
                          {label}
                        </button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {journeyTabs.map(({ value, items }) => (
              <TabsContent key={value} value={value} className="journey-panel">
                <div className="journey-list">
                  {items.map(({ step, title, body }, index) => (
                    <article key={title} className="journey-item">
                      <div className="journey-marker" aria-hidden="true">
                        <div className="journey-step">{step}</div>
                        {index < items.length - 1 ? <div className="journey-line" /> : null}
                      </div>

                      <div className="journey-content">
                        <h3 className="journey-item-title">
                          {title === "Lead-ul se răcește înainte să fie contactat" ? (
                            <>
                              <span className="sm:hidden">Clientul nu e contactat la timp</span>
                              <span className="hidden sm:inline">{title}</span>
                            </>
                          ) : (
                            title
                          )}
                        </h3>
                        <p className="journey-item-body">{body}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="cta-row journey-cta-row">
                  <a className="cta-primary" href="#audit-focus">
                    Vreau audit gratuit
                    <ArrowRight className="size-6" aria-hidden="true" />
                  </a>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="audit-focus" className="section-block bg-background">
        <div className="section-shell">
          <h2 className="display-section text-center">
            <span className="block lg:whitespace-nowrap">
              <span className="block sm:hidden">Concurența ta nu are</span>
              <span className="block sm:hidden">un site mai bun.</span>
              <span className="hidden sm:inline">Concurența ta nu are un site mai bun.</span>
            </span>
            <span className="hero-accent mt-[10px] block lg:whitespace-nowrap">
              <span className="block sm:hidden">Doar are un site</span>
              <span className="block sm:hidden">mai bine optimizat.</span>
              <span className="hidden sm:inline">Doar are un site mai bine optimizat.</span>
            </span>
          </h2>

          <div className="feature-grid">
            {auditPillars.map(({ icon: Icon, title }) => (
              <article key={title} className="feature-card">
                <div className="feature-icon-box" aria-hidden="true">
                  <Icon className="feature-icon size-10" strokeWidth={1.75} />
                </div>
                <p className="feature-title">{title}</p>
              </article>
            ))}
          </div>

          <div className="mid-callout">
            <div className="mid-callout-chip">în timp ce</div>
            <p className="mid-callout-text">tu nu știi ce nu funcționează.</p>
            <div className="signal-divider" aria-hidden="true" />
          </div>
        </div>
      </section>
    </main>
  );
}
