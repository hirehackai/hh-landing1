"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "../global/container";

const FAQS = [
  {
    question: "How does HireHack work?",
    answer:
      "HireHack automates your job applications using AI. Once you set your preferences and install the browser extension, it applies to jobs on LinkedIn, Indeed, and more — saving you hours every day.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up for a free HireHack account, set your job preferences, and download the HireHack browser extension. Once installed, click ‘Start Applying’ to begin automation.",
  },
  {
    question: "Is HireHack free to use?",
    answer:
      "Yes! HireHack offers a free plan with limited daily applications. You can upgrade anytime for unlimited auto applications and advanced analytics.",
  },
  {
    question: "Can HireHack customize my resume for different jobs?",
    answer:
      "Yes. HireHack’s AI Resume Optimizer tailors your resume and keywords for each job, improving your chances of being shortlisted.",
  },
  {
    question: "Is my data secure with HireHack?",
    answer:
      "Absolutely. We use end-to-end encryption and secure cloud storage. Your credentials and job data are never shared with third parties.",
  },
  {
    question: "Does HireHack support international applications?",
    answer:
      "Yes. HireHack works globally on major job platforms like LinkedIn, Indeed, and Glassdoor, supporting applications across multiple regions.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, PayPal, and regional payment methods depending on your location.",
  },
  {
    question: "Which platforms does HireHack support?",
    answer:
      "HireHack currently supports LinkedIn, Indeed, Handshake, and Glassdoor. More platforms are being added soon.",
  },
  {
    question: "Can I track my job applications?",
    answer:
      "Yes. The Smart Tracking Dashboard lets you view all your applied jobs, statuses, and interview updates in one place.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto">
      <Container>
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Still have questions?
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
            Find answers to common questions about HireHack.
          </p>
        </div>
      </Container>

      <div className="w-full max-w-3xl mx-auto space-y-4 relative">
        <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full -rotate-12 blur-[10rem] -z-10"></div>

        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="border border-border/50 rounded-xl p-4 bg-background/40 transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-base md:text-lg font-medium text-foreground">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-orange-500" />
              ) : (
                <Plus className="w-5 h-5 text-orange-500" />
              )}
            </button>

            {openIndex === index && (
              <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
