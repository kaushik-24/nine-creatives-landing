import type { Service, Testimonial, PortfolioItem, NavLink } from "./types";

export const siteConfig = {
  name: "Nine Creatives",
  tagline: "Your website should be working harder for your business.",
  description:
    "Nine Creatives builds fast, professional websites for service businesses. Clear design. Fast load times. Sites that turn visitors into enquiries.",
  email: "hello@ninecreatives.com",
  stats: {
    projects: "20+",
    projectsLabel: "Sites Delivered",
    score: "90+",
    scoreLabel: "Average PageSpeed Score",
    response: "24 hrs",
    responseLabel: "Reply Within",
    growth: "64%",
    growthLabel: "Avg Enquiry Growth",
    experience: "2+",
    experienceLabel: "Years Experience",
    satisfaction: "98%",
    satisfactionLabel: "Client Satisfaction",
  },
  social: {
    twitter: "#",
    linkedin: "#",
    github: "#",
  },
};

export const homeServices = [
  {
    title: "Web Design",
    description: "Clean, conversion-focused interfaces built for modern audiences.",
  },
  {
    title: "Development",
    description: "Custom-built websites on modern frameworks with clean code.",
    highlighted: true,
  },
  {
    title: "Optimization",
    description: "Speed, SEO, and performance tuning that drives results.",
  },
];

export const featureContent = {
  headline: "We Build Sites That Work",
  description:
    "Every project starts with a clear brief and ends with a measurable outcome. No templates, no bloat — just focused work that moves your business forward.",
};

export const processCards = [
  {
    title: "Discovery",
    description:
      "We learn your business, your audience, and your goals. This phase sets the foundation for every decision that follows.",
  },
  {
    title: "Strategy",
    description:
      "A clear plan with defined scope, timeline, and deliverables. You know exactly what you're getting before we start building.",
  },
  {
    title: "Execution",
    description:
      "Design and development in focused stages with regular check-ins. No surprises, no disappearing acts.",
  },
];

export const ctaContent = {
  headline: "Start Your Project",
  description:
    "Ready to build something great? Get in touch and we'll map out a plan tailored to your business goals.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const problems = [
  {
    title: "Built years ago and never touched since",
    description:
      "Your website was launched and then forgotten. Meanwhile your competitors updated theirs. Now you are playing catch-up.",
  },
  {
    title: "Slow loading on mobile",
    description:
      "Most of your customers are searching from their phones. If your site takes more than a few seconds, they leave before reading anything.",
  },
  {
    title: "Copy talks about you, not the customer",
    description:
      "Your homepage says 'we are a family-owned business with 20 years of experience.' The visitor wants to know: can you solve my problem?",
  },
  {
    title: "The contact form sits quietly doing nothing",
    description:
      "A form at the bottom of the page with no reason to fill it out. No lead magnet. No urgency. No result.",
  },
  {
    title: "Underperforming is costing you every month",
    description:
      "A website that does not perform costs you more every month than the original build ever did. Lost calls. Lost bookings. Lost trust.",
  },
];

