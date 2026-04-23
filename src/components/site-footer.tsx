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
          aria-label="Deschide conversația WhatsApp cu SEO Doctor"
        >
          WhatsApp: +40 742 702 982
        </a>
        <a
          className="site-footer-text site-footer-email"
          href="mailto:hello@seo-doctor.ro"
          aria-label="Trimite email către SEO Doctor"
        >
          hello@seo-doctor.ro
        </a>
        <nav className="site-footer-legal" aria-label="Navigație legală">
          <ul className="site-footer-legal-list">
            <li>
              <Link to="/termeni-si-conditii" className="site-footer-inline-link">
                Termeni și condiții
              </Link>
            </li>
            <li aria-hidden="true" className="site-footer-separator">
              |
            </li>
            <li>
              <Link to="/politica-de-confidentialitate" className="site-footer-inline-link">
                GDPR
              </Link>
            </li>
            <li aria-hidden="true" className="site-footer-separator">
              |
            </li>
            <li>
              <Link to="/politica-cookies" className="site-footer-inline-link">
                Cookies
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}