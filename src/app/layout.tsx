import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Software Engineer | Backend Developer | Full Stack`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.description} Portfolio and blog of Yogesh Rana - Computer Science student at PEC Chandigarh specializing in Backend Development, Distributed Systems, and Full Stack Web Development.`,
  keywords: [
    "Yogesh Rana Haryana",
    "Yogesh Rana",
    "Yogesh Rana Software Engineer",
    "Yogesh Rana Chandigarh",
    "Yogesh Rana PEC",
    "Yogesh Rana Developer",
    "Software Engineer Chandigarh",
    "Backend Developer India",
    "Full Stack Developer",
    "Computer Science PEC",
    "Web Developer Portfolio",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "Yogesh Rana Portfolio",
  ],
  authors: [{ name: "Yogesh Rana", url: DATA.url }],
  creator: "Yogesh Rana",
  openGraph: {
    title: `${DATA.name} - Software Engineer & Developer`,
    description: `${DATA.description} Professional portfolio showcasing projects and technical blog.`,
    url: DATA.url,
    siteName: `${DATA.name} - Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/yogesh.png`,
        width: 1200,
        height: 630,
        alt: "Yogesh Rana - Software Engineer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} - Software Engineer`,
    description: `${DATA.description}`,
    card: "summary_large_image",
    creator: "@Y_Rana2004",
    images: [`${DATA.url}/yogesh.png`],
  },
  verification: {
    google: "44VpQA1kxe8BBeZEaNfNQ8lFhy3hma6HalDROK5IisQ",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="max-w-2xl mx-auto px-container-padding">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
