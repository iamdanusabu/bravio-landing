import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const siteUrl = "https://hellobravio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Bravio CMMS and FSM for Biomed",
    template: "%s | Bravio",
  },
  description:
    "Bravio is field service management software purpose-built for small biomedical ISO teams (5–50 technicians). Close work orders, automate PM schedules, generate ISO 13485-compliant service reports, and send invoices — all in one platform. No enterprise bloat.",

  keywords: [
    "biomedical field service management",
    "FSM software for biomedical",
    "biomed ISO software",
    "CMMS biomedical",
    "HTM software",
    "medical device maintenance software",
    "ISO 13485 compliant FSM",
    "PM scheduling biomedical",
    "work order management biomed",
    "healthcare technology management software",
    "Bravio FSM",
    "biomedical service company software",
  ],

  authors: [{ name: "Nevolabs", url: siteUrl }],
  creator: "Nevolabs",
  publisher: "Nevolabs",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Bravio CMMS and FSM for Biomed",
    title: "Bravio — FSM Software for Biomedical Service Teams",
    description:
      "Purpose-built FSM for biomedical ISO teams. Track PMs, close work orders, generate ISO 13485-compliant reports, and invoice clients — faster than any enterprise tool.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Bravio — Biomedical Field Service Management Software",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@bravioapp",
    creator: "@nevolabs",
    title: "Bravio — FSM for Biomedical Service Teams",
    description:
      "Automate PM schedules, close work orders, generate ISO-compliant reports, and invoice clients — all from one platform built for small biomed ISOs.",
    images: ["/opengraph-image.png"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/697076a5742235197e52c51c/1jffkuugi';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
