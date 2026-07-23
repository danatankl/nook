import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nook — Build a home that feels like yours",
  description:
    "Discover, collect, and combine meaningful spaces into a home that feels like your own.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

