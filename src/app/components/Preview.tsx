"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TemplateCardProps {
  image: string;
  title: string;
  description: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  image,
  title,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image
      src={image}
      alt={title}
      width={300}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-primary text-lg font-semibold text-primary mb-2">
        {title}
      </h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  </div>
);

export default function TemplateShowcaseSection() {
  const templates = [
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "ISO 27001 Checklist",
      description:
        "Guía completa para la implementación de seguridad de la información.",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "GDPR Compliance Kit",
      description:
        "Herramientas esenciales para cumplir con la regulación de protección de datos.",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "SOC 2 Audit Prep",
      description:
        "Preparación exhaustiva para la auditoría de controles de servicio.",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "PCI DSS Toolkit",
      description:
        "Recursos para asegurar el cumplimiento en el manejo de datos de tarjetas.",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "HIPAA Compliance Pack",
      description:
        "Conjunto de herramientas para la protección de información de salud.",
    },
  ];

  return (
    <section className="bg-backup py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-primary text-3xl font-bold text-primary text-center mb-8">
          Descubre Nuestros Templates
        </h2>
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {templates.map((template, index) => (
              <div key={index} className="flex-none w-72">
                <TemplateCard {...template} />
              </div>
            ))}
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-primary hover:text-accent focus:outline-none"
            aria-label="Anterior template"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-primary hover:text-accent focus:outline-none"
            aria-label="Siguiente template"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="text-center mt-8">
          <Button className="bg-accent text-white hover:bg-accent/90">
            Ver Todos los Templates
          </Button>
        </div>
      </div>
    </section>
  );
}
