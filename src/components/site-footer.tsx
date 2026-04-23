import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer-shell">
        <p className="site-footer-text">© 2026 SEO Doctor</p>
        <a
          className="site-footer-phone"
          href="https://wa.me/40742702982"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp: +40 742 702 982
        </a>
        <a className="site-footer-text site-footer-email" href="mailto:hello@seo-doctor.ro">
          hello@seo-doctor.ro
        </a>
        <p className="site-footer-text site-footer-legal">
          <Link to="/termeni-si-conditii" className="site-footer-inline-link">
            Termeni și condiții
          </Link>{" "}
          |{" "}
          <Link to="/politica-de-confidentialitate" className="site-footer-inline-link">
            GDPR
          </Link>{" "}
          |{" "}
          <Link to="/politica-cookies" className="site-footer-inline-link">
            Cookies
          </Link>
        </p>
      </div>
    </footer>
  );
}