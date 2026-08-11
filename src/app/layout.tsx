import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakib Hussain A — AI Engineer & Data Scientist",
  description:
    "Portfolio of Sakib Hussain A — Aspiring AI Engineer specializing in Machine Learning, Deep Learning, NLP, and Federated Learning. Based in Mysore, Karnataka, India.",
  keywords: [
    "Sakib Hussain",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Federated Learning",
    "Data Science",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Sakib Hussain A" }],
  creator: "Sakib Hussain A",
  openGraph: {
    title: "Sakib Hussain A — AI Engineer & Data Scientist",
    description:
      "Aspiring AI Engineer specializing in Machine Learning, Deep Learning, NLP, and Federated Learning. Explore projects, skills, and experience.",
    url: "https://sakibhussain.vercel.app",
    siteName: "Sakib Hussain Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/275234727?v=4",
        width: 400,
        height: 400,
        alt: "Sakib Hussain A",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakib Hussain A — AI Engineer & Data Scientist",
    description:
      "Aspiring AI Engineer specializing in Machine Learning, Deep Learning, NLP, and Federated Learning.",
    images: ["https://avatars.githubusercontent.com/u/275234727?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
