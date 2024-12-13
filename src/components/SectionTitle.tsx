import { memo } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const MemoSectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 font-serif text-4xl md:text-5xl text-secondary">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-textLight">{subtitle}</p>
      )}
      <div className="w-24 h-1 mx-auto mt-6 bg-primary" />
    </div>
  );
};

const SectionTitle = memo(MemoSectionTitle);
export default SectionTitle;