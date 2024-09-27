import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Términos de Uso</CardTitle>
          <CardDescription>
            Última actualización: {new Date().toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  1. Aceptación de los Términos
                </h2>
                <p>
                  Al acceder o utilizar los servicios de Templiance, usted
                  acepta estar sujeto a estos Términos de Uso. Si no está de
                  acuerdo con alguna parte de los términos, no podrá acceder al
                  servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  2. Descripción del Servicio
                </h2>
                <p>
                  Templiance proporciona plantillas y herramientas para la
                  gestión de la ciberseguridad. Nuestros servicios están sujetos
                  a cambios o terminación sin previo aviso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  3. Responsabilidades del Usuario
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Uso Adecuado</AccordionTrigger>
                    <AccordionContent>
                      Usted se compromete a utilizar nuestros servicios solo
                      para fines legales y de acuerdo con estos Términos. No
                      debe usar el servicio de ninguna manera que pueda dañar,
                      deshabilitar, sobrecargar o deteriorar nuestros servidores
                      o redes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Prohibiciones</AccordionTrigger>
                    <AccordionContent>
                      Está prohibido: (a) copiar o modificar el software de la
                      plataforma; (b) usar el servicio para transmitir virus o
                      código malicioso; (c) intentar acceder no autorizado a
                      nuestros sistemas; (d) revender o redistribuir nuestros
                      servicios sin autorización.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Conducta Aceptable</AccordionTrigger>
                    <AccordionContent>
                      Usted acepta no acosar, abusar, amenazar o intimidar a
                      otros usuarios. Debe respetar los derechos de propiedad
                      intelectual y no publicar contenido que infrinja los
                      derechos de terceros.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  4. Derechos de Propiedad Intelectual
                </h2>
                <p>
                  El contenido, características y funcionalidad de Templiance
                  son propiedad de la empresa y están protegidos por leyes de
                  propiedad intelectual. No se permite la reproducción,
                  distribución o modificación sin nuestro consentimiento
                  expreso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  5. Limitación de Responsabilidad
                </h2>
                <p>Templiance no se hace responsable de:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>
                    Pérdidas o daños resultantes del uso incorrecto de nuestras
                    plantillas o herramientas.
                  </li>
                  <li>
                    Falta de éxito en auditorías de seguridad realizadas
                    utilizando nuestros servicios.
                  </li>
                  <li>Interrupciones o errores en el servicio.</li>
                  <li>
                    Pérdida de datos o brechas de seguridad que ocurran en los
                    sistemas del usuario.
                  </li>
                </ul>
                <p className="mt-2">
                  Nuestros servicios se proporcionan tal cual y según
                  disponibilidad sin garantías de ningún tipo, ya sean expresas
                  o implícitas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  6. Modificaciones de los Términos
                </h2>
                <p>
                  Nos reservamos el derecho de modificar o reemplazar estos
                  Términos en cualquier momento. Los cambios sustanciales serán
                  notificados a través de nuestro sitio web o por correo
                  electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">7. Terminación</h2>
                <p>
                  Podemos terminar o suspender su acceso al servicio
                  inmediatamente, sin previo aviso ni responsabilidad, por
                  cualquier motivo, incluyendo, sin limitación, si usted
                  incumple los Términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  8. Ley Aplicable
                </h2>
                <p>
                  Estos Términos se regirán e interpretarán de acuerdo con las
                  leyes del país donde Templiance tiene su sede principal, sin
                  tener en cuenta sus disposiciones sobre conflictos de leyes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">9. Contacto</h2>
                <p>
                  Si tiene alguna pregunta sobre estos Términos, por favor
                  contáctenos en{" "}
                  <Link
                    href="mailto:legal@templiance.com"
                    className="text-primary hover:underline"
                  >
                    legal@templiance.com
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
