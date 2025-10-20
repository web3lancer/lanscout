import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

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
    <html lang="en">
      <body style={{ fontFamily: manrope.style.fontFamily }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
