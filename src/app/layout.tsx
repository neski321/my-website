import type React from "react"
import type { Metadata } from "next/types"
import { Inter, Poppins, Roboto_Flex } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import ThreadsBackground from "../components/ThreadsBackground"
import ClickSpark from "../components/ClickSpark"
import { Toaster } from "../components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
})

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Neskines Otieno | Software Developer & Creative Technologist",
  description: "Full-stack software developer specializing in modern web applications, mobile development, and innovative digital solutions. Explore my portfolio of projects and get in touch for collaboration opportunities.",
  keywords: ["software developer", "full-stack developer", "web development", "mobile development", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Neskines Otieno" }],
  creator: "Neskines Otieno",
  publisher: "Neskines Otieno",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neskines.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neskines Otieno | Software Developer & Creative Technologist",
    description: "Full-stack software developer specializing in modern web applications, mobile development, and innovative digital solutions.",
    url: "https://neskines.dev",
    siteName: "Neskines Otieno Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neskines Otieno - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neskines Otieno | Software Developer & Creative Technologist",
    description: "Full-stack software developer specializing in modern web applications, mobile development, and innovative digital solutions.",
    images: ["/og-image.jpg"],
    creator: "@neskines",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${robotoFlex.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`} style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Threads background - outside of flex container to avoid constraints */}
          <ThreadsBackground />
          
          <div className="flex min-h-screen flex-col relative">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 -z-10" style={{ overflow: 'visible', width: '100vw', left: 0, right: 0 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
              <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
              </div>
            </div>
            
            <Navbar />
            <main className="flex-1 relative" style={{ overflowX: 'hidden' }}>
              <ClickSpark
                sparkColor="#fff"
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
              >
                {children}
              </ClickSpark>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
