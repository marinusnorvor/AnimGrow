import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnimGrow | Premium Livestock Care",
  description: "Premium goat and sheep care-as-a-service in Ghana.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
