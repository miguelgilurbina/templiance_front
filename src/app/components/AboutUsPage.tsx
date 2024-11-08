import React from "react";
import Image from "next/image";
import SectionTitle from "../general/SectionTitle";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components//ui/button";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  linkedin: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  image,
  linkedin,
}) => (
  <div className="flex flex-col items-center">
    <Image
      src={image}
      alt={name}
      width={200}
      height={200}
      className="rounded-full mb-4"
    />
    <h3 className="font-primary text-xl font-semibold text-primary">{name}</h3>
    <p className="text-secondary">{position}</p>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 text-accent hover:text-accent/80"
    >
      <Linkedin size={24} />
    </a>
  </div>
);

export default function AboutUsPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-primary text-4xl font-bold text-primary text-center mb-12">
          Acerca de Templiance
        </h1>

        <section className="mb-16">
          <SectionTitle>Misión</SectionTitle>
          <p className="text-secondary mb-4 ">
            En Templiance, nuestra misión es simplificar y agilizar los procesos
            de cumplimiento normativo y certificación para empresas de todos los
            tamaños. Creemos que el cumplimiento no debería ser una carga, sino
            una oportunidad para mejorar y crecer.
          </p>
        </section>

        <section className="mb-16">
          <SectionTitle>Visión</SectionTitle>
          <p className="text-secondary mb-4">
            Aspiramos a ser el líder global en soluciones de cumplimiento,
            creando un mundo donde cada organización pueda alcanzar y mantener
            los más altos estándares de seguridad y calidad con facilidad y
            confianza.
          </p>
        </section>

        <section className="mb-16">
          <SectionTitle>Nuestra Historia</SectionTitle>
          <p className="text-secondary mb-4">
            Templiance nació en 2018 de la frustración compartida por nuestros
            fundadores, Ana y Carlos, quienes experimentaron de primera mano los
            desafíos y la complejidad de los procesos de auditoría y
            certificación en sus roles anteriores como consultores de
            cumplimiento.
          </p>
          <p className="text-secondary mb-4">
            Reconociendo la necesidad de una solución que simplificara estos
            procesos, Ana y Carlos reunieron a un equipo de expertos en
            cumplimiento y desarrolladores de software para crear Templiance.
            Desde entonces, hemos ayudado a más de 1,000 empresas a optimizar
            sus procesos de cumplimiento, ahorrándoles tiempo y recursos
            valiosos.
          </p>
        </section>

        <section className="mb-16">
          <SectionTitle>Nuestro Equipo</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Ana Rodríguez"
              position="Co-fundadora y CEO"
              image=""
              linkedin="https://www.linkedin.com/in/ana-rodriguez"
            />
            <TeamMember
              name="Carlos Méndez"
              position="Co-fundador y CTO"
              image=""
              linkedin="https://www.linkedin.com/in/carlos-mendez"
            />
            <TeamMember
              name="Laura Sánchez"
              position="Directora de Cumplimiento"
              image=""
              linkedin="https://www.linkedin.com/in/laura-sanchez"
            />
            <TeamMember
              name="Miguel Torres"
              position="Director de Producto"
              image=""
              linkedin="https://www.linkedin.com/in/miguel-torres"
            />
          </div>
        </section>

        <section className="mb-16">
          <SectionTitle>Contáctanos</SectionTitle>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-backup p-6 rounded-lg">
            <div className="mb-4 md:mb-0">
              <p className="text-secondary mb-2 flex items-center">
                <Mail className="mr-2" size={20} />
                info@templiance.com
              </p>
              <p className="text-secondary mb-2 flex items-center">
                <Phone className="mr-2" size={20} />
                +1 (555) 123-4567
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://twitter.com/templiance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/templiance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <Button className="bg-accent text-white hover:bg-accent/90">
              Programa una Demo
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
