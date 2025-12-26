import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
}

const RevealOnScroll: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only animate once
      }
    }, {
      threshold: 0.1, // Trigger slightly earlier
      rootMargin: "0px 0px -50px 0px"
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const transitionStyles = {
    transitionDuration: '1000ms',
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)', // Soft ease-out
    transitionDelay: `${delay}ms`
  };

  return (
    <div
      ref={ref}
      style={transitionStyles}
      className={`will-change-transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8' // Reduced from 12 to 8 for subtler slide
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;