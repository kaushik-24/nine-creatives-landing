import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-surface-300">{label}</label>
        <input
          ref={ref}
          className={`w-full rounded-lg border bg-surface-900 px-4 py-2.5 text-sm text-white placeholder-surface-500 transition-colors focus:border-electric-400 focus:outline-none focus:ring-1 focus:ring-electric-400/50 ${
            error ? "border-red-500" : "border-surface-700"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-surface-300">{label}</label>
        <textarea
          ref={ref}
          className={`w-full rounded-lg border bg-surface-900 px-4 py-2.5 text-sm text-white placeholder-surface-500 transition-colors focus:border-electric-400 focus:outline-none focus:ring-1 focus:ring-electric-400/50 resize-y min-h-[120px] ${
            error ? "border-red-500" : "border-surface-700"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);
TextArea.displayName = "TextArea";
