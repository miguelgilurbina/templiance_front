import React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";

export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

const CtaSection = ({ slice }: CtaSectionProps): JSX.Element => {
  return (
    <section
      className="bg-primary py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="font-primary text-3xl font-bold text-white mb-4">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.paragraph}
          components={{
            paragraph: ({ children }) => (
              <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
                {children}
              </p>
            ),
          }}
        />
        <PrismicNextLink field={slice.primary.button_link}>
          <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-3">
            {slice.primary.button_text}
          </Button>
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default CtaSection;
