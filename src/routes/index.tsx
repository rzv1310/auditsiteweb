import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { ArrowRight, Eye, Search, Shield, Zap } from "lucide-react";

import { FindingsSection } from "@/components/findings-section";
import { AuditRequestSection } from "@/components/audit-request-section";
import { FinalDeliverablesSection } from "@/components/final-deliverables-section";
import { FaqSection } from "@/components/faq-section";
import { HeroAuditPreview } from "@/components/hero-audit-preview";
import { SiteFooter } from "@/components/site-footer";
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

const JOURNEY_MARKER_SPEED = 180;
const JOURNEY_MIN_SEGMENT_MS = 1200;
const JOURNEY_RESET_PAUSE_MS = 220;

type JourneyTabValue = (typeof journeyTabs)[number]["value"];

type JourneyMarkerMetrics = {
  bottom: number;
  points: number[];
  ready: boolean;
  top: number;
  x: number;
};

function Index() {
  const [activeJourney, setActiveJourney] = React.useState(journeyTabs[0]?.value ?? "services");
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [journeyMarkerMetrics, setJourneyMarkerMetrics] = React.useState<JourneyMarkerMetrics>({
    bottom: 0,
    points: [],
    ready: false,
    top: 0,
    x: 0,
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const journeyListRef = React.useRef<HTMLDivElement | null>(null);
  const journeyMarkerRef = React.useRef<HTMLSpanElement | null>(null);
  const journeyStepRefs = React.useRef<Record<JourneyTabValue, Array<HTMLDivElement | null>>>({
    services: [],
    showcase: [],
    store: [],
  });

  const setJourneyStepRef = React.useCallback(
    (tabValue: JourneyTabValue, index: number) => (node: HTMLDivElement | null) => {
      journeyStepRefs.current[tabValue][index] = node;
    },
    [],
  );

  const measureJourneyMarker = React.useCallback(() => {
    const listNode = journeyListRef.current;
    const stepNodes = (journeyStepRefs.current[activeJourney] ?? []).filter(
      (node): node is HTMLDivElement => node !== null,
    );

    if (!listNode || stepNodes.length < 2) {
      setJourneyMarkerMetrics((current) =>
        current.ready
          ? { bottom: 0, points: [], ready: false, top: 0, x: 0 }
          : current,
      );
      return;
    }

    const listRect = listNode.getBoundingClientRect();
    const markerPoints = stepNodes.map((stepNode) => {
      const stepRect = stepNode.getBoundingClientRect();

      return {
        x: stepRect.left - listRect.left + stepRect.width / 2,
        y: stepRect.top - listRect.top + stepRect.height / 2,
      };
    });

    const nextMetrics = {
      bottom: markerPoints[markerPoints.length - 1]?.y ?? 0,
      points: markerPoints.map(({ y }) => y),
      ready: true,
      top: markerPoints[0]?.y ?? 0,
      x: markerPoints.reduce((total, point) => total + point.x, 0) / markerPoints.length,
    } satisfies JourneyMarkerMetrics;

    setJourneyMarkerMetrics((current) => {
      const isSame =
        current.ready === nextMetrics.ready &&
        current.top === nextMetrics.top &&
        current.bottom === nextMetrics.bottom &&
        current.x === nextMetrics.x &&
        current.points.length === nextMetrics.points.length &&
        current.points.every((point, index) => point === nextMetrics.points[index]);

      return isSame ? current : nextMetrics;
    });
  }, [activeJourney]);

  const handleContactScroll = React.useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.getElementById("contact-form");
    if (!target) return;

    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 24;
    const distance = targetPosition - startPosition;
    const duration = 1100;
    let startTime: number | null = null;

    const easeInOutCubic = (progress: number) =>
      progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo({ top: startPosition + distance * easedProgress, behavior: "auto" });

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  }, []);

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

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);

      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);

    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    let frameId = window.requestAnimationFrame(measureJourneyMarker);
    const handleResize = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(measureJourneyMarker);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    const listNode = journeyListRef.current;
    const stepNodes = (journeyStepRefs.current[activeJourney] ?? []).filter(
      (node): node is HTMLDivElement => node !== null,
    );

    if (listNode) {
      resizeObserver.observe(listNode);
    }

    stepNodes.forEach((stepNode) => resizeObserver.observe(stepNode));
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [activeJourney, measureJourneyMarker]);

  React.useEffect(() => {
    const markerNode = journeyMarkerRef.current;

    if (!markerNode) return;

    if (!journeyMarkerMetrics.ready || journeyMarkerMetrics.points.length < 2 || prefersReducedMotion) {
      markerNode.style.opacity = "0";
      markerNode.style.transform = "translate3d(-999px, -999px, 0) translate(-50%, -50%)";
      return;
    }

    const segmentDistances = journeyMarkerMetrics.points
      .slice(1)
      .map((point, index) => Math.abs(point - journeyMarkerMetrics.points[index]));

    const segmentDurations = segmentDistances.map((distance) =>
      Math.max(JOURNEY_MIN_SEGMENT_MS, (distance / JOURNEY_MARKER_SPEED) * 1000),
    );

    const travelDuration = segmentDurations.reduce((total, duration) => total + duration, 0);
    const cycleDuration = travelDuration + JOURNEY_RESET_PAUSE_MS;
    let animationFrameId = 0;
    let startTime: number | null = null;

    const renderMarker = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = (timestamp - startTime) % cycleDuration;

      if (elapsed >= travelDuration) {
        markerNode.style.opacity = "0";
        markerNode.style.transform = `translate3d(${journeyMarkerMetrics.x}px, ${journeyMarkerMetrics.points[0]}px, 0) translate(-50%, -50%)`;
        animationFrameId = window.requestAnimationFrame(renderMarker);
        return;
      }

      let accumulatedDuration = 0;
      let currentSegmentIndex = 0;

      while (
        currentSegmentIndex < segmentDurations.length - 1 &&
        elapsed >= accumulatedDuration + segmentDurations[currentSegmentIndex]
      ) {
        accumulatedDuration += segmentDurations[currentSegmentIndex];
        currentSegmentIndex += 1;
      }

      const segmentDuration = segmentDurations[currentSegmentIndex] ?? JOURNEY_MIN_SEGMENT_MS;
      const segmentProgress = segmentDuration === 0 ? 0 : (elapsed - accumulatedDuration) / segmentDuration;
      const segmentStart = journeyMarkerMetrics.points[currentSegmentIndex] ?? 0;
      const segmentEnd = journeyMarkerMetrics.points[currentSegmentIndex + 1] ?? segmentStart;
      const currentY = segmentStart + (segmentEnd - segmentStart) * segmentProgress;

      markerNode.style.opacity = "1";
      markerNode.style.transform = `translate3d(${journeyMarkerMetrics.x}px, ${currentY}px, 0) translate(-50%, -50%)`;
      animationFrameId = window.requestAnimationFrame(renderMarker);
    };

    animationFrameId = window.requestAnimationFrame(renderMarker);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [journeyMarkerMetrics, prefersReducedMotion]);

  return (
    <>
      <header className="site-header">
        <div className="section-shell site-header-shell">
          <a
            className="site-contact-link"
            href="#contact-form"
            aria-label="Mergi la formularul de contact"
            onClick={handleContactScroll}
          >
            Contact
          </a>
        </div>
      </header>

      <main className="audit-page">
      <section className="grid-stage hero-section">
        <div className="section-shell">
          <div className="hero-stack">
            <div className="hero-panel">
              <div className="hero-badge">AUDIT SITE WEB GRATUIT</div>
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
                 <a
                   className="cta-primary"
                   href="#contact-form"
                   aria-label="Mergi la formularul de contact pentru audit gratuit"
                   onClick={handleContactScroll}
                 >
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
                <div ref={journeyListRef} className="journey-list">
                  <div className="journey-rail-overlay" aria-hidden="true">
                    <span
                      className="journey-rail"
                      style={{
                        ["--journey-rail-height" as string]: `${Math.max(journeyMarkerMetrics.bottom - journeyMarkerMetrics.top, 0)}px`,
                        ["--journey-rail-left" as string]: `${journeyMarkerMetrics.x}px`,
                        ["--journey-rail-top" as string]: `${journeyMarkerMetrics.top}px`,
                      }}
                    />
                    <span ref={journeyMarkerRef} className="journey-travel-dot" />
                  </div>
                  {items.map(({ step, title, body }, index) => (
                    <article key={title} className="journey-item">
                      <div className="journey-marker" aria-hidden="true">
                        <div ref={setJourneyStepRef(value, index)} className="journey-step">{step}</div>
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
                  <a
                    className="cta-primary"
                    href="#contact-form"
                    aria-label="Mergi la formularul de contact pentru audit gratuit"
                    onClick={handleContactScroll}
                  >
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

      <FindingsSection />
      <FinalDeliverablesSection />
      <AuditRequestSection />
      <FaqSection />
      </main>

      <SiteFooter />
    </>
  );
}
