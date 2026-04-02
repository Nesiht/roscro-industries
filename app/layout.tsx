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
  metadataBase: new URL("https://roscro.eu"),
  title: {
    default: "RosCro Industries",
    template: "%s | RosCro Industries",
  },
  description:
    "Join RosCro Industries – a highsec-focused EVE Online corporation specializing in industry, mining, and long-term nullsec expansion.",
  keywords: [
    "EVE Online corp",
    "EVE Online industry",
    "EVE Online highsec corporation",
    "EVE Online mining corp",
  ],
  openGraph: {
    title: "RosCro Industries",
    description:
      "Highsec industry corporation in EVE Online focused on long-term growth.",
    url: "https://roscro.eu",
    siteName: "RosCro Industries",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
