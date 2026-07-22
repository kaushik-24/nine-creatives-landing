interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-xl p-6 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}
