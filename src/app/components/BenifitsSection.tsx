import React from "react";
import { CheckCircle, Clock, Shield } from "lucide-react";

interface BenefitItemProps {
  icon: React.ReactNode; // Para elementos JSX como íconos
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="font-primary text-xl font-semibold text-primary mb-2">
      {title}
    </h3>
    <p className="text-secondary">{description}</p>
  </div>
);

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <CheckCircle size={48} />,
      title: "Cumplimiento Simplificado",
      description:
        "Plantillas prediseñadas que aseguran el cumplimiento de normativas actuales.",
    },
    {
      icon: <Clock size={48} />,
      title: "Ahorro de Tiempo",
      description:
        "Reduce drásticamente el tiempo de preparación para auditorías y certificaciones.",
    },
    {
      icon: <Shield size={48} />,
      title: "Seguridad Garantizada",
      description:
        "Todas las plantillas están actualizadas y validadas por expertos en la industria.",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-primary text-3xl font-bold text-primary text-center mb-12">
          Beneficios Clave de Templiance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
