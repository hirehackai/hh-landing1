"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";

const CTA = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container className="py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                    {/* Subtle glowing particles */}
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#fbbf24"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#fbbf24"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    {/* Rotating orange gradient glow */}
                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background:
                                "conic-gradient(from 0deg at 50% 50%, #FF7E00 0deg, #FFB347 120deg, #FFD580 240deg, #FF7E00 360deg)",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug">
                        Ready to land your <br />{" "}
                        <span className="font-subheading italic text-orange-400">
                            dream job
                        </span>{" "}
                        ?
                    </h2>

                    {/* Subtext */}
                    <p className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4">
                        Sign up for free and see how{" "}
                        <span className="text-orange-500 font-medium">
                            HireHack
                        </span>{" "}
                        automates your job applications, tracks progress, and preps you for interviews, all in one place.
                    </p>

                    {/* CTA Button */}
                    <Link href="https://app.hirehack.ai" className="mt-8" target="/">
                        <Button
                            size="lg"
                            className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300"
                        >
                            Start Applying
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default CTA;
