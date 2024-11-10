import "./globals.css";
import Script from 'next/script';
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { MiniMenu } from "@/components/mini-menu";

export const metadata: Metadata = {
  title: "KitList",
  description: "A curated list of tools for Productivity, Design and Development",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(

        "whitespace-pre-line antialiased bg-background text-foreground",
      )}
    >

      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex justify-between">
            {children}

            <a
              href="https://tally.so/r/wQBg81"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="size-[48px] bg-[#ddddd9] hover:bg-[#b6b6b3] text-black border border-black rounded-full font-medium md:hidden fixed bottom-4 left-6 z-10 backdrop-blur-lg dark:bg-[#2c2c1f] dark:text-white dark:border-gray-600"
                variant="outline"
                size="icon"
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </a>
            <MiniMenu />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
        {/* Simple Analytics Script */}
        <Script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></Script>
    </html>
  );
}
