"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FileIcon, SearchIcon } from "lucide-react";
import thumbnail from "../../../public/PDFimage.png";
import Image from "next/image";

type PDFCard = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: typeof thumbnail;
};

const samplePDFs: PDFCard[] = [
  {
    id: "1",
    title: "Annual Report 2023",
    description: "Comprehensive financial report for the fiscal year 2023",
    thumbnailUrl: thumbnail,
  },
  {
    id: "2",
    title: "Product Catalog",
    description: "Detailed catalog of our latest product offerings",
    thumbnailUrl: thumbnail,
  },
  {
    id: "3",
    title: "Research Paper",
    description: "Scientific research on renewable energy sources",
    thumbnailUrl: thumbnail,
  },
  {
    id: "4",
    title: "User Manual",
    description: "Step-by-step guide for using our flagship product",
    thumbnailUrl: thumbnail,
  },
];

function PDFCard({ pdf }: { pdf: PDFCard }) {
  return (
    <Card className="w-full max-w-sm mx-auto group relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4]">
          <Image
            src={pdf.thumbnailUrl}
            alt={`Preview of ${pdf.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
            <FileIcon className="w-12 h-12 mb-2" />
            <h3 className="text-lg font-semibold mb-1">{pdf.title}</h3>
            <p className="text-sm text-center">{pdf.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PDFPreviewCards() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPDFs = samplePDFs.filter(
    (pdf) =>
      pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pdf.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 relative">
        <Input
          type="text"
          placeholder="Search PDFs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPDFs.map((pdf) => (
          <PDFCard key={pdf.id} pdf={pdf} />
        ))}
      </div>
      {filteredPDFs.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No PDFs found matching your search.
        </p>
      )}
    </div>
  );
}
