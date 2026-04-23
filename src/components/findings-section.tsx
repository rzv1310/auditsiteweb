import { TrendingUp } from "lucide-react";

const findings = [
  {
    level: "critical",
    label: "CRITIC",
    title: "Fără CTA înainte de scroll –",
    body: "vizitatorii nu știu ce pas următor să facă",
  },
  {
    level: "critical",
    label: "CRITIC",
    title: "Formular de contact nefuncțional sau fără confirmare –",
    body: "lead-uri pierdute silențios",
  },
  {
    level: "critical",
    label: "CRITIC",
    title: "Lipsă date structurate LocalBusiness / Product –",
    body: "invizibili în Google Maps / Knowledge Panel / Google Shopping",
  },
  {
    level: "high",
    label: "RIDICAT",
    title: "LCP peste 4s pe mobil –",
    body: "jumătate din vizitatori pleacă înainte să citească o propoziție",
  },
  {
    level: "medium",
    label: "MEDIU",
    title: "Fără recenzii sau studii de caz –",
    body: "lipsa dovezii sociale blochează decizia",
  },
] as const;

function FindingIcon({ level }: { level: (typeof findings)[number]["level"] }) {
  if (level === "critical") {
    return <span className="findings-item-critical-mark" aria-hidden="true">!</span>;
  }

  if (level === "medium") {
    return <span className="findings-item-medium-mark" aria-hidden="true">−</span>;
  }

  return <TrendingUp className="findings-item-icon" strokeWidth={1.8} aria-hidden="true" />;
}

export function FindingsSection() {
  return (
    <section className="section-block findings-section" aria-labelledby="findings-heading">
      <div className="section-shell">
        <div className="findings-header">
          <h2 id="findings-heading" className="display-section findings-title">
            Ce identificăm în mod frecvent
          </h2>
        </div>

        <div className="findings-list">
          {findings.map((finding) => (
            <article key={finding.title} className="findings-item" data-level={finding.level}>
              <div className="findings-item-status">
                <div className="findings-item-icon-wrap">
                  <FindingIcon level={finding.level} />
                </div>
                <div className="findings-item-badge">{finding.label}</div>
              </div>

              <div className="findings-item-divider" aria-hidden="true" />

              <div className="findings-item-copy">
                <h3 className="findings-item-title">{finding.title}</h3>
                <p className="findings-item-body">{finding.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}