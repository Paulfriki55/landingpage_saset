import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SmoothScroll from "../components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SASET - Servicios Aduaneros y Gestión Logística Internacional | Ecuador",
  description: "Expertos en servicios aduaneros, trámites de importación y exportación, y gestión logística internacional en Ecuador. Soluciones integrales para comercio exterior.",
  keywords: "servicios aduaneros, gestión aduanera Ecuador, trámites importación exportación, logística internacional, comercio exterior, aduanas Ecuador",
  authors: [{ name: "SASET" }],
  creator: "SASET",
  publisher: "SASET",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saset.com.ec'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SASET - Servicios Aduaneros y Gestión Logística Internacional",
    description: "Expertos en servicios aduaneros, trámites de importación y exportación, y gestión logística internacional en Ecuador.",
    url: 'https://saset.com.ec',
    siteName: 'SASET',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SASET - Servicios Aduaneros',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SASET - Servicios Aduaneros y Gestión Logística Internacional",
    description: "Expertos en servicios aduaneros, trámites de importación y exportación, y gestión logística internacional en Ecuador.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C8102E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="EC" />
        <meta name="geo.placename" content="Ecuador" />
        <meta name="geo.position" content="-0.2299;-78.5249" />
        <meta name="ICBM" content="-0.2299, -78.5249" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SASET",
              "url": "https://saset.com.ec",
              "logo": "https://saset.com.ec/logo.png",
              "description": "Servicios aduaneros y gestión logística internacional en Ecuador",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "EC",
                "addressLocality": "Quito",
                "addressRegion": "Pichincha"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+593-2-XXXXXXX",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://www.facebook.com/saset",
                "https://www.linkedin.com/company/saset",
                "https://www.instagram.com/saset"
              ],
              "serviceType": "Servicios Aduaneros",
              "areaServed": "Ecuador",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios Aduaneros",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Trámites de Importación",
                      "description": "Gestión completa de trámites de importación en Ecuador"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Trámites de Exportación",
                      "description": "Gestión completa de trámites de exportación en Ecuador"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Logística Internacional",
                      "description": "Servicios de logística y transporte internacional"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
