'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()

  const showReservation = () => {
    toast({
      title: "Reservation Confirmed",
      description: "Your table has been reserved. We look forward to serving you!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070')] bg-cover bg-center"></div>
        </div>
        <div className="relative z-20 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-shadow-lg">
            SAKURA SUSHI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-[600px] mx-auto mb-10 text-shadow">
            Experience the art of modern Japanese cuisine in a contemporary atmosphere
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8 bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="/menu">Our Menu</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white/20" onClick={showReservation}>
              Reserve a Table
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Signature Creations</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Our master chefs blend traditional techniques with innovative flavors to create unforgettable dining experiences
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="overflow-hidden border-none shadow-lg animate-slide-right" style={{animationDelay: '0.1s'}}>
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974')] bg-cover bg-center"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Cherry Blossom Roll</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fresh salmon, avocado and cucumber wrapped in pink soy paper, topped with tuna and sakura sauce.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-lg animate-slide-right" style={{animationDelay: '0.2s'}}>
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1974')] bg-cover bg-center"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Truffle Wagyu Nigiri</h3>
              <p className="text-muted-foreground leading-relaxed">
                Premium A5 wagyu seared to perfection, brushed with truffle oil and finished with gold flakes.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-none shadow-lg animate-slide-right" style={{animationDelay: '0.3s'}}>
            <div className="h-64 bg-[url('https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025')] bg-cover bg-center"></div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Miso Black Cod</h3>
              <p className="text-muted-foreground leading-relaxed">
                Marinated for 72 hours in our signature miso blend, then perfectly grilled to caramelized perfection.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
              Reserve Your Experience
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Join us for an unforgettable culinary journey through the flavors of modern Japan.
            </p>
            <Button className="px-8 bg-primary hover:bg-primary/90 text-white">
              Book a Table
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


