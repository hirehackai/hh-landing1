"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib";
import { PLAN, PLANS } from "@/constants/plans";
import Container from "../global/container";
import { Button } from "../ui/button";

type BillingPlan = "monthly" | "annually";

const Pricing = () => {
  const [billPlan, setBillPlan] = useState<BillingPlan>("monthly");

  const handleSwitch = () =>
    setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));

  return (
    <div className="relative flex flex-col items-center justify-center max-w-5xl pb-20 mx-auto">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Choose your perfect plan
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4">
            Select a plan that best fits your needs. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
      </Container>

      {/* Toggle */}
      <Container delay={0.2}>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <span className="text-base font-medium">Monthly</span>
          <button onClick={handleSwitch} className="relative rounded-full focus:outline-none">
            <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-orange-500"></div>
            <div
              className={cn(
                "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                billPlan === "annually" ? "translate-x-6" : "translate-x-0"
              )}
            />
          </button>
          <span className="text-base font-medium">Yearly</span>
        </div>
      </Container>

      {/* Plans */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 gap-6 max-w-5xl mx-auto">
        {PLANS.map((plan, idx) => (
          <Container key={idx} delay={0.1 * idx + 0.2}>
            <PlanCard key={plan.id} plan={plan} billPlan={billPlan} />
          </Container>
        ))}
      </div>
    </div>
  );
};

const PlanCard = ({ plan, billPlan }: { plan: PLAN; billPlan: BillingPlan }) => {
  return (
    <div
      className={cn(
        "flex flex-col relative rounded-2xl transition-all bg-background/40 items-start w-full border border-foreground/10 overflow-hidden",
        plan.badge && "border-orange-500"
      )}
    >
      {plan.badge && (
        <span className="absolute top-4 right-4 text-xs font-medium bg-orange-500 text-white px-3 py-1 rounded-full">
          {plan.badge}
        </span>
      )}

      <div className="p-6 flex flex-col items-start w-full relative">
        <h2 className="font-medium text-xl text-foreground">{plan.title}</h2>
        <p className="text-sm text-muted-foreground mt-2">{plan.desc}</p>

        <h3 className="mt-5 text-3xl font-medium md:text-5xl text-orange-500">
          <NumberFlow
            value={billPlan === "monthly" ? plan.monthlyPrice : plan.annuallyPrice}
            prefix="$"
            suffix={billPlan === "monthly" ? "/month" : "/year"}
            format={{
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }}
          />
        </h3>
      </div>

      <div className="flex flex-col items-start w-full px-6">
        <Button
          size="lg"
          className={cn(
            "w-full mt-2",
            plan.badge ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-white hover:bg-gray-50"
          )}
        >
          {plan.buttonText}
        </Button>
        <div className="h-8 overflow-hidden w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.span
              key={billPlan}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-sm text-center text-muted-foreground mt-3 mx-auto block"
            >
              {billPlan === "monthly" ? "Billed monthly" : "Billed yearly (save 15%)"}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-start w-full px-6 py-5 mb-2 gap-y-2">
        <span className="text-base font-medium mb-2">Includes:</span>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckIcon className="size-4 text-orange-500" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
