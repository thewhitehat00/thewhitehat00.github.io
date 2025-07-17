import type { Metadata } from "next";
import { Outfit } from 'next/font/google'
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: "WhiteHat's Club",
  description: "Unleashing the Power of Young Minds to Build, Break, and Innovate with Purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${outfit.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
