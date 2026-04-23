import * as React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const NETLIFY_FORM_NAME = "audit-request";
const WEBSITE_PATTERN = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}(\/[^\s]*)?$/;
const PHONE_PATTERN = /^\+?[0-9 ]+$/;

export function AuditRequestSection() {
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionError, setSubmissionError] = React.useState("");

  const handleInvalid = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const field = event.currentTarget;

    if (field.validity.valueMissing) {
      field.setCustomValidity("Te rugăm completează acest câmp.");
      return;
    }

    if (field.type === "url" && field.validity.typeMismatch) {
      field.setCustomValidity("Te rugăm introdu un website valid.");
      return;
    }

    if (field.name === "website" && field.value.trim() && !WEBSITE_PATTERN.test(field.value.trim())) {
      field.setCustomValidity("Te rugăm introdu un website valid.");
      return;
    }

    if (field.name === "phone") {
      const normalizedPhone = field.value.replace(/\s+/g, "").trim();

      if (!PHONE_PATTERN.test(field.value.trim()) || normalizedPhone.replace(/^\+/, "").length < 10) {
        field.setCustomValidity("Te rugăm introdu un număr de telefon valid.");
        return;
      }
    }

    field.setCustomValidity("");
  }, []);

  const resetValidationMessage = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity("");
  }, []);

  const handleSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const encodedFormData = new URLSearchParams();

      formData.forEach((value, key) => {
        if (typeof value === "string") {
          encodedFormData.append(key, value);
        }
      });

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedFormData.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setIsSuccessOpen(true);
    } catch {
      setSubmissionError("A apărut o eroare la trimitere. Te rugăm încearcă din nou.");
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <>
      <section
        id="contact-form"
        className="section-block audit-request-section"
        aria-labelledby="audit-request-heading"
      >
        <div className="section-shell audit-request-shell">
          <div className="audit-request-header">
            <h2 id="audit-request-heading" className="audit-request-title">
              Vreau Audit Gratuit
            </h2>
            <p className="audit-request-subtitle">
              <span className="audit-request-subtitle-line">Completează formularul</span>
              <span className="audit-request-subtitle-line">și primești rezultatul astăzi !</span>
            </p>
          </div>

          <form
            name={NETLIFY_FORM_NAME}
            method="POST"
            data-netlify="true"
            action="/"
            className="audit-request-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />

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
                pattern="\+?[0-9 ]+"
                onInvalid={handleInvalid}
                onInput={resetValidationMessage}
              />
            </div>

            <div className="audit-request-field">
              <label className="audit-request-label" htmlFor="audit-website">
                Website <span className="audit-request-required">*</span>
              </label>
              <input
                id="audit-website"
                name="website"
                type="text"
                inputMode="url"
                placeholder="exemplu.ro"
                className="audit-request-input"
                required
                onInvalid={handleInvalid}
                onInput={resetValidationMessage}
              />
            </div>

            <label className="audit-request-consent">
              <input
                className="audit-request-checkbox"
                type="checkbox"
                name="consent"
                required
                aria-required="true"
                onInvalid={handleInvalid}
                onInput={resetValidationMessage}
              />
              <span className="audit-request-consent-copy">
                Accept politica de confidențialitate și termenii de utilizare.
                <span className="audit-request-required"> *</span>
              </span>
            </label>

            {submissionError ? (
              <p className="audit-request-consent-copy" role="alert">
                {submissionError}
              </p>
            ) : null}

            <button type="submit" className="audit-request-button" disabled={isSubmitting}>
              {isSubmitting ? "Se trimite" : "Trimite"}
            </button>
          </form>
        </div>
      </section>

      <AlertDialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Mulțumim, incepem treaba!</AlertDialogTitle>
            <AlertDialogDescription>
              Vei primi auditul în câteva ore pe WhatsApp.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Am înțeles</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}