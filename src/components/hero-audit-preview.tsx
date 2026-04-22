import * as React from "react";

import { cn } from "@/lib/utils";

const overallScore = 72;

const metrics = [
  { key: "seo", label: "SEO", value: 85, tone: "good" as const },
  { key: "performance", label: "Performanță", value: 45, tone: "alert" as const },
  { key: "security", label: "Securitate", value: 90, tone: "good" as const },
];

export function HeroAuditPreview() {
  const [activeMetric, setActiveMetric] = React.useState(metrics[1].key);
  const [animatedScore, setAnimatedScore] = React.useState(0);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => setAnimatedScore(overallScore));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="audit-preview-card" role="img" aria-label="Previzualizare audit website cu scor general și trei metrici cheie">
      <div className="audit-preview-header">
        <div
          className="audit-score-ring"
          style={{
            ["--score-value" as string]: `${animatedScore}`,
          } as React.CSSProperties}
        >
          <div className="audit-score-ring-inner">{overallScore}</div>
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