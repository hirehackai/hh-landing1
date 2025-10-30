export type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    annuallyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
  };
  
  export const PLANS: PLAN[] = [
    {
      id: "free",
      title: "Free",
      desc: "Perfect for job seekers starting out",
      monthlyPrice: 0,
      annuallyPrice: 0,
      buttonText: "Get Started",
      features: [
        "Auto apply to jobs (limited per day)",
        "Save multiple resumes",
        "Basic job alerts",
        "Track application status",
        "AI resume feedback",
        "Multiple Resumes",
        "Interview prep assistant",
      ],
      link: "#",
    },
    {
      id: "pro",
      title: "Pro",
      desc: "For students and professionals who want an edge",
      monthlyPrice: 19,
      annuallyPrice: 190,
      badge: "Most Popular",
      buttonText: "Get Started",
      features: [
        "Unlimited auto applications",
        "Advanced job alerts",
        "Resume analytics & AI feedback",
        "Application tracking dashboard",
        "Multiple Resumes",
        "Advanced Filters",
        "Priority support",
      ],
      link: "#",
    },
    {
      id: "business",
      title: "Business",
      desc: "For recruiters and staffing agencies",
      monthlyPrice: 99,
      annuallyPrice: 990,
      buttonText: "Get Started",
      features: [
        "Post unlimited job listings",
        "Unlimited resume searches",
        "Branded job postings",
        "Candidate tracking dashboard",
        "Advanced Filters",
        "Export candidate data",
        "Dedicated recruiter manager",
      ],
      link: "#",
    },
  ];
  