import React from "react";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://fostiums.org/#organization",
        name: "FOSTI UMS",
        alternateName: [
          "Forum Open Source Teknik Informatika UMS",
          "FOSTI Universitas Muhammadiyah Surakarta",
          "FOSTI FKI UMS",
        ],
        url: "https://fostiums.org",
        logo: {
          "@type": "ImageObject",
          url: "https://fostiums.org/logo.png",
          caption: "FOSTI UMS Logo",
        },
        image: "https://fostiums.org/og-banner.png",
        description:
          "Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta (FOSTI UMS) adalah organisasi kemahasiswaan riset, pengembangan software open source, dan inovasi teknologi.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. A. Yani, Pabelan, Kartasura",
          addressLocality: "Sukoharjo",
          addressRegion: "Jawa Tengah",
          postalCode: "57169",
          addressCountry: "ID",
        },
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: "Universitas Muhammadiyah Surakarta",
          url: "https://www.ums.ac.id",
        },
        sameAs: [
          "https://github.com/fosti-ums",
          "https://www.instagram.com/fosti_ums",
          "https://www.linkedin.com/company/fosti-ums",
          "https://youtube.com/@fostiums",
        ],
        knowsAbout: [
          "Open Source Software",
          "Linux & DevOps",
          "Web Development",
          "Artificial Intelligence",
          "Robotics & IoT",
          "Competitive Programming",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://fostiums.org/#website",
        url: "https://fostiums.org",
        name: "FOSTI UMS — Leading The Future of Open Source",
        description:
          "Official website of Forum Open Source Teknik Informatika Universitas Muhammadiyah Surakarta.",
        publisher: {
          "@id": "https://fostiums.org/#organization",
        },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  image,
  slug,
  author,
}: {
  title: string;
  description: string;
  datePublished: string;
  image: string;
  slug: string;
  author: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "FOSTI UMS",
      url: "https://fostiums.org",
      logo: {
        "@type": "ImageObject",
        url: "https://fostiums.org/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fostiums.org/blogs/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
