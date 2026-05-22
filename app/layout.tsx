import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Styn Hardin, BCBA | ABA Therapy Services in Asheboro, North Carolina",
  description:
    "Compassionate, evidence-based Applied Behavior Analysis therapy for children with autism spectrum disorder in Asheboro, North Carolina. Board Certified Behavior Analyst with [X] years of experience.",
  keywords: [
    "ABA therapy",
    "BCBA",
    "Applied Behavior Analysis",
    "autism therapy",
    "autism spectrum disorder",
    "Asheboro",
    "North Carolina",
    "behavior analyst",
    "child therapy",
  ],
  openGraph: {
    title: "Styn Hardin, BCBA | ABA Therapy Services",
    description:
      "Compassionate, evidence-based ABA therapy for children in Asheboro, North Carolina.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
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
