import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="font-primary text-3xl font-bold text-primary mb-4 text-center">
    {children}
  </h2>
);

export default SectionTitle;
