import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

const faqItems = [
  {
    value: "what-is-audit",
    question: "Ce este un audit al site-ului web?",
    answer:
      "Un audit complet verifică site-ul tău pe 10 categorii (SEO, accesibilitate, performanță, securitate etc.) - și îți oferă un raport cu probleme, scoruri și recomandări concrete.",
  },
  {
    value: "how-long",
    question: "Cât durează un audit?",
    answer: "Depinde de numărul de pagini. De obicei, un audit complet durează câteva ore.",
  },
  {
    value: "deliverables",
    question: "Ce primesc la final?",
    answer:
      "Un raport PDF cu scoruri per categorie, probleme ierarhizate după severitate, recomandări concrete și un plan de acțiune prioritizat.",
  },
  {
    value: "data-safety",
    question: "Datele mele sunt în siguranță?",
    answer:
      "Nu stocăm conținut personal. Folosim doar date publice ale site-ului tău pentru analiză.",
  },
] as const;

export function FaqSection() {
  return (
    <section className="section-block faq-section" aria-labelledby="faq-heading">
      <div className="section-shell faq-shell">
        <div className="faq-header">
          <h2 id="faq-heading" className="faq-title">
            Întrebări frecvente
          </h2>
        </div>

        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue={faqItems[0].value}
          className="faq-list"
        >
          {faqItems.map(({ value, question, answer }) => (
            <AccordionPrimitive.Item key={value} value={value} className="faq-item">
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="faq-trigger">
                  <h3 className="faq-question">{question}</h3>
                  <span className="faq-icon-wrap" aria-hidden="true">
                    <Plus className="faq-icon faq-icon-plus" />
                    <Minus className="faq-icon faq-icon-minus" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>

              <AccordionPrimitive.Content className="faq-content">
                <div className="faq-answer">{answer}</div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}