import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Button } from "../../components/ui/button";

import type { JSX } from "react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      className="relative w-full h-[400px] overflow-hidden bg-backup py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="font-primary text-5xl font-bold text-primary mb-4">
                    {children}
                  </h1>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-secondary text-xl mb-8">{children}</p>
                ),
              }}
            />
            <PrismicNextLink field={slice.primary.button_link}>
              <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-3">
                {slice.primary.button_text}
              </Button>
            </PrismicNextLink>
          </div>
          <div className="hidden md:block">
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-auto"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
