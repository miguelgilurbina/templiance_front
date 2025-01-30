import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/general/Header";
import Footer from "@/app/general/Footer";
import { createClient } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return {
    title: settings.data.site_title || "Templiance Fallback",
    description: settings.data.meta_description || "Teplates for your success",
    openGraph: {
      images: [settings.data.og_image.url || "Metadata Image"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
