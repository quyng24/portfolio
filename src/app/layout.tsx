import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quicy | Software Engineer",
  description:
    "Portfolio of Nguyen Van Quy - Software Engineer specializing in React and Next.js. Building modern UI, optimizing performance and user experience.",

  keywords: [
    "Nguyễn Văn Quý",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Vietnam",
  ],

  authors: [{ name: "Nguyễn Văn Quý" }],
  creator: "Nguyễn Văn Quý",
  openGraph: {
    title: "Nguyễn Văn Quý | Frontend Developer",
    description:
      "Discover the portfolio of Nguyen Van Quy - specializing in building modern websites with React & Next.js.",

    siteName: "Quy.Dev",
    images: [
      {
        url: "/images/img_the.png",
        width: 1200,
        height: 630,
        alt: "Quy.Dev Portfolio",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: "/images/logo_portfolio.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
