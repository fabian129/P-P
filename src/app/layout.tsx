import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

// Since the template also implies "Space Grotesk" for display but only uses Inter currently, 
// we will stick to Inter for both to match the template precisely, or just body if display was omitted.
// The template only loaded Inter originally.

export const metadata: Metadata = {
  title: "P&P properties",
  description: "Din partner för exklusiva bostadsaffärer i Stockholm och över hela världen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
          {/* Vertical Grid Background Container */}
          <div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-7xl mx-auto border-x border-stone-200/60">
            <div className="w-full h-full grid-lines"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
