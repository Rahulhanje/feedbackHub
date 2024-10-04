import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
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
        </body>
      </html>
    </ClerkProvider>
  )
}