import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
  variable: "--font-ovo",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Yuri Deiverson | Software Engineer",
    template: "%s | Yuri Deiverson",
  },
  description:
    "Software Engineer experienced in Java, Spring Boot, Python, Node.js, React, React Native, TypeScript, PostgreSQL, system integrations and cloud.",
  keywords: [
    "software engineer",
    "Java",
    "Spring Boot",
    "Python",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Alagoas",
    "Brazil",
  ],
  authors: [{ name: "Yuri Deiverson" }],
  openGraph: {
    title: "Yuri Deiverson | Software Engineer",
    description:
      "End-to-end software engineering across frontend, backend, databases, integrations and cloud.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Deiverson | Software Engineer",
    description:
      "Software Engineer building complete applications with Java, Python, Node.js, React and PostgreSQL.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white text-gray-900`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
