import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `HireHack AI | Automate Job Applications & Optimize Your Job Search`,
    description = `HireHack AI automates job applications, optimizes resumes, tracks applications, and accelerates your job search using AI-driven workflows. Apply faster, smarter, and effortlessly with HireHack.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    noIndex = false,
    keywords = [
        // 🔹 HireHack-specific SEO
        "HireHack",
        "HireHack AI",
        "AI job application tool",
        "AI job automation",
        "automated job applying",
        "LinkedIn auto apply",
        "Indeed auto apply",
        "AI resume optimizer",
        "AI cover letter generator",
        "job tracker tool",

        // 🔹 Extra value keywords
        "job search automation",
        "AI job search",
        "ATS resume optimization",
        "job application autofill",
        "career productivity tools",
        "job hunting tools",
        "AI tools for job seekers",
        "job search chrome extension",
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    twitterHandle = "@HireHackAI",
    type = "website",
    locale = "en_US",
    alternates = {},
    publishedTime,
    modifiedTime,
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(
        process.env.NEXT_PUBLIC_APP_URL || "https://hirehack.ai"
    );

    return {
        metadataBase,

        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title,
        },

        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME,

        robots: noIndex
            ? { index: false, follow: false, nocache: true }
            : { index: true, follow: true },

        alternates: {
            canonical: metadataBase.href,
            languages: alternates,
        },

        openGraph: {
            title,
            description,
            url: metadataBase.href,
            siteName: process.env.NEXT_PUBLIC_APP_NAME,
            locale,
            type,
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "HireHack AI OpenGraph Image",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            creator: twitterHandle,
            images: ["/og-image.png"],
        },

        category: "technology",

        other: {
            "revisit-after": "7 days",
            "x-content-type-options": "nosniff",
            "x-frame-options": "DENY",
        },

        icons,

        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },

        ...(publishedTime && { publishedTime }),
        ...(modifiedTime && { modifiedTime }),
    };
};
