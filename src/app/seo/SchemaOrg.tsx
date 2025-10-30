"use client";

import Script from "next/script";

export default function SchemaOrg() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://colegiotecminas.com.br#organization",
        name: "Colégio Técnico TecMinas",
        url: "https://colegiotecminas.com.br",
        logo: "https://colegiotecminas.com.br/logo.png",
        description:
          "O Colégio Técnico TecMinas oferece cursos técnicos e profissionalizantes em diversas áreas, com foco em empregabilidade e inovação no mercado.",
        sameAs: ["https://www.instagram.com/tecminas.ead"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos",
          addressLocality: "Cel. Fabriciano",
          addressRegion: "MG",
          postalCode: "35170-037",
          addressCountry: "BR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55-31-97314-4070",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://colegiotecminas.com.br#website",
        url: "https://colegiotecminas.com.br",
        name: "Colégio Técnico TecMinas",
        publisher: {
          "@id": "https://colegiotecminas.com.br#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://colegiotecminas.com.br/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://colegiotecminas.com.br#webpage",
        url: "https://colegiotecminas.com.br",
        name: "Colégio Técnico TecMinas - Cursos Técnicos e Profissionalizantes",
        isPartOf: {
          "@id": "https://colegiotecminas.com.br#website",
        },
        about: {
          "@id": "https://colegiotecminas.com.br#organization",
        },
        description:
          "Educação técnica de excelência em Minas Gerais. Descubra nossos cursos técnicos com foco em empregabilidade e inovação.",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://colegiotecminas.com.br#localbusiness",
        name: "Colégio Técnico TecMinas",
        image: "https://colegiotecminas.com.br/logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos",
          addressLocality: "Cel. Fabriciano",
          addressRegion: "MG",
          postalCode: "35170-037",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -19.5187,
          longitude: -42.6269,
        },
        telephone: "+55-31-97314-4070",
        url: "https://colegiotecminas.com.br",
      },
      {
        "@type": "Course",
        name: "Técnico em Agente Comunitário de Saúde - Por Competência",
        description:
          "Capacitar o profissional para ser o elo vital entre a comunidade e os serviços de saúde, fortalecendo o SUS.",
        provider: {
          "@id": "https://colegiotecminas.com.br#organization",
        },
      },
      {
        "@type": "Course",
        name: "Técnico em Logística",
        description:
          "Formação para atuar em gestão da cadeia de suprimentos, transporte, estoque e processos logísticos.",
        provider: {
          "@id": "https://colegiotecminas.com.br#organization",
        },
      },
    ],
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}