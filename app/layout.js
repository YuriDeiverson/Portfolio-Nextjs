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
    default: "Yuri Deiverson | Fullstack Developer & UX",
    template: "%s | Yuri Deiverson",
  },
  description:
    "Yuri Deiverson Portfolio — fullstack developer (React, Next.js, Node.js) and UX, Alagoas, Brazil. Projects, GitHub and contact.",
  keywords: [
    "fullstack developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Alagoas",
    "Brazil",
  ],
  authors: [{ name: "Yuri Deiverson" }],
  openGraph: {
    title: "Yuri Deiverson | Fullstack Developer & UX",
    description:
      "Fullstack and UX: React, Next.js, Node.js, TypeScript. See projects and get in touch.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Deiverson | Fullstack Developer & UX",
    description:
      "Fullstack and UX: React, Next.js, Node.js. Projects and contact.",
  },
  robots: { index: true, follow: true },
};

const themeScript = `(function(){try{var t=localStorage.theme;if(t==="dark"||(!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
