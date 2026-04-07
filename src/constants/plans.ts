export type PLAN = {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  annuallyPrice: number;
  originalPrice?: number;
  badge?: string;
  buttonText: string;
  features: string[];
  link: string;
};

export const PLANS: PLAN[] = [
  {
    id: "basic",
    title: "Standard",
    desc: "Great for getting started for Students",
    monthlyPrice: 5,
    annuallyPrice: 50,
    originalPrice: 19,
    buttonText: "Get Started",
    features: [
      "200 Job Applications per Month",
      "Enhanced Filters",
      "FAANG Job Alerts",
      "Support over Email",
    ],
    link: "#",
  },
  {
    id: "pro",
    title: "Pro",
    desc: "For serious job seekers who want an edge",
    monthlyPrice: 10,
    annuallyPrice: 100,
    originalPrice: 29,
    badge: "Most Popular",
    buttonText: "Get Started",
    features: [
      "Unlimited Applications",
      "Enhanced Filters",
      "FAANG & Other BigTech Job Alerts",
      "Early Access to New Features",
      "Advanced Filters",
      "Priority Support",
      "Priority Support over WhatsApp",
      "Personalized Resume Review",
    ],
    link: "#",
  },
  {
    id: "ultimate",
    title: "Ultimate",
    desc: "The complete end-to-end job search toolkit",
    originalPrice: 89,
    monthlyPrice: 49,
    annuallyPrice: 490,
    buttonText: "Get Started",
    features: [
      "Unlimited Applications",
      "Personalized Human Assistant",
      "FAANG & Other BigTech Job Alerts",
      "Advanced Search & Enhanced Filters",
      "Personalized Resume & Portfolio Review",
      "24/7 WhatsApp & Global Call Support",
      "Customized End-to-End Job Search Strategy",
    ],
    link: "#",
  },
];