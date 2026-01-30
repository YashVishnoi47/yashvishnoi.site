import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Cursor from "@/components/ui/Cursor";
import { Toaster } from "@/components/ui/sonner";
import SmoothScroll from "@/components/SmootheScroll";
import CtaCardSection from "@/components/sections/CtaCard/CtaCardSection";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Yash Vishnoi | Full-Stack Next.js Developer",
  description:
    "Portfolio of Yash Vishnoi — Full-Stack Next.js Developer and UI/UX Designer building fast, scalable, and modern web applications for startups and businesses.",

  keywords: [
    "Yash Vishnoi",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
  ],

  authors: [{ name: "Yash Vishnoi", url: "https://yashvishnoi.vercel.app" }],
  creator: "Yash Vishnoi",
  publisher: "Yash Vishnoi",

  alternates: {
    canonical: "https://yashvishnoi.vercel.app",
  },

  openGraph: {
    title: "Yash Vishnoi | Full-Stack Next.js Developer",
    description:
      "Full-Stack Next.js Developer & UI/UX Designer building modern, scalable web applications.",
    url: "https://yashvishnoi.vercel.app",
    siteName: "Yash Vishnoi Portfolio",
    images: [
      {
        url: "https://yashvishnoi.vercel.app/og-image.png",
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
    images: ["https://yashvishnoi.vercel.app/og-image.png"],
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
        "@id": "https://yashvishnoi.vercel.app/#person",
        name: "Yash Vishnoi",
        url: "https://yashvishnoi.vercel.app/",
        image: "https://yashvishnoi.vercel.app/og-image.png",
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
        "@id": "https://yashvishnoi.vercel.app/#website",
        url: "https://yashvishnoi.vercel.app",
        name: "Yash Vishnoi | Full-Stack Next.js Developer",
        description:
          "Portfolio website of Yash Vishnoi, a Full-Stack Next.js Developer building modern, fast, and scalable web applications.",
        publisher: {
          "@id": "https://yashvishnoi.vercel.app/#person",
        },
      },
    ],
  };
  return (
    <html className="" lang="en">
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
        className={`${roboto.className} bg-bg-dark hsb2 relative antialiased flex flex-col justify-center items-center selection:bg-[#7C3AED] selection:text-white `}
      >
        <Navbar />
        {children}
        <CtaCardSection />
        <div className="w-full h-10 bg-black/5 rounded-sm max-w-360"></div>
        <Footer />
        <Toaster />
        <Cursor />
      </body>
    </html>
  );
}
