import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Titan Defense Technologies | Canadian Military Innovation",
  description:
    "Titan Defense Technologies delivers next-generation defense systems, battlefield communication, and tactical innovations for Canada and NATO allies.",
  keywords: [
    "Titan Defense",
    "Canadian Military Tech",
    "Tactical Systems",
    "Warfighter Innovation",
    "LoRa Communications",
    "Combat Wearables",
    "Defense AI",
    "Military Startups",
    "C4ISR",
    "Canadian Defense Contractors",
    "ISR Systems",
    "Battlefield Tech",
  ],
  metadataBase: new URL("https://www.titandefensetechnologies.com"),
  openGraph: {
    title: "Titan Defense Technologies",
    description:
      "Commanding the battlespace through advanced Canadian defense systems and tactical innovation.",
    url: "https://www.titandefensetechnologies.com",
    siteName: "Titan Defense Technologies",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Titan Defense Technologies Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titan Defense Technologies",
    description:
      "Next-gen Canadian military technology and battlefield systems.",
    images: ["/images/logo.png"],
    site: "@TitanDefense",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.titandefensetechnologies.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
