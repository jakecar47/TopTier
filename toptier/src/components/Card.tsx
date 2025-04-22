interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  // a Card wrapper component
  const Card = ({ children, className = "" }: CardProps) => {
    return (
      <div className={`border border-[#D4AF37] shadow-sm rounded-lg p-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;