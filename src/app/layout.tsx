import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/utils/Providers";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rating App",
  description: "Rating App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
