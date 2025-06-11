import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dula Purkaystha | Software Developer",
  description:
    "Portfolio of Dula Purkaystha — full-stack software developer skilled in React, TypeScript and TailWind CSS.",
  keywords: [
    "Dula Purkaystha",
    "software developer",
    "full stack engineer",
    "React developer",
    "Developer ortfolio",
    "Frontend developer",
    "Backend developer",
  ],
  metadataBase: new URL("https://dula-purkaystha.vercel.app"),
  openGraph: {
    title: "Dula Purkaystha | Developer Portfolio",
    description:
      "Explore Dula’s featured projects and learn more about her journey as a software engineer.",
    url: "https://dula-purkaystha.vercel.app",
    siteName: "Dula Purkaystha",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dula's Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
