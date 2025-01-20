import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Teander",
  description: "Teashop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black flex flex-col overflow-x-hidden cursor-default">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
