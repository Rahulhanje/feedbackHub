import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Pageheader from "@/components/page-header";
import Script from "next/script";
import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
        <Script src="https://feebackhub-widget.vercel.app/widget.umd.js"></Script>
        </Head>
        <body>
        <Pageheader></Pageheader>
          
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
