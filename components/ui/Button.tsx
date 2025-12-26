import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-marsala text-white hover:bg-marsala-light focus:ring-marsala shadow-lg shadow-marsala/20 relative overflow-hidden group",
    outline: "border-2 border-marsala text-marsala hover:bg-marsala hover:text-white focus:ring-marsala relative overflow-hidden group",
    gold: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-graphite relative overflow-hidden group"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {/* Shimmer Effect */}
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></span>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export default Button;