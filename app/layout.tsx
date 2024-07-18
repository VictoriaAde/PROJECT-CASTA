import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Righteous as Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Display({
  weight: "400",
  variable: "--font-display",
  preload: false,
});

export const metadata: Metadata = {
  title: "CASTA",
  description: "Decentralized match making dapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body
        className={cn(
          "min-h-screen w-full flex flex-col items-center justify-center bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
