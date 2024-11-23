import Header from "@/components/Header/Header";
import "./globals.css";
import { ThemeProvider } from "./theme/ThemeContext";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Duke's Portfolio",
  description: "All about Duke!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}