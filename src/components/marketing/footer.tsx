import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="grid gap-12 xl:grid-cols-3 xl:gap-12 w-full">
                {/* Brand Section */}
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[240px]">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-auto h-5" />
                            <span className="text-base md:text-lg font-medium text-foreground">
                                HireHack
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start leading-relaxed">
                            Hack your way into automating 100s of job applications with AI.
                            Apply smarter, track better, and land interviews faster.
                        </p>
                    </div>
                </Container>

                {/* Navigation Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 xl:col-span-2">
                    {/* Product */}
                    <Container delay={0.1} className="h-auto">
                        <h3 className="text-base font-medium text-foreground mb-5">
                            Product
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-3">
                            <li>
                                <Link href="https://chromewebstore.google.com/detail/hirehack-ai/pgjgjjkabhhjkaiaeofjfdelplcablbj" target="/" className="hover:text-foreground transition-all duration-300">
                                    Download Extension
                                </Link>
                            </li>
                            <li>
                                <Link href="#features" className="hover:text-foreground transition-all duration-300">
                                    How to use
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="hover:text-foreground transition-all duration-300">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="hover:text-foreground transition-all duration-300">
                                    FAQ
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="#testimonials" className="hover:text-foreground transition-all duration-300">
                                    Success Stories
                                </Link>
                            </li> */}
                        </ul>
                    </Container>

                    {/* Resources */}
                    <Container delay={0.2} className="h-auto">
                        <h3 className="text-base font-medium text-foreground mb-5">
                            Resources
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-3">
                            <li>
                                <Link href="/blog" className="hover:text-foreground transition-all duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund" className="hover:text-foreground transition-all duration-300">
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </Container>

                    {/* Company */}
                    <Container delay={0.3} className="h-auto">
                        <h3 className="text-base font-medium text-foreground mb-5">
                            Company
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-3">
                            <li>
                                <Link href="/aboutus" className="hover:text-foreground transition-all duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-foreground transition-all duration-300">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </Container>
                </div>
            </div>

            {/* Footer bottom */}
            <Container delay={0.4} className="w-full relative mt-16">
                <div className="flex items-center justify-center text-center w-full">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} HireHack. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
