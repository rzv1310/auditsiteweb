import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Eye, Search, Shield, Zap } from "lucide-react";

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

function Index() {
  return (
    <main className="audit-page">
      <section className="grid-stage hero-section">
        <div className="section-shell">
          <div className="hero-stack">
            <div className="hero-panel">
              <h1 className="display-hero">
                <span className="hero-accent">
                  Site-ul tău
                  <br />
                  pierde clienți.
                </span>
                <br />
                Noi îți spunem
                <br />
                de ce.
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

            <div className="hero-side" aria-hidden="true">
              <div className="hero-frame" />
            </div>
          </div>
        </div>
      </section>

      <section id="audit-focus" className="section-block bg-background">
        <div className="section-shell">
          <h2 className="display-section text-center">
            <span className="lg:whitespace-nowrap">Concurența ta nu are un site mai bun.</span>
            <br />
            <span className="hero-accent">Doar are un site mai bine optimizat.</span>
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
            <div className="mid-callout-chip">În timp ce</div>
            <p className="mid-callout-text">tu nu știi ce nu funcționează.</p>
            <div className="signal-divider" aria-hidden="true" />
          </div>
        </div>
      </section>
    </main>
  );
}
