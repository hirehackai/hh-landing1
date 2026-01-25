import "@/styles/globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "@/utils";
import { base, heading } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { subheading } from "@/constants/fonts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="vtag-ai-js"
          strategy="afterInteractive"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="iGfemmUxAObuXE2K"
          data-version="062024"
        />
      </head>

      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
          base.variable,
          heading.variable,
          subheading.variable
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
