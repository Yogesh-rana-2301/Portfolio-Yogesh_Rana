import { DATA } from "@/data/resume";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}/yogesh.png`,
    jobTitle: "Software Engineer",
    description: DATA.description,
    email: DATA.contact.email,
    telephone: DATA.contact.tel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Punjab Engineering College",
      sameAs: "https://pec.ac.in",
    },
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.X.url,
    ],
    knowsAbout: [
      "Software Engineering",
      "Backend Development",
      "Full Stack Development",
      "Distributed Systems",
      "Web Development",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Computer Science",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${DATA.name} - Portfolio`,
    description: DATA.description,
    url: DATA.url,
    author: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DATA.url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfilePageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2023-01-01",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
      image: `${DATA.url}/yogesh.png`,
      description: DATA.description,
      jobTitle: "Software Engineer",
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
        DATA.contact.social.X.url,
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ImageObjectSchema({
  url,
  name,
  description,
  author,
}: {
  url: string;
  name: string;
  description: string;
  author: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: url,
    name: name,
    description: description,
    author: {
      "@type": "Person",
      name: author,
    },
    license: `${DATA.url}/LICENSE`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
