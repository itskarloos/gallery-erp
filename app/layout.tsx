import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Head from "next/head";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],

  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Post Gallery",
  description: "an art gallery for all the art lovers out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
