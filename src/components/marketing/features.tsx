import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">
            Three simple steps to land your dream job
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            Get started with <span className="text-orange-500 font-semibold">HireHack</span> — 
            sign up, add the extension, and let AI apply to jobs while you relax.
          </p>
        </div>
      </Container>

      {/* Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 relative overflow-visible">
        {FEATURES.map((feature, index) => (
          <Container
            key={feature.title}
            delay={0.1 + index * 0.1}
            className={cn(
              "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",
              index === 3 && "lg:col-span-2",
              index === 2 && "md:col-span-2 lg:col-span-1"
            )}
          >
            <MagicCard
              gradientFrom="#FF7E00"
              gradientTo="#FFD580"
              gradientColor="rgba(255,140,0,0.15)"
              className="p-4 lg:p-6 lg:rounded-3xl"
            >
              {/* Step Number */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl font-extrabold text-orange-500">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {feature.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </MagicCard>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default Features;
