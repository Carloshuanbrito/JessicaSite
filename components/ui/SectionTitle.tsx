import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  color?: 'dark' | 'light';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left', 
  color = 'dark' 
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = color === 'dark' ? 'text-graphite' : 'text-white';
  const subtitleColor = color === 'dark' ? 'text-gray-600' : 'text-gray-300';
  const decorativeLine = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-marsala mb-6 ${decorativeLine}`}></div>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;