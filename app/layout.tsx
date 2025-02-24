import type { Metadata } from "next";
import "./globals.scss";
import NextTopLoader from "nextjs-toploader";
import Layout from "./components/shared/Layout";

export const metadata: Metadata = {
  title: "AbTechCare Website",
  description: "The website for AbTechCare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
           <NextTopLoader
                    color="#FFCC29"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #FFCC29,0 0 5px #FFCC29"
                />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
