import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./header/page";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "Nine Hair and Nails Salon",
  description: "We hope you stop by for your next appointment!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
