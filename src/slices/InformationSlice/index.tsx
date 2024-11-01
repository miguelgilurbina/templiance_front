import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export type InformationSliceProps =
  SliceComponentProps<Content.InformationSliceSlice>;

const InformationSlice = ({ slice }: InformationSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container mx-auto py-10"
    >
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            <PrismicRichText field={slice.primary.title} />
          </CardTitle>
          <CardDescription>
            Última actualización: {new Date().toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="space-y-6">
              {slice.primary.section.map((item, index) => (
                <section key={index}>
                  <h2 className="text-2xl font-semibold mb-2">
                    <PrismicRichText field={item.title} />
                  </h2>
                  <PrismicRichText field={item.paragraph} />
                </section>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <PrismicNextLink field={slice.primary.button_link}>
                {slice.primary.button_link.text ||
                  "Volver a la página principal"}
              </PrismicNextLink>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default InformationSlice;
