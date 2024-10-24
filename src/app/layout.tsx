import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");
  return {
    title: page.data.site_title || "Templiance Fallback",
    description: page.data.meta_description || "Teplates for your success",
    openGraph: {
      images: [page.data.og_image.url || "Metadata Image"],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
