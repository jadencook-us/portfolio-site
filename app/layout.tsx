import type { Metadata } from "next";
import { Epilogue, Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-headline",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaden Cook Portfolio",
  description: "Portfolio website showcasing UI and UX design work.",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  manifest: "/site.webmanifest",
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
      className={`${epilogue.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full dark antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function () {
            try {
              var savedTheme = localStorage.getItem("theme");
              var theme = savedTheme === "dark" || savedTheme === "light"
                ? savedTheme
                : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
              document.documentElement.classList.remove("dark", "light");
              document.documentElement.classList.add(theme);
              document.documentElement.dataset.theme = theme;
            } catch (error) {}
          })();
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
