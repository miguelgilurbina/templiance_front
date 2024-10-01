import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MainTitle`.
 */
export type MainTitleProps = SliceComponentProps<Content.MainTitleSlice>;

/**
 * Component for "MainTitle" Slices.
 */
const MainTitle = ({ slice }: MainTitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for main_title (variation: {slice.variation}) Slices
    </section>
  );
};

export default MainTitle;
