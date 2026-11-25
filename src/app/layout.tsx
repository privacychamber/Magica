import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAGICA — Stay. Eat. Celebrate. Feel the Magic.",
  description:
    "Integrated hospitality, cafe, electronic music destination, and Himalayan experiences platform in Kasol, Parvati Valley.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
