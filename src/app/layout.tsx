import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { homepageContent } from "@/content/homepage";
import { buildMetadata } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = buildMetadata(homepageContent.meta);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black font-sans">
        <Header content={homepageContent.nav} />
        <main className="flex-1">{children}</main>
        <Footer content={homepageContent.footer} presence={homepageContent.globalPresence} />
      </body>
    </html>
  );
}
