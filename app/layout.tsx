import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.playabanc.com"),
  alternates: {
    canonical: "/",
  },
  title:
    "Autism Services & ABA Therapy in Asheboro and Randolph County, NC | Kristyn Hardin, BCBA",
  description:
    "ABA therapy for children with autism in Asheboro and Randolph County, NC. Kristyn Hardin, BCBA offers home, school and community support. Free consultation.",
  openGraph: {
    title: "Autism Services & ABA Therapy in Randolph County, NC | Kristyn Hardin, BCBA",
    description:
      "ABA therapy for children with autism in Asheboro and Randolph County, NC. Free first consultation.",
    url: "/",
    siteName: "Kristyn Hardin, BCBA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Autism Services & ABA Therapy in Randolph County, NC | Kristyn Hardin, BCBA",
    description:
      "ABA therapy for children with autism in Asheboro and Randolph County, NC. Free first consultation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        {/* Prevent theme flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('aba-theme');if(t==='spectrum'||t==='playful'){document.documentElement.setAttribute('data-theme',t);}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
