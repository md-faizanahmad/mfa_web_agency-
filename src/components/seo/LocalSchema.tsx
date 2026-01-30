// src/components/seo/LocalSchema.tsx

export default function LocalSchema() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Better for agencies than 'LocalBusiness'
    name: "MFA - High Performance Development Agency",
    image: "https://agency.mdfaizanahmad.in/brand_logo.png",
    "@id": "https://agency.mdfaizanahmad.in",
    url: "https://agency.mdfaizanahmad.in",
    telephone: "+917563092029", // Add your real number
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gaya",
      addressLocality: "Gaya",
      addressRegion: "Bihar",
      postalCode: "823001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7914, // Example for Hyderabad
      longitude: 85.0002,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [
      "https://linkedin.com/in/mdfaizanahmad",
      "https://github.com/md-faizanahmad",
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
