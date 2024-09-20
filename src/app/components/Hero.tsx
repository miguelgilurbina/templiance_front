"use client";

import { Button } from "../../components/ui/button";
import image1 from "../../../public/image1.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Hero Section */}
      <section className="bg-backup py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-primary text-5xl font-bold text-primary mb-4">
                Simplifica tus auditorías y certificaciones
              </h1>
              <p className="text-secondary text-xl mb-8">
                Templiance te ofrece templates profesionales para agilizar tus
                procesos de cumplimiento normativo.
              </p>
              <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-3">
                Explorar Templates
              </Button>
            </div>
            <div className="hidden md:block">
              <Image
                src={image1}
                alt="Ilustración de auditoría"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
