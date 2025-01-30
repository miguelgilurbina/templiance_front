"use client";

import { useState } from "react";
import AdvancedSearchBar from "@/app/components/SearchBar";
import TemplateGrid from "@/app/components/TemplateGrid";

// Tipos
interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  certificationType: string;
  previewImage: string;
  industry: string;
}

interface Filter {
  certificationType: string[];
  industry: string[];
  priceRange: [number, number];
  sortBy: "relevance" | "price_low_to_high" | "price_high_to_low" | "newest";
}

// Datos de ejemplo (luego vendrán de tu API)
const mockTemplates: Template[] = [
  {
    id: "1",
    title: "ISO 27001 Template Pack",
    description: "Complete template pack for ISO 27001 certification",
    price: 299,
    certificationType: "ISO 27001",
    previewImage: "/templates/iso27001.jpg", // Asegúrate de tener esta imagen
    industry: "Technology",
  },
  // ... más templates
];

export default function TemplatesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredTemplates, setFilteredTemplates] =
    useState<Template[]>(mockTemplates);

  // Estado inicial para filtros
  const initialFilters: Filter = {
    certificationType: [],
    industry: [],
    priceRange: [0, 1000],
    sortBy: "relevance",
  };

  // Manejadores de eventos
  const handleSearch = async (query: string, filters: Filter) => {
    setLoading(true);
    try {
      // Aquí irá tu lógica de búsqueda/filtrado
      // Por ahora, simulamos una búsqueda
      const filtered = mockTemplates.filter((template) =>
        template.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTemplates(filtered);
    } catch (err) {
      setError("Failed to fetch templates");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filters: Filter) => {
    // Implementar lógica de filtrado
    console.log("Filters changed:", filters);
  };

  const handleTemplateSelect = (template: Template) => {
    // Implementar navegación al detalle del template
    console.log("Template selected:", template);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Certification Templates</h1>

      <div className="mb-8">
        <AdvancedSearchBar
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          initialFilters={initialFilters}
          suggestions={[]} // Implementar sugerencias
          loading={loading}
        />
      </div>

      <TemplateGrid
        templates={filteredTemplates}
        onTemplateSelect={handleTemplateSelect}
        loading={loading}
        error={error}
      />
    </main>
  );
}
