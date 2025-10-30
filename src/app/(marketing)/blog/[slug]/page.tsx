"use client";

import { motion } from "framer-motion";

// Example content (later replace with CMS/Markdown/MDX)
const blogPosts: Record<
  string,
  { title: string; date: string; content: string }
> = {
  "ai-changing-job-applications": {
    title: "How AI is Changing Job Applications",
    date: "January 15, 2025",
    content: `
      At HireHack, we believe AI is revolutionizing the way job seekers
      interact with employers. Instead of wasting hours filling repetitive
      forms, our automation system lets you apply to 50+ jobs in the time it
      usually takes to apply to one...
    `,
  },
  "top-5-resume-hacks-2025": {
    title: "Top 5 Resume Hacks for 2025",
    date: "January 8, 2025",
    content: `
      The job market is competitive, but with the right resume strategy you
      can stand out. In this article we break down 5 hacks to level up your
      resume instantly...
    `,
  },
  "automation-vs-traditional-job-search": {
    title: "Automation vs. Traditional Job Search",
    date: "December 20, 2024",
    content: `
      Should you rely on automation or stick to manual job applications? We
      explore the pros and cons of both approaches, and why a hybrid strategy
      might be best for most job seekers...
    `,
  },
};

// ✅ Notice: no manual typing for { params } → let Next.js handle it
export default function BlogPostPage({ params }: any) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="w-full max-w-3xl mx-auto p-6 pt-32">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-4 text-muted-foreground">
          Sorry, the blog post you are looking for doesn’t exist.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto p-6 pt-32"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
        {post.title}
      </h1>
      <p className="text-sm text-muted-foreground mb-6">{post.date}</p>
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.content}</p>
      </div>
    </motion.div>
  );
}
