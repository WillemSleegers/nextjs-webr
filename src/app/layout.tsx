import "./globals.css"
import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <div className="flex-1 flex flex-col">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
