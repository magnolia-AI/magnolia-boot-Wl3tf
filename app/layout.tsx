import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'


export const metadata: Metadata = {
  title: 'Sakura Sushi | Modern Japanese Cuisine',
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased">
        <ThemeProvider defaultTheme="light" attribute="class">
          {/* 
            TEMPLATE SECTION: Header
            This is a template header - replace with your own navigation
            Consider adding a logo, navigation links, theme toggle, etc.
          */}
          <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MobileNav />
                <div className="font-bold text-2xl text-white">SAKURA</div>
              </div>
              <nav className="hidden md:flex gap-8">
                <a href="/" className="text-white hover:text-primary transition-colors font-medium">Home</a>
                <a href="/menu" className="text-white hover:text-primary transition-colors font-medium">Menu</a>
                <a href="#" className="text-white hover:text-primary transition-colors font-medium">About</a>
                <a href="#" className="text-white hover:text-primary transition-colors font-medium">Gallery</a>
                <a href="#" className="text-white hover:text-primary transition-colors font-medium">Contact</a>
              </nav>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white">Reserve</Button>
              </div>
            </div>
          </header>

          {/* 
            TEMPLATE NOTE:
            This is where your page content will be rendered.
            The layout wraps all pages with consistent header and footer.
          */}
          <main className="flex-1">
            {children}
          </main>

          {/* 
            TEMPLATE SECTION: Footer
            Basic footer - replace with your own design
            Consider adding navigation, social links, etc.
          */}

          <footer className="bg-secondary text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold text-2xl mb-4">SAKURA</h3>
                  <p className="text-sm text-white/80">
                    Modern Japanese cuisine crafted with passion and precision. Experience the perfect balance of tradition and innovation.                  </p>
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
        </ThemeProvider>
      </body>
    </html>
  )
}



