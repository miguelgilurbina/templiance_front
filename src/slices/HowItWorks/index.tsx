import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Search, FileText, CheckSquare, Award, LucideIcon } from "lucide-react";

export type HowItWorksProps = SliceComponentProps<Content.HowItWorksSlice>;

const iconMap: { [key: string]: LucideIcon } = {
  search: Search,
  fileText: FileText,
  checkSquare: CheckSquare,
  award: Award,
};

const StepItem: React.FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-accent mb-4">{icon}</div>
    <h2 className="font-primary text-2xl font-bold text-primary text-center mb-12">
      {title}
    </h2>
    <p className="text-secondary">{description}</p>
  </div>
);

const HowItWorks = ({ slice }: HowItWorksProps): JSX.Element => {
  return (
    <section
      className="bg-backup py-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="font-primary text-3xl font-bold text-primary text-center mb-16">
                {children}
              </h2>
            ),
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {slice.primary.step_content.map((item, index) => {
            const IconComponent = iconMap[item.icon as string];
            return (
              <StepItem
                key={index}
                icon={IconComponent && <IconComponent size={48} />}
                title={
                  <PrismicRichText
                    field={item.step_title}
                    components={{
                      paragraph: ({ children }) => <>{children}</>,
                    }}
                  />
                }
                description={
                  <PrismicRichText
                    field={item.step_description}
                    components={{
                      paragraph: ({ children }) => <>{children}</>,
                    }}
                  />
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
