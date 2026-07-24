import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "pill" | "pill-outline" | "pill-ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-lime text-lime-onaccent hover:bg-lime/90 active:bg-lime/80 glow-lime",
  secondary:
    "border border-electric-400 text-electric-400 hover:bg-electric-400/10",
  ghost: "text-surface-300 hover:text-white hover:bg-white/5",
  pill: "rounded-full bg-lime text-lime-onaccent hover:scale-[1.03] glow-lime",
  "pill-outline":
    "rounded-full border border-electric-400 text-electric-400 hover:bg-electric-400/10",
  "pill-ghost":
    "rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/15",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
