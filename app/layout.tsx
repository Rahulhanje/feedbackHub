import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Pageheader from "@/components/page-header";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>My App</title>
        </head>
        <body>
          {/* Move <Script> outside of <head> */}
          <Script src="https://feebackhub-widget.vercel.app/widget.umd.js" />
          <Pageheader />
          <my-widget project-id="62"></my-widget>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
