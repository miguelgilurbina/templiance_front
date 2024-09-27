import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simular envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-primary text-4xl font-bold text-primary text-center mb-12">
          Contáctanos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  {...register("name", {
                    required: "El nombre es obligatorio",
                  })}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "El correo electrónico es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Dirección de correo inválida",
                    },
                  })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  {...register("subject", {
                    required: "El asunto es obligatorio",
                  })}
                  className={errors.subject ? "border-red-500" : ""}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  {...register("message", {
                    required: "El mensaje es obligatorio",
                  })}
                  className={errors.message ? "border-red-500" : ""}
                  rows={5}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>

            {submitStatus === "success" && (
              <Alert className="mt-4 bg-green-100 border-green-400 text-green-700">
                <AlertTitle>¡Éxito!</AlertTitle>
                <AlertDescription>
                  Tu mensaje ha sido enviado correctamente. Nos pondremos en
                  contacto contigo pronto.
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert className="mt-4 bg-red-100 border-red-400 text-red-700">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Hubo un problema al enviar tu mensaje. Por favor, inténtalo de
                  nuevo más tarde.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="bg-backup p-8 rounded-lg">
            <h2 className="font-primary text-2xl font-semibold text-primary mb-6">
              Información de Contacto
            </h2>
            <div className="space-y-4">
              <p className="flex items-center text-secondary">
                <Mail className="mr-2" size={20} />
                info@templiance.com
              </p>
              <p className="flex items-center text-secondary">
                <Phone className="mr-2" size={20} />
                +1 (555) 123-4567
              </p>
              <div className="flex space-x-4 mt-6">
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
          </div>
        </div>
      </main>
    </div>
  );
}
