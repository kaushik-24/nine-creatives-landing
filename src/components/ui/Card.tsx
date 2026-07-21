interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-surface-800 bg-surface-900/50 p-6 backdrop-blur-sm ${
        hover ? "transition-all duration-300 hover:border-surface-700 hover:bg-surface-900" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
