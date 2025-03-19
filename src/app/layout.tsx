import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import CallButton from "./call-button/page";
import Footer from "./footer/page";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "Nine Hair and Nails Salon",
  description: "We hope you stop by for your next appointment!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <CallButton />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
