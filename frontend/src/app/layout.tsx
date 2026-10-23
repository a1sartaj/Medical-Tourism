import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/font/google"; // or import Link from "next/link" for your layout
import "./globals.css";
import { Toaster } from "sonner";

// Lightweight variable font for medical & healthcare platforms
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "CaresDaddy.com | Global Medical Tourism & Healthcare Travel",
    template: "%s | CaresDaddy.com",
  },
  description:
    "Connect with internationally accredited hospitals and expert doctors worldwide through CaresDaddy.com[cite: 1]. Explore top medical treatments, get cost estimates, and access seamless healthcare travel assistance[cite: 1]. Developed by digitalsdaddy.com.",
  keywords: [
    "CaresDaddy.com",
    "Medical Tourism",
    "Healthcare Travel",
    "International Patient Services",
    "Affordable Surgery Abroad",
    "Hospital Accreditation",
    "Doctor Consultation",
  ],
  authors: [{ name: "digitalsdaddy.com", url: "https://digitalsdaddy.com" }],
  creator: "digitalsdaddy.com",
  publisher: "CaresDaddy.com",
  openGraph: {
    title: "CaresDaddy.com | Affordable Global Healthcare & Treatments",
    description:
      "Find top accredited hospitals, compare treatment costs, and request a free consultation with CaresDaddy.com[cite: 1]. Developed by digitalsdaddy.com.",
    url: "https://caresdaddy.com",
    siteName: "CaresDaddy.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CaresDaddy.com | Global Healthcare Travel Platform",
    description:
      "Discover accredited hospitals and verified medical specialists worldwide with CaresDaddy.com[cite: 1]. Developed by digitalsdaddy.com.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <main className="flex-1">{children}</main>

        <Toaster position="top-right" richColors closeButton />

      </body>
    </html>
  );
}