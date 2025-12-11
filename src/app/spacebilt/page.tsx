// /app/spacebilt/page.tsx
import React from "react";
import { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";

const companyName = "SpaceBilt";

export const metadata: Metadata = {
  title: `${companyName} – We build the data centers that live in space.`,
  description: `${companyName} – We build the data centers that live in space.`,
  keywords: [companyName],
  openGraph: {
    title: `${companyName} – We build the data centers that live in space.`,
    description: `${companyName} – We build the data centers that live in space.`,
    url: "https://orbitalaifactory.com/spacebilt",
    siteName: companyName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${companyName} – We build the data centers that live in space.`,
    description: `${companyName} – We build the data centers that live in space.`,
    site: "@orbitalfactory",
    creator: "@orbitalfactory",
    images: ["https://orbitalaifactory.com/icon"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyName,
  sameAs: [
    "https://orbitalaifactory.com",
    "https://twitter.com/spacebilt",
    "https://facebook.com/spacebilt"
  ],
  image: "/logo192.png",
  description: `${companyName} – We build the data centers that live in space.`,
};

export default function SpaceBiltPage() {
  return (
    <>
      <HomePageContent companyName={companyName} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
