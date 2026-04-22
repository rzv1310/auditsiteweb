import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const demoAudits = [
  {
    id: "local-services",
    label: "Audit Stomatolog • București • 2026",
    metrics: {
      seo: 80,
      cro: 18,
      accessibility: 27,
      performance: 50,
      security: 80,
      content: 41,
      technical: 36,
      legal: 22,
      mobile: 54,
      ux: 42,
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
  {
    id: "installer-pitesti",
    label: "Audit Instalator • Pitești • 2026",
    metrics: {
      seo: 82,
      cro: 67,
      accessibility: 43,
      performance: 48,
      security: 85,
      content: 58,
      technical: 61,
      legal: 46,
      mobile: 64,
      ux: 52,
    },
  },
  {
    id: "roof-repairs-cluj",
    label: "Audit Reparații Acoperișuri • Cluj • 2026",
    metrics: {
      seo: 86,
      cro: 62,
      accessibility: 57,
      performance: 45,
      security: 81,
      content: 54,
      technical: 60,
      legal: 47,
      mobile: 59,
      ux: 51,
    },
  },
  {
    id: "medical-clinic-deva",
    label: "Audit Clinică Medicală • Deva • 2026",
    metrics: {
      seo: 84,
      cro: 64,
      accessibility: 58,
      performance: 61,
      security: 88,
      content: 69,
      technical: 63,
      legal: 56,
      mobile: 67,
      ux: 60,
    },
  },
  {
    id: "auto-service-bucharest",
    label: "Audit Service Auto • București • 2026",
    metrics: {
      seo: 81,
      cro: 66,
      accessibility: 59,
      performance: 63,
      security: 83,
      content: 55,
      technical: 68,
      legal: 57,
      mobile: 61,
      ux: 64,
    },
  },
  {
    id: "sofa-cleaning-sibiu",
    label: "Audit Curățătorie Canapele • Sibiu • 2026",
    metrics: {
      seo: 72,
      cro: 46,
      accessibility: 58,
      performance: 41,
      security: 69,
      content: 55,
      technical: 48,
      legal: 53,
      mobile: 61,
      ux: 44,
    },
  },
];

export function HeroAuditPreview() {
  const previewRef = React.useRef<HTMLDivElement | null>(null);
  const [selectedAuditIndex, setSelectedAuditIndex] = React.useState(0);

  const { label, overallScore } = React.useMemo(() => {
    const selectedAudit = demoAudits[selectedAuditIndex] ?? demoAudits[0];
    const selectedMetrics = Object.entries(selectedAudit.metrics).map(([, value]) => value);
    const overallScore = Math.round(
      selectedMetrics.reduce((sum, metricValue) => sum + metricValue, 0) / selectedMetrics.length,
    );

    return {
      label: selectedAudit.label,
      overallScore,
    };
  }, [selectedAuditIndex]);

  const changeAudit = React.useCallback((direction: "prev" | "next") => {
    setSelectedAuditIndex((current) => {
      if (direction === "prev") {
        return current === 0 ? demoAudits.length - 1 : current - 1;
      }

      return current === demoAudits.length - 1 ? 0 : current + 1;
    });
  }, []);

  return (
    <div
      ref={previewRef}
      className="audit-preview-card"
      role="img"
      aria-label="Previzualizare audit website cu scor general și trei metrici cheie"
    >
      <div className="audit-preview-topbar">
        <div className="audit-preview-nav" aria-label="Schimbă auditul demo">
          <button
            type="button"
            className="audit-preview-nav-button"
            onClick={() => changeAudit("prev")}
            aria-label="Auditul anterior"
            title="Auditul anterior"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <div className="audit-preview-badge">{label}</div>
          <button
            type="button"
            className="audit-preview-nav-button"
            onClick={() => changeAudit("next")}
            aria-label="Auditul următor"
            title="Auditul următor"
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
            ["--score-value" as string]: `${overallScore}`,
          } as React.CSSProperties}
        >
          <div className="audit-score-ring-inner">{overallScore}</div>
        </div>

        <div className="audit-score-copy">
          <p className="audit-score-label">Scor general</p>
          <p className="audit-score-value">/ 100</p>
        </div>
      </div>

    </div>
  );
}