import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/components/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-center`}>
        <h1 className="text-2xl md:text-4xl my-4 font-bold bg-gradient-to-br from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">{SITE_TITLE}</h1>
        {children}
      </body>
    </html>
  );
}
