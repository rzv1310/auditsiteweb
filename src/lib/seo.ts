import type { MetaDescriptor } from "@tanstack/react-router";

export const SEO_SITE_URL = "https://auditsiteweb.seo-doctor.ro";
export const SEO_SITE_NAME = "Seo Doctor";
export const SEO_DEFAULT_TITLE = "Audit Site Web Gratuit > Optimizeaza Conversiile";
export const SEO_DEFAULT_DESCRIPTION =
  "Audit website: identifica rapid blocajele SEO, CRO, viteza, securitate etc.";
export const SEO_DEFAULT_KEYWORDS = "audit site web";
export const SEO_THEME_COLOR = "#f8efe6";
export const SEO_ROBOTS_CONTENT =
  "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE";
export const SEO_OG_IMAGE_PATH = "/og-image.png";
export const SEO_OG_IMAGE_ALT =
  "Previzualizare vizuală a unui audit website SEO Doctor cu dashboard și metrici.";
export const SEO_OG_IMAGE_WIDTH = "1200";
export const SEO_OG_IMAGE_HEIGHT = "630";

type SeoPageOptions = {
  description: string;
  path: string;
  title: string;
};

type SeoPageHead = {
  links: Array<Record<string, string>>;
  meta: MetaDescriptor[];
};

export function getCanonicalUrl(path: string) {
  return new URL(path, `${SEO_SITE_URL}/`).toString();
}

export function buildPageHead({ description, path, title }: SeoPageOptions): SeoPageHead {
  const canonicalUrl = getCanonicalUrl(path);
  const ogImageUrl = getCanonicalUrl(SEO_OG_IMAGE_PATH);

  return {
    links: [{ rel: "canonical", href: canonicalUrl }],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:secure_url", content: ogImageUrl },
      { property: "og:image:width", content: SEO_OG_IMAGE_WIDTH },
      { property: "og:image:height", content: SEO_OG_IMAGE_HEIGHT },
      { property: "og:image:alt", content: SEO_OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImageUrl },
      { name: "twitter:image:alt", content: SEO_OG_IMAGE_ALT },
    ],
  };
}
