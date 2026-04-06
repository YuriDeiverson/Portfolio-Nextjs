import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

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
    default: "Yuri Deiverson | Desenvolvedor Fullstack & UX",
    template: "%s | Yuri Deiverson",
  },
  description:
    "Portfólio de Yuri Deiverson — desenvolvedor fullstack (React, Next.js, Node.js) e UX, Alagoas, Brasil. Projetos, GitHub e contato.",
  keywords: [
    "desenvolvedor fullstack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Alagoas",
    "Brasil",
  ],
  authors: [{ name: "Yuri Deiverson" }],
  openGraph: {
    title: "Yuri Deiverson | Desenvolvedor Fullstack & UX",
    description:
      "Fullstack e UX: React, Next.js, Node.js, TypeScript. Veja projetos e entre em contato.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Deiverson | Desenvolvedor Fullstack & UX",
    description:
      "Fullstack e UX: React, Next.js, Node.js. Projetos e contato.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
