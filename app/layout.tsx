import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Script from "next/script";

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
        <script>
          {`
          (function (m, a, z, e) {
            var s, t;
            try {
              t = m.sessionStorage.getItem('maze-us');
            } catch (err) {}
          
            if (!t) {
              t = new Date().getTime();
              try {
                m.sessionStorage.setItem('maze-us', t);
              } catch (err) {}
            }
          
            s = a.createElement('script');
            s.src = z + '?t=' + t + '&apiKey=' + e;
            s.async = true;
            a.getElementsByTagName('head')[0].appendChild(s);
            m.mazeUniversalSnippetApiKey = e;
          })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', 'cf0132ae-c56d-4e39-9f52-eca180b797be');
          `}
        </script>
      </Head>
      <body className={(inter.className, "bg-gray-200")}>
        <h1 className="text-5xl font-bold mx-5 my-5">Stock Dashboard</h1>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
