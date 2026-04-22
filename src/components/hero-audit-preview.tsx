import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    label: "Audit Stomatolog • București • 2026",
    metrics: {
      seo: 85,
      cro: 39,
      accessibility: 38,
      performance: 30,
      security: 82,
      content: 40,
      technical: 37,
      legal: 31,
      mobile: 33,
      ux: 35,
    },
  },
  {
    id: "online-store",
    label: "Audit Magazin Online • Cluj-Napoca • 2026",
    metrics: {
      seo: 84,
      cro: 58,
      accessibility: 61,
      performance: 45,
      security: 80,
      content: 68,
      technical: 66,
      legal: 49,
      mobile: 53,
      ux: 56,
    },
  },
  {
    id: "lead-gen",
    label: "Audit Studio Pilates • Timișoara • 2026",
    metrics: {
      seo: 81,
      cro: 44,
      accessibility: 42,
      performance: 33,
      security: 80,
      content: 46,
      technical: 41,
      legal: 36,
      mobile: 38,
      ux: 39,
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

export function HeroAuditPreview() {
  const [selectedAuditIndex, setSelectedAuditIndex] = React.useState(0);

  const { label, metrics, overallScore } = React.useMemo(() => {
    const selectedAudit = demoAudits[selectedAuditIndex] ?? demoAudits[0];
    const selectedMetrics = Object.entries(selectedAudit.metrics).map(([key, value]) => {
      return {
        key,
        label: metricLabels[key as keyof typeof metricLabels],
        value,
        tone: getMetricTone(value),
        color: getMetricColor(value),
      };
    });
    const overallScore = Math.round(
      selectedMetrics.reduce((sum, metric) => sum + metric.value, 0) / selectedMetrics.length,
    );

    return {
      label: selectedAudit.label,
      metrics: selectedMetrics,
      overallScore,
    };
  }, [selectedAuditIndex]);

  const [activeMetric, setActiveMetric] = React.useState(metrics[1].key);
  const [animatedScore, setAnimatedScore] = React.useState(0);

  const changeAudit = React.useCallback((direction: "prev" | "next") => {
    setSelectedAuditIndex((current) => {
      if (direction === "prev") {
        return current === 0 ? demoAudits.length - 1 : current - 1;
      }

      return current === demoAudits.length - 1 ? 0 : current + 1;
    });
  }, []);

  React.useEffect(() => {
    setActiveMetric(metrics[1]?.key ?? metrics[0]?.key ?? "seo");
  }, [metrics]);

  React.useEffect(() => {
    setAnimatedScore(0);
    const frame = window.requestAnimationFrame(() => setAnimatedScore(overallScore));
    return () => window.cancelAnimationFrame(frame);
  }, [overallScore]);

  return (
    <div className="audit-preview-card" role="img" aria-label="Previzualizare audit website cu scor general și trei metrici cheie">
      <div className="audit-preview-topbar">
        <div className="audit-preview-badge">{label}</div>

        <div className="audit-preview-nav" aria-label="Schimbă auditul demo">
          <button
            type="button"
            className="audit-preview-nav-button"
            onClick={() => changeAudit("prev")}
            aria-label="Auditul anterior"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="audit-preview-nav-button"
            onClick={() => changeAudit("next")}
            aria-label="Auditul următor"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="audit-preview-header">
        <div
          className={cn(
            "audit-score-ring",
            overallScore < 50 && "is-low",
            overallScore >= 50 && overallScore <= 79 && "is-medium",
            overallScore > 79 && "is-high",
          )}
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