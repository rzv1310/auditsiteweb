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
    metrics: {
      seo: 83,
      cro: 61,
      accessibility: 74,
      performance: 58,
      security: 91,
      content: 79,
      technical: 72,
      legal: 66,
      mobile: 63,
      ux: 76,
    },
  },
  {
    id: "online-store",
    label: "Audit • Cluj-Napoca • 2026",
    metrics: {
      seo: 76,
      cro: 57,
      accessibility: 68,
      performance: 49,
      security: 87,
      content: 71,
      technical: 64,
      legal: 59,
      mobile: 54,
      ux: 69,
    },
  },
  {
    id: "lead-gen",
    label: "Audit • Timișoara • 2026",
    metrics: {
      seo: 88,
      cro: 64,
      accessibility: 81,
      performance: 54,
      security: 93,
      content: 84,
      technical: 77,
      legal: 69,
      mobile: 61,
      ux: 82,
    },
  },
];

function getMetricTone(value: number): DemoMetricTone {
  return value >= 65 ? "good" : "alert";
}

export function HeroAuditPreview() {
  const { label, metrics, overallScore } = React.useMemo(() => {
    const selectedAudit = demoAudits[Math.floor(Math.random() * demoAudits.length)] ?? demoAudits[0];
    const selectedMetrics = Object.entries(selectedAudit.metrics).map(([key, value]) => ({
      key,
      label: metricLabels[key as keyof typeof metricLabels],
      value,
      tone: getMetricTone(value),
    }));
    const score = Math.round(
      selectedMetrics.reduce((sum, metric) => sum + metric.value, 0) / selectedMetrics.length,
    );

    return {
      label: selectedAudit.label,
      metrics: selectedMetrics,
      overallScore: score,
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
                className={cn("audit-meter-fill", metric.tone === "alert" && "is-alert")}
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