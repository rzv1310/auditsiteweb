import * as React from "react";

import { cn } from "@/lib/utils";

type DemoMetricTone = "good" | "alert";

const metricLabels = {
  seo: "SEO",
  cro: "CRO (Rata de conversie)",
  accessibility: "Accesibilitate",
  performance: "Performanță",
  security: "Securitate",
  content: "Conținut",
  technical: "Tehnic",
  legal: "Conformitate juridică",
  mobile: "Experiență mobilă",
  ux: "UX și design",
} as const;

const demoAudits = [
  {
    id: "local-services",
    label: "Audit • București • 2026",
    overallScore: 45,
    profile: {
      seo: 4,
      cro: -5,
      accessibility: -1,
      performance: -10,
      security: 8,
      content: 2,
      technical: -4,
      legal: -3,
      mobile: -6,
      ux: 1,
    },
  },
  {
    id: "online-store",
    label: "Audit • Cluj-Napoca • 2026",
    overallScore: 62,
    profile: {
      seo: 8,
      cro: -2,
      accessibility: 3,
      performance: -8,
      security: 7,
      content: 2,
      technical: -1,
      legal: -4,
      mobile: -6,
      ux: 1,
    },
  },
  {
    id: "lead-gen",
    label: "Audit • Timișoara • 2026",
    overallScore: 48,
    profile: {
      seo: 6,
      cro: -4,
      accessibility: 0,
      performance: -9,
      security: 9,
      content: 3,
      technical: -3,
      legal: -2,
      mobile: -5,
      ux: 5,
    },
  },
];

function getMetricTone(value: number): DemoMetricTone {
  return value >= 80 ? "good" : "alert";
}

function getMetricColor(value: number) {
  if (value < 50) return "low" as const;
  if (value <= 79) return "medium" as const;
  return "high" as const;
}

function clampMetric(value: number) {
  return Math.max(18, Math.min(96, value));
}

export function HeroAuditPreview() {
  const { label, metrics, overallScore } = React.useMemo(() => {
    const selectedAudit = demoAudits[Math.floor(Math.random() * demoAudits.length)] ?? demoAudits[0];
    const selectedMetrics = Object.entries(selectedAudit.profile).map(([key, offset]) => {
      const value = clampMetric(selectedAudit.overallScore + offset);

      return {
      key,
      label: metricLabels[key as keyof typeof metricLabels],
      value,
      tone: getMetricTone(value),
      color: getMetricColor(value),
      };
    });

    return {
      label: selectedAudit.label,
      metrics: selectedMetrics,
      overallScore: selectedAudit.overallScore,
    };
  }, []);

  const [activeMetric, setActiveMetric] = React.useState(metrics[1].key);
  const [animatedScore, setAnimatedScore] = React.useState(0);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => setAnimatedScore(overallScore));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="audit-preview-card" role="img" aria-label="Previzualizare audit website cu scor general și trei metrici cheie">
      <div className="audit-preview-badge">{label}</div>

      <div className="audit-preview-header">
        <div
          className="audit-score-ring"
          style={{
            ["--score-value" as string]: `${animatedScore}`,
          } as React.CSSProperties}
        >
          <div className="audit-score-ring-inner">{animatedScore}</div>
        </div>

        <div className="audit-score-copy">
          <p className="audit-score-label">Scor general</p>
          <p className="audit-score-value">/ 100</p>
        </div>
      </div>

      <div className="audit-metrics" role="list" aria-label="Metrici audit website">
        {metrics.map((metric) => (
          <button
            key={metric.key}
            type="button"
            className={cn("audit-metric-row", activeMetric === metric.key && "is-active")}
            onMouseEnter={() => setActiveMetric(metric.key)}
            onFocus={() => setActiveMetric(metric.key)}
            onClick={() => setActiveMetric(metric.key)}
          >
            <div className="audit-metric-head">
              <span className="audit-metric-label">{metric.label}</span>
              <span className="audit-metric-value">{metric.value}</span>
            </div>

            <div className="audit-meter-track" aria-hidden="true">
              <div
                className={cn(
                  "audit-meter-fill",
                  metric.tone === "alert" && "is-alert",
                  metric.color === "low" && "is-low",
                  metric.color === "medium" && "is-medium",
                  metric.color === "high" && "is-high",
                )}
                style={{
                  ["--meter-value" as string]: `${metric.value}%`,
                } as React.CSSProperties}
              />
            </div>
          </button>
        ))}
      </div>

      <div className="audit-preview-divider" aria-hidden="true" />
    </div>
  );
}