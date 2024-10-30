import React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import {
  ImageField,
  RichTextField,
  KeyTextField,
  NumberField,
} from "@prismicio/types";
import { Star } from "lucide-react";

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

// Define the structure of a single testimonial item
type TestimonialItem = {
  image: ImageField;
  name: RichTextField;
  position: KeyTextField;
  company: KeyTextField;
  rating: NumberField;
  testimonial: RichTextField;
};

const TestimonialCard: React.FC<TestimonialItem> = ({
  image,
  name,
  position,
  company,
  rating,
  testimonial,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <PrismicNextImage
        field={image}
        width={60}
        height={60}
        className="rounded-full mr-4"
      />
      <div>
        <PrismicRichText
          field={name}
          components={{
            paragraph: ({ children }) => (
              <h3 className="font-primary text-lg font-semibold text-primary">
                {children}
              </h3>
            ),
          }}
        />
        <p className="text-secondary text-sm">
          {position}, {company}
        </p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < (rating || 0) ? "text-accent" : "text-gray-300"}
          fill={i < (rating || 0) ? "currentColor" : "none"}
        />
      ))}
    </div>
    <PrismicRichText
      field={testimonial}
      components={{
        paragraph: ({ children }) => (
          <p className="text-secondary">{children}</p>
        ),
      }}
    />
  </div>
);

const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      className="bg-background py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="font-primary text-3xl font-bold text-primary text-center mb-12">
                {children}
              </h2>
            ),
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.primary.items.map((item, index) => (
            <TestimonialCard
              key={index}
              image={item.image}
              name={item.name}
              position={item.position}
              company={item.company}
              rating={item.rating}
              testimonial={item.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
