import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import { Playfair_Display, Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { Magnetic } from '@/components/magnetic'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'SAKURA | Modern Japanese Cuisine',
  description: 'Experience the art of modern Japanese cuisine with innovative dishes and a unique dining atmosphere',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased">
        <ThemeProvider defaultTheme="light" attribute="class">
          <SmoothScroll>
            <CustomCursor />
            <ScrollProgress color="hsl(var(--primary))" height={3} />
            
            <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm bg-black/10 transition-all duration-300">
              <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MobileNav />
                  <Magnetic strength={20}>
                    <div className="font-bold text-2xl text-white font-display">SAKURA</div>
                  </Magnetic>
                </div>
                <nav className="hidden md:flex gap-8">
                  <Magnetic strength={15}>
                    <a href="/" className="text-white hover:text-primary transition-colors font-medium">Home</a>
                  </Magnetic>
                  <Magnetic strength={15}>
                    <a href="/menu" className="text-white hover:text-primary transition-colors font-medium">Menu</a>
                  </Magnetic>
                  <Magnetic strength={15}>
                    <a href="#" className="text-white hover:text-primary transition-colors font-medium">About</a>
                  </Magnetic>
                  <Magnetic strength={15}>
                    <a href="#" className="text-white hover:text-primary transition-colors font-medium">Gallery</a>
                  </Magnetic>
                  <Magnetic strength={15}>
                    <a href="#" className="text-white hover:text-primary transition-colors font-medium">Contact</a>
                  </Magnetic>
                </nav>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <Magnetic strength={25}>
                    <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Reserve</Button>
                  </Magnetic>
                </div>
              </div>
            </header>

            <main className="flex-1">
              {children}
            </main>

            <footer className="bg-secondary text-white noise">
              <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold text-2xl mb-4 font-display">SAKURA</h3>
                    <p className="text-sm text-white/80">
                      Modern Japanese cuisine crafted with passion and precision. Experience the perfect balance of tradition and innovation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Explore</h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Our Menu</a></li>
                      <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Reservations</a></li>
                      <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Private Events</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Hours</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-white/80">Monday - Thursday: 5PM - 10PM</li>
                      <li className="text-white/80">Friday - Saturday: 5PM - 11PM</li>
                      <li className="text-white/80">Sunday: 5PM - 9PM</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-white/80">Email: info@sakurasushi.com</li>
                      <li className="text-white/80">Phone: (555) 123-4567</li>
                      <li className="text-white/80">Address: 123 Sakura Lane, Tokyo District</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-6 text-center border-t border-white/20">
                  <p className="text-sm text-white/60">
                    © 2025 Sakura Sushi. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
            <Toaster />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}




