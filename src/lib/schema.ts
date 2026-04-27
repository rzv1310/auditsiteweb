import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_TITLE,
  SEO_OG_IMAGE_PATH,
  SEO_SITE_NAME,
  SEO_SITE_URL,
} from "./seo";

const ORGANIZATION_ID = `${SEO_SITE_URL}/#organization`;
const WEBSITE_ID = `${SEO_SITE_URL}/#website`;
const SERVICE_ID = `${SEO_SITE_URL}/#service`;
const FAQ_ID = `${SEO_SITE_URL}/#faq`;

const ORGANIZATION_PHONE = "+40742702982";
const ORGANIZATION_EMAIL = "hello@seo-doctor.ro";

const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SEO_SITE_NAME,
  legalName: "SEO Doctor SRL",
  taxID: "49345207",
  foundingDate: "2023",
  url: SEO_SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SEO_SITE_URL}/logo.png`,
  },
  image: `${SEO_SITE_URL}${SEO_OG_IMAGE_PATH}`,
  email: ORGANIZATION_EMAIL,
  telephone: ORGANIZATION_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Campia Libertății 33",
    addressLocality: "București",
    addressRegion: "Sector 3",
    addressCountry: "RO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: ORGANIZATION_PHONE,
    email: ORGANIZATION_EMAIL,
    contactType: "customer support",
    availableLanguage: ["ro"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: allDays,
      opens: "00:00",
      closes: "23:59",
    },
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61588528903248",
    "https://www.instagram.com/seodoctor_ro",
    "https://www.linkedin.com/in/seo-doctor/",
  ],
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SEO_SITE_URL,
  name: SEO_DEFAULT_TITLE,
  inLanguage: "ro-RO",
  publisher: { "@id": ORGANIZATION_ID },
};

export const serviceJsonLd = {
  "@type": "Service",
  "@id": SERVICE_ID,
  name: "Audit site web gratuit",
  description: SEO_DEFAULT_DESCRIPTION,
  url: SEO_SITE_URL,
  serviceType: "Audit website",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: { "@type": "Country", name: "Romania" },
  availableLanguage: ["ro"],
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "RON",
    availability: "https://schema.org/InStock",
    url: SEO_SITE_URL,
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      maxValue: 24,
      unitCode: "HUR",
    },
  },
  serviceOutput: {
    "@type": "Report",
    name: "Raport de audit website",
    description:
      "Raport detaliat cu probleme, scoruri și recomandări per categorie, livrat în 24h.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Arii acoperite în audit",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit CRO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit viteză" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit securitate" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit accesibilitate" } },
    ],
  },
};

type FaqItem = { question: string; answer: string };

export function faqPageJsonLd(items: ReadonlyArray<FaqItem>) {
  return {
    "@type": "FAQPage",
    "@id": FAQ_ID,
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function buildHomepageJsonLd(faqItems: ReadonlyArray<FaqItem>) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd, websiteJsonLd, serviceJsonLd, faqPageJsonLd(faqItems)],
  };
}
