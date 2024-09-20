import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  position,
  company,
  rating,
  testimonial,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <Image
        src={image}
        alt={name}
        width={60}
        height={60}
        className="rounded-full mr-4"
      />
      <div>
        <h3 className="font-primary text-lg font-semibold text-primary">
          {name}
        </h3>
        <p className="text-secondary text-sm">
          {position}, {company}
        </p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < rating ? "text-accent" : "text-gray-300"}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
    <p className="text-secondary">{testimonial}</p>
  </div>
);

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "/placeholder.svg?height=60&width=60",
      name: "Ana Rodríguez",
      position: "Gerente de Cumplimiento",
      company: "TechSolutions Inc.",
      rating: 5,
      testimonial:
        "Templiance ha revolucionado nuestra forma de prepararnos para las auditorías. Los templates son exhaustivos y fáciles de personalizar.",
    },
    {
      image: "/placeholder.svg?height=60&width=60",
      name: "Carlos Méndez",
      position: "Director de Seguridad",
      company: "DataGuard Systems",
      rating: 4,
      testimonial:
        "Gracias a Templiance, hemos reducido el tiempo de preparación para nuestras certificaciones en un 40%. Una herramienta indispensable.",
    },
    {
      image: "/placeholder.svg?height=60&width=60",
      name: "Laura Sánchez",
      position: "Consultora de Cumplimiento",
      company: "Regulatory Experts",
      rating: 5,
      testimonial:
        "Como consultora, recomiendo Templiance a todos mis clientes. La calidad y actualización de sus templates es inigualable en el mercado.",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-primary text-3xl font-bold text-primary text-center mb-12">
          Lo que Dicen Nuestros Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
