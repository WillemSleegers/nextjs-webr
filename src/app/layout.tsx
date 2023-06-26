import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"
import { siteConfig } from "@/config/site"

import "./globals.css"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-white border-b border-gray-200 dark:bg-gray-800",
          fontSans.variable
        )}
      >
        <SiteHeader />
        <div>{children}</div>
      </body>
    </html>
  )
}
