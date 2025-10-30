import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import LanguageSupport from "@/components/marketing/lang-support";
import Pricing from "@/components/marketing/pricing";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            {/* Hero Section */}
            <section id="hero">
                <Hero />
            </section>

            {/* Features Section */}
            <section id="features">
                <Features />
            </section>

            {/* Analysis Section */}
            <section id="analysis">
                <Analysis />
            </section>

            {/* Integration Section */}
            <section id="integration">
                <Integration />
            </section>

            {/* Pricing Section */}
            <section id="pricing">
                <Pricing />
            </section>


            {/* Language Support Section */}
            <section id="faq">
                <LanguageSupport />
            </section>

            {/* Call To Action Section */}
            <section id="cta">
                <CTA />
            </section>
        </Wrapper>
    );
};

export default HomePage;
