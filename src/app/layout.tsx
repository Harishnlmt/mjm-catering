import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MJM Catering | Premium Catering Services in The Nilgiris",
  description: "High-quality luxury catering services for weddings, parties, and events. Authentic taste and professional service. Based in Ithalar, The Nilgiris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
