import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechZone Electronics | Smartphones, Tablets & Gadgets",
  description:
    "Explore smartphones, tablets, computers and accessories at TechZone Electronics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}