import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lanscout - Your Gateway to Opportunities",
  description: "AI-curated opportunities in hackathons, grants, and startup funding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} font-display bg-background-dark text-contrast-dark`}>
        {children}
      </body>
    </html>
  );
}