export const services: Service[] = [
  {
    title: "Website Design & Development",
    description:
      "Most service business websites look fine in a mockup and underperform in the real world. We design and build sites that are clean, fast, and structured around what your visitors need to see before they contact you.",
    icon: "Code2",
    features: [
      "Custom design built for mobile",
      "Clear page structure that guides visitors to take action",
      "On-page SEO foundation so Google can find you",
      "Lead capture setup — forms, calls-to-action, booking links",
      "A site you can manage yourself without needing to call us every time",
    ],
  },
  {
    title: "Speed & Performance Optimization",
    description:
      "If your site takes more than 3 seconds to load, roughly half your visitors leave before reading a single word. Most service business sites score below 60 on PageSpeed. We routinely get them above 90.",
    icon: "Zap",
    features: [
      "Full PageSpeed and Core Web Vitals audit",
      "Image and code optimization",
      "Caching setup and configuration",
      "Render-blocking resource fixes",
      "A documented score report showing where you started and where you finished",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Good UX is not about making things beautiful. It is about making the right action obvious. We look at how visitors move through your site and remove every point of friction between landing and getting in touch.",
    icon: "Palette",
    features: [
      "User flow mapping — understand how visitors navigate",
      "Wireframes — structure before visuals",
      "Visual design — clean, professional, conversion-focused",
      "Component-level design that translates directly to build",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free Site Review",
    subtitle: "30 minutes",
    description:
      "We take an honest look at your current site and tell you what is working and what is quietly costing you visitors. You do not need to commit to anything. This step is just about getting a clear picture.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
  {
    step: "02",
    title: "Proposal",
    subtitle: "",
    description:
      "We send a fixed-price proposal with a defined scope and timeline. You know exactly what you are getting before anything starts. No hourly billing. No scope creep surprises.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    step: "03",
    title: "Design and Build",
    subtitle: "",
    description:
      "We build in focused stages and share progress along the way. You review at key points. We do not disappear for six weeks and send a finished file.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    step: "04",
    title: "Launch and Handover",
    subtitle: "",
    description:
      "We handle the launch, test across devices and browsers, and walk you through managing the site yourself. You leave with a working website and the knowledge to run it.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our site went from 43 to 91 on PageSpeed. We are getting more calls through the site than we were before.",
    author: "Sarah Mitchell",
    role: "Owner",
    company: "Mitchell Auto Detailing",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    quote:
      "Clear from start to finish. Delivered exactly what was in the proposal and the final site was better than we expected.",
    author: "James Carter",
    role: "Director",
    company: "Carter Trade Services",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    quote:
      "They didn't just build a website — they built a growth engine for our business.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Elena Studio",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "JR Plumbing",
    category: "Plumbing & Property Services — London",
    description:
      "From urgent emergencies to everyday repairs and installations, JR Plumbing provides fast, reliable solutions across London with clear pricing and quality workmanship.",
    image: "/images/jr-plumbing-home-page-image.webp",
    tags: [
      "500+ Projects Delivered",
      "10+ Years Experience",
      "5 Star Customer Rating",
      "24/7 Emergency Support",
    ],
    problem:
      "Service-based brand with strong reputation but an underperforming website that didn't reflect their 24/7 availability or coverage across all London boroughs. Emergency booking flow was buried and mobile experience was slow.",
    result: {
      metric1: "500+",
      metric1Label: "Projects Delivered",
      metric2: "10+",
      metric2Label: "Years Experience",
    },
  },
  {
    title: "RevUp Driving School",
    category: "Driving Lessons — New South Wales",
    description:
      "Prepare for your driving test with focused lessons, real test route practice, and clear guidance on what examiners expect. Whether it is your first test or a retake, we help you improve and feel confident on test day.",
    image: "/images/revup-driving-homepage-image.webp",
    tags: [
      "Beginner Friendly Lessons",
      "Driving Test Preparation",
      "Pickup & Drop Off Available",
    ],
    problem:
      "Strong local reputation but the website didn't convey the structured lesson approach or highlight test-route expertise — key trust signals for learners choosing a school.",
    result: {
      metric1: "Pass-Focused",
      metric1Label: "Test Preparation",
      metric2: "1-on-1",
      metric2Label: "Focused Lessons",
    },
  },
  {
    title: "Stannis",
    category: "Property Maintenance — London",
    description:
      "We provide complete property maintenance services for homes, rental properties, offices and commercial buildings, from urgent repairs to ongoing property upkeep.",
    image: "/images/stannis-homepage-image.webp",
    tags: [
      "4.9 Stars",
      "100+ Google Reviews",
      "15+ Years Experience",
      "3,000 Jobs Serviced",
    ],
    problem:
      "Established business with years of experience but the website wasn't capturing leads effectively — contact info was buried and service scope wasn't clearly communicated.",
    result: {
      metric1: "15+",
      metric1Label: "Years Experience",
      metric2: "4.9",
      metric2Label: "Star Rating",
    },
  },
  {
    title: "Handover Commercial Cleaning",
    category: "Commercial & Residential Cleaning — Perth",
    description:
      "Whether you need a one-off clean or regular scheduled cleaning, HANDOVER COMMERCIAL CLEANING PTY LTD provides reliable cleaning services for homes, offices, retail spaces, and commercial properties across Perth and the surrounding areas.",
    image: "/images/hcc-homepage-image.webp",
    tags: [
      "Commercial Cleaning",
      "Residential Cleaning",
      "Perth & Surrounding Areas",
    ],
    problem:
      "Growing cleaning business with a basic online presence that didn't differentiate their commercial vs residential offerings or capture trust through the website.",
    result: {
      metric1: "Perth-Wide",
      metric1Label: "Service Area",
      metric2: "Reliable",
      metric2Label: "Professional Service",
    },
  },
];

export const pricingPlans = [
  {
    title: "Website Design & Development",
    description:
      "Custom website built for mobile, optimized for speed, and structured to generate leads. Fixed scope, fixed price, defined timeline.",
    price: "From $1,500 USD",
  },
  {
    title: "Speed & Performance Optimization",
    description:
      "Full audit and optimization pass to improve PageSpeed scores, Core Web Vitals, and overall load performance. Includes documented before/after report.",
    price: "From $300 USD",
  },
  {
    title: "Web Development",
    description:
      "Custom feature development, plugin integration, theme customization, or existing site extensions. Priced per project based on scope.",
    price: "From $500 USD",
  },
];

export const faqs = [
  {
    question: "Do you work with businesses outside Australia and the UK?",
    answer:
      "Yes, we work with clients globally. Our current clients are based in Australia, the UK, and Nepal.",
  },
  {
    question: "Do you only work with WordPress?",
    answer:
      "We specialise in WordPress but also build with modern frameworks like Next.js for projects that need greater performance and flexibility.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Most projects take 3–5 weeks from kickoff to launch, depending on scope and complexity.",
  },
  {
    question: "What happens after the site goes live?",
    answer:
      "We walk you through managing the site yourself. Ongoing support and maintenance packages are available if you need them.",
  },
  {
    question: "Can you work with my existing site, or does it need to be rebuilt?",
    answer:
      "It depends on the current state of your site. We start with a free review and give you an honest recommendation — sometimes a refresh is enough.",
  },
  {
    question: "What does the free site review actually include?",
    answer:
      "A PageSpeed and Core Web Vitals check, mobile usability review, homepage copy and structure assessment, and your top 3 priorities ranked by impact. No obligation.",
  },
];

export const servicesPageContent = {
  hero: {
    title: "What We Do",
    subtitle: "Three things we do well for service businesses. Everything else we refer out.",
  },
};

export const aboutPageContent = {
  hero: {
    title: "About Nine Creatives",
    subtitle:
      "A small studio that does focused work. Nine worlds. One studio.",
  },
  mission: {
    title: "Our Mission",
    body: "Nine Creatives is a web design & development studio helping service businesses get more from their websites. Inspired by the nine worlds of Norse mythology, we believe every project should be distinct and worth building. That is why we work with a small number of clients at a time, giving each project the attention good work deserves.",
  },
  values: [
    {
      title: "Results First",
      description:
        "Every decision we make is measured against one question: does this drive results for our clients?",
    },
    {
      title: "Craft Over Cut Corners",
      description:
        "We don't use templates. Every site we build is custom-crafted for the client's unique needs.",
    },
    {
      title: "Transparent Partnership",
      description:
        "No hidden fees, no jargon, no surprises. We communicate clearly and deliver on time.",
    },
  ],
  team: [
    {
      name: "Kaushik Gurung",
      role: "Founder and Lead Developer",
      description:
        "Baron has designed and built websites for service businesses across Australia, the UK, and Nepal. He specializes in performance optimization and building sites that are as fast as they look.",
    },
  ],
};

export const contactPageContent = {
  hero: {
    title: "Ready For A Website That Actually Brings You Clients?",
    subtitle:
      "Let's review your current website and identify exactly what's stopping visitors from converting. We reply within 24 hours — no pitch, no pressure.",
  },
  benefits: [
    "Free 30-minute consultation, no obligation",
    "Fixed price quote before work starts",
    "3–5 week turnaround for most projects",
    "NDAs signed on request",
  ],
};
