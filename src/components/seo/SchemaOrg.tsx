import { siteConfig } from "@/config/site";

interface SchemaOrgProps {
  type?: "Organization" | "LocalBusiness";
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SchemaOrg = ({ type = "Organization", breadcrumbs }: SchemaOrgProps) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: "Eurometales S.L.",
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressRegion: "Madrid",
      addressCountry: "ES",
      streetAddress: siteConfig.contact.address,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+34${siteConfig.contact.phones[0].replace(/\s/g, "")}`,
        contactType: "sales",
        areaServed: "ES",
        availableLanguage: "Spanish",
      },
      {
        "@type": "ContactPoint",
        telephone: `+34${siteConfig.contact.phones[1].replace(/\s/g, "")}`,
        contactType: "sales",
        areaServed: "ES",
        availableLanguage: "Spanish",
      },
    ],
    email: siteConfig.contact.email,
    sameAs: [
      siteConfig.social.linkedin ? `https://linkedin.com/company/${siteConfig.social.linkedin}` : null,
      siteConfig.social.instagram ? `https://instagram.com/${siteConfig.social.instagram}` : null,
    ].filter(Boolean),
  };

  const localBusinessSchema = {
    ...baseSchema,
    "@type": "LocalBusiness",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "España",
    },
  };

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `${siteConfig.url}${crumb.url}`,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(type === "LocalBusiness" ? localBusinessSchema : baseSchema),
        }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
    </>
  );
};
