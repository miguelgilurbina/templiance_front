import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    //   {/* Hero Section */}
    //   <section className="bg-backup py-20">
    // <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    //     <div>
    //       <h1 className="font-primary text-5xl font-bold text-primary mb-4">
    //         Simplifica tus auditorías y certificaciones
    //       </h1>
    //       <p className="text-secondary text-xl mb-8">
    //         Templiance te ofrece templates profesionales para agilizar tus
    //         procesos de cumplimiento normativo.
    //       </p>
    //       <Button className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-3">
    //         Explorar Templates
    //       </Button>
    //     </div>
    //     <div className="hidden md:block">
    //       <Image
    //         src={image1}
    //         alt="Ilustración de auditoría"
    //         width={500}
    //         height={400}
    //         className="w-full h-auto"
    //       />
    //     </div>
    //   </div>
    // </div>
    //   </section>
    // </div>

    <section
      className="bg-backup py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative w-full h-[600px] overflow-hidden"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.body} />
            <PrismicNextLink field={slice.primary.button_link}>
              {slice.primary.button_text}{" "}
            </PrismicNextLink>
          </div>
          <div className="hidden md:block">
            <PrismicNextImage field={slice.primary.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
