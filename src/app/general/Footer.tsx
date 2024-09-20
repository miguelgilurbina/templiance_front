import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-primary text-xl font-bold mb-4">Templiance</h3>
            <p className="mb-4">
              Simplificando el cumplimiento normativo para empresas de todos los
              tamaños.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent">
                <Linkedin size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-primary text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-accent">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-accent">
                  Términos de Servicio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-primary text-lg font-semibold mb-4">
              Productos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/templates" className="hover:text-accent">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-accent">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-accent">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-primary text-lg font-semibold mb-4">
              Suscríbete a nuestro newsletter
            </h4>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full bg-white text-primary"
              />
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90"
              >
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>
            &copy; {new Date().getFullYear()} Templiance. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
