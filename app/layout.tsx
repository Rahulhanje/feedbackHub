import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import Pageheader from '@/components/page-header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <Pageheader></Pageheader>
          
          {children}
          <my-widget project-id="60"></my-widget>
<script src="https://feebackhub-widget.vercel.app//widget.umd.js"></script>
        </body>
      </html>
    </ClerkProvider>
  )
}
