import * as React from "react";

import { cn } from "@/lib/utils";

type DemoMetricTone = "good" | "alert";

const demoAudits = [
  {
    id: "local-services",
    label: "Audit • București • 2026",
    metrics: [
      { key: "seo", label: "SEO", value: 83, tone: "good" as DemoMetricTone },
      { key: "performance", label: "Performanță", value: 58, tone: "alert" as DemoMetricTone },
      { key: "security", label: "Securitate", value: 91, tone: "good" as DemoMetricTone },
    ],
  },
  {
    id: "online-store",
    label: "Audit • Cluj-Napoca • 2026",
    metrics: [
      { key: "seo", label: "SEO", value: 76, tone: "good" as DemoMetricTone },
      { key: "performance", label: "Performanță", value: 49, tone: "alert" as DemoMetricTone },
      { key: "security", label: "Securitate", value: 87, tone: "good" as DemoMetricTone },
    ],
  },
  {
    id: "lead-gen",
    label: "Audit • Timișoara • 2026",
    metrics: [
      { key: "seo", label: "SEO", value: 88, tone: "good" as DemoMetricTone },
      { key: "performance", label: "Performanță", value: 54, tone: "alert" as DemoMetricTone },
      { key: "security", label: "Securitate", value: 93, tone: "good" as DemoMetricTone },
    ],
  },
];

export function HeroAuditPreview() {
  const { label, metrics, overallScore } = React.useMemo(() => {
    const selectedAudit = demoAudits[Math.floor(Math.random() * demoAudits.length)] ?? demoAudits[0];
    const score = Math.round(
      selectedAudit.metrics.reduce((sum, metric) => sum + metric.value, 0) / selectedAudit.metrics.length,
    );

    return {
      label: selectedAudit.label,
      metrics: selectedAudit.metrics,
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