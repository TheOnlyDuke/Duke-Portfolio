import { Roboto } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeRegistry } from "./theme/ThemeRegistry";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/nav/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mahdi Abbasi (Duke) — Software Engineer & AI/ML Researcher",
  description: "Personal site and portfolio of Mahdi Abbasi (Duke). Software engineer, AI/ML researcher, educator. Projects, research, publications, and teaching.",
  metadataBase: new URL("https://theonlyduke.github.io"),
  authors: [{ name: "Mahdi Abbasi" }],
  openGraph: {
    title: "Mahdi Abbasi (Duke) — Software Engineer & AI/ML Researcher",
    description: "Personal site and portfolio of Mahdi Abbasi (Duke). Software engineer, AI/ML researcher, educator.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <NavBar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}