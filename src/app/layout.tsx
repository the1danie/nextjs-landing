import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SITE NAME - AI-Based Blockchain Platform | Fast & Secure",
  description:
    "Experience the fastest blockchain technology with 120K TPS and AI-based security. Our Proof of Stake platform enables unlimited speeds with guaranteed data protection.",
  openGraph: {
    title: "SITE NAME - AI-Based Blockchain Platform",
    description: "Fast blockchain (120K TPS) with AI-based security",
    type: "website",
    url: "https://sitename.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SITE NAME - AI-Based Blockchain Platform",
    description: "Fast blockchain (120K TPS) with AI-based security",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
