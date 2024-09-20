import React from "react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-primary text-3xl font-bold text-white mb-4">
          Simplifica tu Cumplimiento Normativo Hoy
        </h2>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Únete a miles de empresas que ya confían en Templiance para agilizar
          sus procesos de auditoría y certificación.
        </p>
        <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-3">
          Comienza Gratis
        </Button>
      </div>
    </section>
  );
}
