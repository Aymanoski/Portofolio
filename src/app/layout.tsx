import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Ayman — Full-Stack & Mobile Engineer",
  description:
    "Founding engineer and full-stack developer specializing in React, Next.js, .NET, and React Native. Building real-time systems and scalable architectures.",
  keywords: [
    "Mohamed Ayman",
    "Full Stack Developer",
    "React",
    "Next.js",
    "ASP.NET",
    "React Native",
    "Software Engineer",
    "Cairo",
    "GUC",
  ],
  authors: [{ name: "Mohamed Ayman" }],
  openGraph: {
    title: "Mohamed Ayman — Full-Stack & Mobile Engineer",
    description:
      "Founding engineer building real-time, cross-platform products from zero to production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
