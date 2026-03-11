import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shamvil Shahin M | Full Stack Flutter Developer",
  description: "Portfolio of Shamvil Shahin M, a Full Stack Flutter Developer specializing in multi-vendor marketplaces, real-time apps, and Firebase backends.",
  keywords: ["Flutter", "Dart", "Firebase", "App Developer", "Freelance", "Mobile Apps", "Full Stack"],
  authors: [{ name: "Shamvil Shahin M" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
