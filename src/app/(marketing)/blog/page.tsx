"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How AI is Changing Job Applications",
    slug: "ai-changing-job-applications",
    date: "January 15, 2025",
    excerpt:
      "Discover how HireHack leverages AI to automate repetitive tasks and help job seekers land interviews faster.",
  },
  {
    title: "Top 5 Resume Hacks for 2025",
    slug: "top-5-resume-hacks-2025",
    date: "January 8, 2025",
    excerpt:
      "Learn the best tips for making your resume stand out in today’s competitive job market.",
  },
  {
    title: "Automation vs. Traditional Job Search",
    slug: "automation-vs-traditional-job-search",
    date: "December 20, 2024",
    excerpt:
      "We compare automated job applications with traditional methods, weighing time savings against personalization.",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 max-w-6xl mx-auto pt-32">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          HireHack Blog
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Insights, guides, and updates from the HireHack team.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-card rounded-2xl shadow-md hover:shadow-xl border border-border p-6 flex flex-col justify-between transition"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2 line-clamp-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
              <p className="text-sm md:text-base mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-auto text-orange-500 font-medium hover:underline"
            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
