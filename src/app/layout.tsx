import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohit Pant | Software Engineer, Full-Stack & AI Agent Developer",
  description: "IIT Kharagpur Dual Degree student building production-ready mobile/web apps, AI automation systems, and offline-first software.",
  keywords: ["Mohit Pant", "IIT Kharagpur", "Software Engineer", "Full Stack Developer", "AI Developer", "AI Agents", "React Native", "Next.js", "Zustand", "SQLite", "Node.js"],
  authors: [{ name: "Mohit Pant" }],
  openGraph: {
    title: "Mohit Pant | Portfolio & Technical Showcase",
    description: "IIT Kharagpur Dual Degree student building production-ready mobile/web apps, AI automation systems, and offline-first software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col paper-grid">
        {children}
      </body>
    </html>
  );
}
