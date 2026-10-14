
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://madia.africasuk.com";
const BRAND_URL = "https://africasuk.com";
const LOGO_URL = `${BRAND_URL}/logo.png`;

const SOCIAL_LINKS = [
  "https://www.instagram.com/africa.suk/",
  "https://x.com/africasuk",
  "https://www.threads.com/@africa.suk",
  "https://www.youtube.com/@AfricaSuk",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Africa Suk | Official Social Media & Customer Reviews",
    template: "%s | Africa Suk",
  },

  description:
    "Connect with Africa Suk, South Sudan's online shopping platform. Follow our official social media, discover new products, share your shopping experience, and leave a customer review. Shop With Confidence.",

  applicationName: "Africa Suk",

  authors: [
    {
      name: "Africa Suk",
      url: BRAND_URL,
    },
  ],

  creator: "Africa Suk",
  publisher: "Africa Suk",

  category: "Shopping",

  keywords: [
    "Africa Suk",
    "AfricaSuk",
    "Africa Suk South Sudan",
    "South Sudan online shopping",
    "Africa Suk official social media",
    "Africa Suk Instagram",
    "Africa Suk Facebook",
    "Africa Suk TikTok",
    "Africa Suk YouTube",
    "Africa Suk Threads",
    "Africa Suk X",
    "Africa Suk WhatsApp",
    "Africa Suk LinkedIn",
    "Africa Suk customer reviews",
    "Shop With Confidence",
    "online marketplace South Sudan",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Africa Suk",
    title: "Africa Suk | Connect With Us",
    description:
      "Follow Africa Suk on social media, discover new arrivals, and share your shopping experience. Shop With Confidence.",
    images: [
      {
        url: LOGO_URL,
        width: 512,
        height: 512,
        alt: "Africa Suk official logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    site: "@africasuk",
    title: "Africa Suk | Official Social Media",
    description:
      "Connect with Africa Suk, discover new products, and share your experience. Shop With Confidence.",
    images: [
      {
        url: LOGO_URL,
        alt: "Africa Suk official logo",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#021f12",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BRAND_URL}/#organization`,
  name: "Africa Suk",
  alternateName: ["AfricaSuk", "Africa Suk South Sudan"],
  url: BRAND_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
  description:
    "Africa Suk is an online shopping platform serving South Sudan. Its tagline is Shop With Confidence.",
  sameAs: SOCIAL_LINKS,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Africa Suk",
  alternateName: "AfricaSuk",
  url: SITE_URL,
  publisher: {
    "@id": `${BRAND_URL}/#organization`,
  },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}
