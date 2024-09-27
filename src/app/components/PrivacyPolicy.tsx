import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Política de Privacidad
          </CardTitle>
          <CardDescription>
            Última actualización: {new Date().toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-2">1. Introducción</h2>
                <p>
                  En Templiance, valoramos y respetamos su privacidad. Esta
                  Política de Privacidad explica cómo recopilamos, usamos,
                  almacenamos y protegemos sus datos personales cuando utiliza
                  nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  2. Recopilación de Datos
                </h2>
                <p>
                  Recopilamos información que usted nos proporciona
                  directamente, como su nombre, dirección de correo electrónico
                  y detalles de pago cuando se registra o realiza una compra.
                  También podemos recopilar datos automáticamente sobre su uso
                  de nuestro sitio web y servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">3. Uso de Datos</h2>
                <p>
                  Utilizamos sus datos personales para proporcionar y mejorar
                  nuestros servicios, procesar transacciones, comunicarnos con
                  usted y personalizar su experiencia. No vendemos sus datos
                  personales a terceros.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  4. Almacenamiento y Seguridad
                </h2>
                <p>
                  Sus datos se almacenan de forma segura en servidores ubicados
                  en la Unión Europea. Implementamos medidas de seguridad
                  técnicas y organizativas para proteger sus datos contra
                  accesos no autorizados, pérdida o alteración.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">5. Sus Derechos</h2>
                <p>Usted tiene derecho a:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                  <li>Solicitar la portabilidad de sus datos</li>
                  <li>Retirar su consentimiento en cualquier momento</li>
                </ul>
                <p className="mt-2">
                  Para ejercer estos derechos, por favor contáctenos a través de{" "}
                  <Link
                    href="mailto:privacy@templiance.com"
                    className="text-primary hover:underline"
                  >
                    privacy@templiance.com
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  6. Compartir Información con Terceros
                </h2>
                <p>
                  No vendemos ni alquilamos sus datos personales a terceros. Sin
                  embargo, podemos compartir información con proveedores de
                  servicios que nos ayudan a operar nuestro negocio (por
                  ejemplo, procesadores de pago o servicios de alojamiento web).
                  Estos proveedores están obligados contractualmente a proteger
                  sus datos y solo pueden utilizarlos para los fines específicos
                  que les hemos asignado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  7. Cookies y Tecnologías Similares
                </h2>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar su
                  experiencia en nuestro sitio web, analizar el tráfico y
                  personalizar el contenido. Puede gestionar sus preferencias de
                  cookies a través de la configuración de su navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  8. Cambios en la Política de Privacidad
                </h2>
                <p>
                  Podemos actualizar esta política de privacidad ocasionalmente.
                  Le notificaremos cualquier cambio significativo publicando la
                  nueva política de privacidad en esta página y actualizando la
                  fecha de última actualización.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">9. Contacto</h2>
                <p>
                  Si tiene preguntas o inquietudes sobre nuestra política de
                  privacidad, no dude en contactarnos en{" "}
                  <Link
                    href="mailto:privacy@templiance.com"
                    className="text-primary hover:underline"
                  >
                    privacy@templiance.com
                  </Link>
                  .
                </p>
              </section>
            </div>
          </ScrollArea>
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <Link href="/">Volver a la página principal</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
