import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Smart Job Application <br />
                        <span className="font-subheading italic">Analytics Dashboard</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Track your applications, success rate, and platform performance — all in one place.
                        See how HireHack automates your job search and boosts interview calls.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full items-stretch">

                {/* Job Application Insights Card */}
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
                        <MagicCard
                            gradientFrom="#FF7E00"
                            gradientTo="#FFD580"
                            gradientColor="rgba(255, 140, 0, 0.15)"
                            className="p-4 lg:p-8 w-full h-full flex flex-col justify-between overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-orange-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Application Insights
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Real-time view of how your applications are performing across platforms.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">5,284</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +18% more jobs applied this week
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Platform</div>
                                            <div>Status</div>
                                            <div>Applications</div>
                                            <div>Success</div>
                                        </div>
                                        {[
                                            { name: "LinkedIn", status: "Active", apps: "213", success: "91%" },
                                            { name: "Indeed", status: "Active", apps: "173", success: "89%" },
                                            { name: "Handshake", status: "Active", apps: "182", success: "88%" },
                                            { name: "Glassdoor", status: "Pending", apps: "22", success: "90%" },
                                        ].map((platform) => (
                                            <div
                                                key={platform.name}
                                                className="grid grid-cols-4 text-sm py-2 border-t border-border/50"
                                            >
                                                <div>{platform.name}</div>
                                                <div>{platform.status}</div>
                                                <div>{platform.apps}</div>
                                                <div className="font-semibold">{platform.success}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                {/* Interview Success Metrics Card */}
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full">
                        <MagicCard
                            gradientFrom="#FF7E00"
                            gradientTo="#FFD580"
                            gradientColor="rgba(255, 140, 0, 0.15)"
                            className="p-4 lg:p-8 w-full h-full flex flex-col justify-between overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-orange-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Interview Success Metrics</h3>
                                <p className="text-sm text-muted-foreground">
                                    See how your auto-applied jobs are converting into real interview calls.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">91%</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                Users reporting faster interview calls
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-5 text-sm text-muted-foreground py-2">
                                            <div>Company</div>
                                            <div>Position</div>
                                            <div>Applied Date</div>
                                            <div>Platform</div>
                                            <div>Status</div>
                                        </div>

                                        {[
                                            {
                                                company: "LinkedIn",
                                                position: "Software Engineer",
                                                date: "Oct 20, 2025",
                                                platform: "LinkedIn",
                                                status: "In Review",
                                            },
                                            {
                                                company: "Microsoft",
                                                position: "Full Stack Developer",
                                                date: "Oct 18, 2025",
                                                platform: "Indeed",
                                                status: "Interview Scheduled",
                                            },
                                            {
                                                company: "Stripe",
                                                position: "Backend Engineer",
                                                date: "Oct 16, 2025",
                                                platform: "Glassdoor",
                                                status: "Applied",
                                            },
                                            {
                                                company: "Tesla",
                                                position: "Data Analyst",
                                                date: "Oct 10, 2025",
                                                platform: "LinkedIn",
                                                status: "Offer Received",
                                            },
                                        ].map((job) => (
                                            <div
                                                key={job.company + job.position}
                                                className="grid grid-cols-5 text-sm py-2 border-t border-border/50 items-center"
                                            >
                                                <div>{job.company}</div>
                                                <div>{job.position}</div>
                                                <div>{job.date}</div>
                                                <div>{job.platform}</div>
                                                <div
                                                    className={`
                                                        font-semibold 
                                                        ${
                                                            job.status === "Offer Received"
                                                                ? "text-green-500"
                                                                : job.status === "Interview Scheduled"
                                                                ? "text-blue-500"
                                                                : job.status === "In Review"
                                                                ? "text-yellow-500"
                                                                : "text-muted-foreground"
                                                        }
                                                    `}
                                                >
                                                    {job.status}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Analysis;
