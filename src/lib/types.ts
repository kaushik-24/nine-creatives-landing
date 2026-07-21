export interface ContactFormInput {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface FormResult {
  success: boolean;
  message: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  problem?: string;
  result?: {
    metric1: string;
    metric1Label: string;
    metric2: string;
    metric2Label: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Problem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export interface Value {
  title: string;
  description: string;
}
