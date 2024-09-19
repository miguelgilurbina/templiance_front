import React from "react";
import { Search, FileText, CheckSquare, Award } from "lucide-react";

interface HowItWorksProps {
  icon: React.ReactNode; // Para elementos JSX como íconos
  title: string;
  description: string;
}

const StepItem: React.FC<HowItWorksProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="font-primary text-xl font-semibold text-primary mb-2">
      {title}
    </h3>
    <p className="text-secondary">{description}</p>
  </div>
);

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Search size={48} />,
      title: "Busca tu Template",
      description:
        "Explora nuestra amplia biblioteca de plantillas para diferentes normativas y certificaciones.",
    },
    {
      icon: <FileText size={48} />,
      title: "Personaliza",
      description:
        "Adapta la plantilla a las necesidades específicas de tu organización.",
    },
    {
      icon: <CheckSquare size={48} />,
      title: "Implementa",
      description:
        "Utiliza la plantilla para guiar tu proceso de cumplimiento o preparación para auditoría.",
    },
    {
      icon: <Award size={48} />,
      title: "Certifícate",
      description:
        "Logra tus certificaciones y supera auditorías con confianza.",
    },
  ];

  return (
    <section className="bg-backup py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-primary text-3xl font-bold text-primary text-center mb-12">
          Cómo Funciona Templiance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepItem key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
