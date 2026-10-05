import type { Service, Testimonial, PortfolioItem, NavLink } from "./types";

export const siteConfig = {
  name: "Nine Creatives",
  tagline: "Turn Digital Strategy Into Qualified Leads.",
  description:
    "Nine Creatives is a digital strategy and growth partner. We engineer high-converting web platforms and acquisition funnels that drive consistent, qualified leads and sustainable business growth.",
  email: "hello@ninecreatives.com",
  stats: {
    projects: "20+",
    projectsLabel: "Growth Systems Deployed",
    score: "90+",
    scoreLabel: "Core Web Vitals & Speed",
    response: "24 hrs",
    responseLabel: "Rapid Strategy Response",
    growth: "+64%",
    growthLabel: "Avg. Enquiry Increase",
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
    title: "Digital Strategy",
    description: "Full-funnel buyer intent mapping and high-converting acquisition funnels.",
  },
  {
    title: "Web Platforms",
    description: "Bespoke, high-velocity websites built to convert visitors into booked calls.",
    highlighted: true,
  },
  {
    title: "Conversion Engine",
    description: "Sub-second speed, behavioral CRO, and frictionless pipeline capture.",
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
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#testimonials" },
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
    title: "Digital Strategy & Conversion Funnels",
    description:
      "We design end-to-end customer acquisition journeys that attract high-intent buyers, articulate your unique value proposition, and funnel qualified leads directly into your sales pipeline.",
    icon: "Palette",
    features: [
      "Buyer persona & search intent mapping",
      "High-converting funnel architecture & wireframing",
      "Compelling value proposition & offer positioning",
      "Automated lead capture & CRM/calendar booking",
      "Multi-touchpoint conversion tracking",
    ],
  },
  {
    title: "High-Performance Web Platforms",
    description:
      "Custom web platforms built on modern frameworks, engineered from the ground up to establish market authority and turn casual visitors into committed, high-value client enquiries.",
    icon: "Code2",
    features: [
      "Bespoke Next.js & TypeScript architecture",
      "Mobile-first user experience designed for immediate action",
      "Technical SEO foundation for search dominance",
      "Conversion-focused page structure & interactive elements",
      "Full ownership with clean, zero-bloat code",
    ],
  },
  {
    title: "Conversion Optimization & Analytics",
    description:
      "Data-driven performance tuning, Core Web Vitals optimization, and continuous conversion rate optimization (CRO) to eliminate drop-off and lower your customer acquisition cost.",
    icon: "Zap",
    features: [
      "In-depth funnel drop-off & UX friction auditing",
      "Sub-second load times & 90+ PageSpeed guarantee",
      "A/B testing on headlines, CTAs, and user journeys",
      "Frictionless lead forms and calendar integrations",
      "Clear ROI and pipeline attribution reporting",
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
    domain: "jrplumbing.co.uk",
    filterKey: "trades",
    description:
      "From urgent emergencies to everyday repairs and installations, JR Plumbing provides fast, reliable solutions across London with clear pricing and quality workmanship.",
    image: "/images/jr-plumbing-showcase.jpg",
    tags: [
      "500+ Projects Delivered",
      "10+ Years Experience",
      "5 Star Customer Rating",
      "24/7 Emergency Support",
    ],
    problem:
      "Service-based brand with strong local reputation but an underperforming legacy site that didn't reflect 24/7 availability or coverage across London boroughs. Emergency booking triggers were buried and slow mobile loading led to lost enquiries.",
    solution:
      "Engineered a mobile-first emergency platform with 1-tap call triggers, borough-targeted landing routes, transparent fixed-quote estimators, and sub-second load times that instantly convert urgent distress searches.",
    result: {
      metric1: "+82%",
      metric1Label: "Emergency Enquiry Lift",
      metric2: "4.9 ★",
      metric2Label: "Customer Rating",
    },
  },
  {
    title: "RevUp Driving School",
    category: "Driving Lessons — New South Wales",
    domain: "revupdriving.com.au",
    filterKey: "automotive",
    description:
      "Prepare for your driving test with focused lessons, real test route practice, and clear guidance on what examiners expect. Whether it is your first test or a retake, we help you improve and feel confident on test day.",
    image: "/images/revup-driving-showcase.jpg",
    tags: [
      "Beginner Friendly Lessons",
      "Driving Test Preparation",
      "Pickup & Drop Off Available",
      "RMS Test Routes",
    ],
    problem:
      "Strong local instructor reputation but the website failed to highlight test-route expertise, pass rates, or lesson structures — leading prospective learners and parents to abandon during initial comparison.",
    solution:
      "Built a high-converting student acquisition funnel with interactive RMS test route breakdowns, examiner criteria guides, and an instant 2-step lesson booking scheduler with pickup address validation.",
    result: {
      metric1: "3.4x",
      metric1Label: "Student Booking Rate",
      metric2: "94%",
      metric2Label: "First-Time Pass Rate",
    },
  },
  {
    title: "Stannis",
    category: "Property Maintenance — London",
    domain: "stannismaintenance.co.uk",
    filterKey: "commercial",
    description:
      "We provide complete property maintenance services for homes, rental properties, offices and commercial buildings, from urgent repairs to ongoing property upkeep.",
    image: "/images/stannis-showcase.jpg",
    tags: [
      "4.9 Stars Rating",
      "100+ Verified Reviews",
      "15+ Years Experience",
      "3,000+ Jobs Serviced",
    ],
    problem:
      "Established multi-trade business with 3,000+ jobs completed, yet the website presented a fractured scope that hid high-margin commercial contracts and lacked an intuitive quote-request pipeline.",
    solution:
      "Architected a commercial property maintenance portal with segmented B2B vs residential pathways, rapid multi-trade scope forms, and automated quotation dispatch into their operational CRM.",
    result: {
      metric1: "+68%",
      metric1Label: "Commercial Enquiries",
      metric2: "3,000+",
      metric2Label: "Properties Maintained",
    },
  },
  {
    title: "Handover Commercial Cleaning",
    category: "Commercial & Residential Cleaning — Perth",
    domain: "handovercleaning.com.au",
    filterKey: "cleaning",
    description:
      "Whether you need a one-off clean or regular scheduled cleaning, HANDOVER COMMERCIAL CLEANING PTY LTD provides reliable cleaning services for homes, offices, retail spaces, and commercial properties across Perth and the surrounding areas.",
    image: "/images/hcc-showcase.jpg",
    tags: [
      "Commercial Cleaning",
      "Office & Retail Facilities",
      "Perth Metro Coverage",
      "ISO Certified Standards",
    ],
    problem:
      "Rapidly scaling commercial cleaning company stuck with an unoptimized template that failed to establish corporate credibility or differentiate lucrative contract cleaning from residential tasks.",
    solution:
      "Deployed an enterprise cleaning portal featuring square-footage scope calculators, industry compliance credential badges, and direct commercial RFP submission flows with guaranteed 2-hour response guarantees.",
    result: {
      metric1: "+115%",
      metric1Label: "Contract Lead Surge",
      metric2: "100%",
      metric2Label: "On-Time Dispatch",
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
    title: "Capabilities & Growth Engine",
    subtitle: "Three integrated capabilities engineered to turn your digital channels into a consistent pipeline of qualified client leads.",
  },
};

export const aboutPageContent = {
  hero: {
    title: "About Nine Creatives",
    subtitle:
      "A dedicated digital strategy studio engineering unfair competitive advantages for ambitious service businesses.",
  },
  mission: {
    title: "Our Strategic Focus",
    body: "Nine Creatives exists to solve a fundamental problem: most websites look fine but fail to generate revenue. We partner with ambitious service businesses to engineer high-converting digital platforms, friction-free customer journeys, and predictable lead generation systems. Every design decision and line of code is calibrated toward one metric: driving qualified client enquiries.",
  },
  values: [
    {
      title: "Results First",
      description:
        "Every decision we make is measured against one question: does this drive qualified enquiries and revenue for our clients?",
    },
    {
      title: "Craft Over Cut Corners",
      description:
        "We don't use templates. Every digital platform is custom-engineered to position our clients as the clear market authority.",
    },
    {
      title: "Transparent Partnership",
      description:
        "No hidden fees, no jargon, no surprises. Dedicated strategist, clear sprint roadmaps, and measurable ROI.",
    },
  ],
  team: [
    {
      name: "XYZ",
      role: "Founder & Growth Strategist",
      description:
        "Partners with growing service businesses across Australia, the UK, and globally to design high-impact digital strategies and conversion engines that predictably generate qualified client leads.",
    },
  ],
};

export const contactPageContent = {
  hero: {
    title: "Ready To Turn Digital Strategy Into Qualified Leads?",
    subtitle:
      "Book a 30-minute strategy call to evaluate your current customer acquisition flow and identify immediate opportunities to increase your qualified client enquiries.",
  },
  benefits: [
    "Free 30-minute growth strategy consultation",
    "Conversion bottleneck audit of your existing channels",
    "Actionable roadmap tailored to your target deal size",
    "No pressure, no aggressive sales pitch",
  ],
};
