import * as React from "react";

export function AuditRequestSection() {
  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
    <section className="section-block audit-request-section" aria-labelledby="audit-request-heading">
      <div className="section-shell audit-request-shell">
        <div className="audit-request-header">
          <h2 id="audit-request-heading" className="audit-request-title">
            Vreau Audit Gratuit
          </h2>
          <p className="audit-request-subtitle">Completează formularul și primești auditul astăzi !</p>
        </div>

        <form className="audit-request-form" onSubmit={handleSubmit}>
          <div className="audit-request-field">
            <label className="audit-request-label" htmlFor="audit-phone">
              Telefon <span className="audit-request-required">*</span>
            </label>
            <input
              id="audit-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="07XX XXX XXX"
              className="audit-request-input"
              required
            />
          </div>

          <div className="audit-request-field">
            <label className="audit-request-label" htmlFor="audit-website">
              Website <span className="audit-request-required">*</span>
            </label>
            <input
              id="audit-website"
              name="website"
              type="url"
              inputMode="url"
              placeholder="exemplu.ro"
              className="audit-request-input"
              required
            />
          </div>

          <label className="audit-request-consent">
            <input className="audit-request-checkbox" type="checkbox" name="consent" required />
            <span className="audit-request-consent-copy">
              Accept <span className="audit-request-linkish">politica de confidențialitate</span> și{" "}
              <span className="audit-request-linkish">termenii de utilizare</span>.
            </span>
          </label>

          <button type="submit" className="audit-request-button">
            Trimite
          </button>
        </form>
      </div>
    </section>
  );
}