const deliverables = [
  {
    title: "Raport audit de 15+ pagini",
    body: "Scor detaliat pe 10 categorii, top probleme în funcție de severitate și impact comercial.",
  },
  {
    title: "Plan de acțiune prioritizat",
    body: "Ce rezolvi acum, ce poate aștepta, cu estimări de efort și ROI așteptat per remediere.",
  },
  {
    title: "Verificare de conformitate",
    body: "GDPR, ANPC, legislație românească - toate obligațiile legale verificate și documentate.",
  },
] as const;

export function FinalDeliverablesSection() {
  return (
    <section className="section-block final-deliverables-section" aria-labelledby="final-deliverables-heading">
      <div className="section-shell">
        <div className="final-deliverables-header">
          <h2 id="final-deliverables-heading" className="display-section final-deliverables-title">
            Ce primești la final
          </h2>
        </div>

        <div className="final-deliverables-grid">
          {deliverables.map(({ title, body }) => (
            <article key={title} className="final-deliverable-card">
              <h3 className="final-deliverable-card-title">{title}</h3>
              <p className="final-deliverable-card-body">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}