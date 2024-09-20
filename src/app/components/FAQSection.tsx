import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-primary text-lg font-semibold text-primary">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="text-primary" />
        ) : (
          <ChevronDown className="text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-secondary">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Qué es Templiance?",
      answer:
        "Templiance es una plataforma que ofrece templates profesionales para simplificar los procesos de auditoría y certificación en diversas normativas y estándares de cumplimiento.",
    },
    {
      question: "¿Cómo puedo empezar a usar Templiance?",
      answer:
        "Puedes comenzar registrándote en nuestra plataforma de forma gratuita. Una vez dentro, podrás explorar nuestro catálogo de templates y seleccionar los que mejor se adapten a tus necesidades.",
    },
    {
      question:
        "¿Los templates se actualizan con los cambios en las normativas?",
      answer:
        "Sí, nuestro equipo de expertos actualiza constantemente los templates para asegurar que cumplan con las últimas versiones de las normativas y estándares.",
    },
    {
      question: "¿Puedo personalizar los templates?",
      answer:
        "Absolutamente. Todos nuestros templates son completamente personalizables para adaptarse a las necesidades específicas de tu organización.",
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer:
        "Sí, ofrecemos soporte técnico a todos nuestros usuarios. Además, los usuarios premium tienen acceso a consultoría especializada.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos todas las principales tarjetas de crédito, PayPal y transferencias bancarias para cuentas empresariales.",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-primary text-3xl font-bold text-primary text-center mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
