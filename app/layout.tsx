import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stock Dashboard",
  description: "Visualization Information Final Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <h1 className="text-5xl">Stock Dashboard</h1>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
