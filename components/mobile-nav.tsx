'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="font-bold text-2xl mb-8 mt-4">SAKURA</div>
        <nav className="flex flex-col gap-4">
          <a
            href="/"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="/menu"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Menu
          </a>
          <a
            href="#"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#"
            className="px-2 py-1 text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 



