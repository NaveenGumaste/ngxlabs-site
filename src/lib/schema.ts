import { site } from "@/lib/site";
import { absUrl } from "@/lib/utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    logo: absUrl("/icon"),
    sameAs: [site.social.github, site.social.linkedin, site.social.x, site.social.peerlist],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dharwad",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    founder: personSchema(),
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    name: site.founder.name,
    url: site.url,
    image: absUrl(site.founder.photo),
    jobTitle: site.founder.role,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dharwad",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [site.social.github, site.social.linkedin, site.social.x, site.social.peerlist],
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
