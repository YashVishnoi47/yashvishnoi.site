import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";
import FooterCTA from "@/components/layout/FooterCTA";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://yashvishnoi.site"),

  title: {
    default: "Yash Vishnoi | Full-Stack Next.js Developer",
    template: "%s | Yash Vishnoi",
  },

  description:
    "Portfolio of Yash Vishnoi — Full-Stack Next.js Developer and Website Designer building High performing, scalable, and modern websites for startups and businesses.",

  keywords: [
    "Yash Vishnoi",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "SAAS Developer",
    "Website Designer",
    "Ui/UX Designer",
    "Problem Solver",
  ],

  authors: [{ name: "Yash Vishnoi", url: "https://yashvishnoi.site" }],
  creator: "Yash Vishnoi",
  publisher: "Yash Vishnoi",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Yash Vishnoi | Full-Stack Next.js Developer",
    description:
      "Full-Stack Next.js Developer & UI/UX Designer building modern, scalable web applications.",
    url: "https://yashvishnoi.site",
    siteName: "Yash Vishnoi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Vishnoi - Full-Stack Next.js Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yash Vishnoi | Full-Stack Next.js Developer",
    description:
      "Portfolio of Yash Vishnoi — Full-Stack Next.js Developer building modern web apps.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://yashvishnoi.site/#person",
        name: "Yash Vishnoi",
        url: "https://yashvishnoi.site/",
        image: "https://yashvishnoi.site/og-image.png",
        jobTitle: "Full-Stack Next.js Developer",
        description:
          "Full-Stack Web Developer specializing in Next.js, React, and scalable web applications.",
        sameAs: [
          "https://github.com/YashVishnoi47",
          "https://www.linkedin.com/in/yash-vishnoi-654318384/",
        ],
        knowsAbout: [
          "Next.js",
          "React.js",
          "Node.js",
          "MongoDB",
          "Web Development",
          "Full-Stack Development",
          "JavaScript",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://yashvishnoi.site/#website",
        url: "https://yashvishnoi.site",
        name: "Yash Vishnoi | Full-Stack Next.js Developer",
        description:
          "Portfolio website of Yash Vishnoi, a Full-Stack Next.js Developer building modern, fast, and scalable web applications.",
        publisher: {
          "@id": "https://yashvishnoi.site/#person",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="1Tw-JhoSrQ04RxMwArE7pimVOTJ2Y9wIlas6ak6i-jM"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body
        className={cn(
          "bg-main-bg relative antialiased selection:bg-accent-main selection:text-white mx-auto max-w-[1056px]",
          `${inter.variable} ${inter.className} ${ibmPlexMono.variable} ${fraunces.variable}`,
        )}
      >
        <SessionProvider>
          <Navbar />
          {children}
          <FooterCTA />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
