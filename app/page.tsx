'use client'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Magnetic } from '@/components/magnetic'
import { Parallax } from '@/components/parallax'
import { Reveal } from '@/components/reveal'
import { TextReveal } from '@/components/text-reveal'
import { SplitText } from '@/components/split-text'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'

export default function Home() {
  const { toast } = useToast()
  const heroRef = useRef<HTMLDivElement>(null)
  const dishesRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100])
  
  const showReservation = () => {
    toast({
      title: "Reservation Confirmed",
      description: "Your table has been reserved. We look forward to serving you!",
      className: "bg-primary/10 border-primary",
    })
  }
  
  useEffect(() => {
    // Animate hero elements
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.hero-title', 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
        )
        
        gsap.fromTo(
          '.hero-subtitle', 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
        )
        
        gsap.fromTo(
          '.hero-buttons', 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
        )
        
        // Animate floating elements
        gsap.to('.floating-element', {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2
        })
      }, heroRef)
      
      return () => ctx.revert()
    }
  }, [])
  
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: heroScale }}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070')] bg-cover bg-center"></div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="floating-element absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>
          <div className="floating-element absolute top-[60%] right-[15%] w-32 h-32 rounded-full bg-secondary/20 blur-xl"></div>
          <div className="floating-element absolute bottom-[20%] left-[20%] w-40 h-40 rounded-full bg-primary/10 blur-xl"></div>
        </div>
        
        <motion.div 
          className="relative z-20 text-center px-4"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="hero-title">
            <SplitText 
              text="SAKURA SUSHI" 
              className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 text-shadow-lg font-display"
              splitBy="chars"
              animation="slide-up"
              staggerChildren={0.03}
              delay={0.2}
            />
          </div>
          
          <div className="hero-subtitle">
            <TextReveal 
              text="Experience the art of modern Japanese cuisine in a contemporary atmosphere"
              className="text-xl md:text-2xl text-white/90 max-w-[600px] mx-auto mb-12 text-shadow"
              delay={0.5}
              staggerChildren={0.01}
            />
          </div>
          
          <div className="hero-buttons flex gap-6 justify-center">
            <Magnetic strength={30}>
              <Button size="lg" className="px-10 py-6 bg-primary hover:bg-primary/90 text-white rounded-full text-lg" asChild>
                <a href="/menu">Explore Menu</a>
              </Button>
            </Magnetic>
            
            <Magnetic strength={20}>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-10 py-6 text-white border-white hover:bg-white/10 rounded-full text-lg glass" 
                onClick={showReservation}
              >
                Reserve a Table
              </Button>
            </Magnetic>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section ref={dishesRef} className="container mx-auto px-4 py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-float-slow"></div>
        </div>
        
        <Reveal animation="fade-up">
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-outline-light mr-2">Signature</span> Creations
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
              Our master chefs blend traditional techniques with innovative flavors to create unforgettable dining experiences
            </p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-[1200px] mx-auto relative z-10">
          <Reveal animation="fade-up" delay={0.1}>
            <Parallax speed={0.1}>
              <Card className="overflow-hidden border-none shadow-xl hover-lift rounded-xl">
                <div className="h-72 bg-[url('https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974')] bg-cover bg-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="pt-8 pb-8 px-6">
                  <h3 className="text-2xl font-semibold mb-3 font-display">Cherry Blossom Roll</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fresh salmon, avocado and cucumber wrapped in pink soy paper, topped with tuna and sakura sauce.
                  </p>
                </CardContent>
              </Card>
            </Parallax>
          </Reveal>
          
          <Reveal animation="fade-up" delay={0.2}>
            <Parallax speed={0.15}>
              <Card className="overflow-hidden border-none shadow-xl hover-lift rounded-xl">
                <div className="h-72 bg-[url('https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1974')] bg-cover bg-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="pt-8 pb-8 px-6">
                  <h3 className="text-2xl font-semibold mb-3 font-display">Truffle Wagyu Nigiri</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Premium A5 wagyu seared to perfection, brushed with truffle oil and finished with gold flakes.
                  </p>
                </CardContent>
              </Card>
            </Parallax>
          </Reveal>
          
          <Reveal animation="fade-up" delay={0.3}>
            <Parallax speed={0.2}>
              <Card className="overflow-hidden border-none shadow-xl hover-lift rounded-xl">
                <div className="h-72 bg-[url('https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025')] bg-cover bg-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="pt-8 pb-8 px-6">
                  <h3 className="text-2xl font-semibold mb-3 font-display">Miso Black Cod</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Marinated for 72 hours in our signature miso blend, then perfectly grilled to caramelized perfection.
                  </p>
                </CardContent>
              </Card>
            </Parallax>
          </Reveal>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?q=80&w=1964')] bg-cover bg-fixed bg-center brightness-[0.2]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal animation="fade-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display text-shadow-lg">
                  A Culinary <span className="text-primary">Journey</span>
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  At Sakura, we believe dining is more than just eating—it's an immersive experience that engages all your senses. Our chefs craft each dish with precision and artistry, creating visual masterpieces that taste even better than they look.
                </p>
                <div className="flex gap-4 mb-8">
                  <div className="w-1/2 h-px bg-primary/50"></div>
                  <div className="w-1/4 h-px bg-primary/30"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-white/90">Seasonal ingredients sourced daily</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-white/90">Handcrafted with traditional techniques</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-white/90">Innovative flavor combinations</p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal animation="fade-right" delay={0.2}>
              <div className="perspective">
                <div className="relative preserve-3d animate-float">
                  <div className="absolute -top-12 -left-12 w-64 h-64 rounded-lg bg-[url('https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=2574')] bg-cover bg-center shadow-2xl transform rotate-6"></div>
                  <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-lg bg-[url('https://images.unsplash.com/photo-1540648639573-8c848de23f0a?q=80&w=1924')] bg-cover bg-center shadow-2xl transform -rotate-6"></div>
                  <div className="relative w-full h-96 rounded-lg bg-[url('https://images.unsplash.com/photo-1607301406259-dfb186e15de8?q=80&w=1964')] bg-cover bg-center shadow-2xl border border-white/10"></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className="bg-secondary py-32 relative overflow-hidden noise">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1974')] bg-cover bg-center"></div>
        </div>
        
        {/* Animated circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-white/10 animate-spin-slow"></div>
          <div className="absolute top-40 right-10 w-40 h-40 rounded-full border border-white/5 animate-rotate-reverse"></div>
          <div className="absolute bottom-20 left-1/2 w-60 h-60 rounded-full border border-white/5 animate-spin-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Reveal animation="scale">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white font-display text-glow-primary">
                Reserve Your Experience
              </h2>
              <p className="text-white/80 mb-10 text-xl leading-relaxed">
                Join us for an unforgettable culinary journey through the flavors of modern Japan. Our intimate setting offers the perfect atmosphere for special occasions.
              </p>
              <Magnetic strength={40}>
                <Button className="px-12 py-7 bg-primary hover:bg-primary/90 text-white rounded-full text-lg">
                  Book a Table
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-32 container mx-auto px-4">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              What Our <span className="text-primary">Guests</span> Say
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
              The experiences of our valued guests inspire us to continue elevating the art of Japanese cuisine
            </p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Reveal animation="fade-up" delay={0.1}>
            <Card className="border-none shadow-lg p-8 rounded-xl hover-lift">
              <div className="flex flex-col h-full">
                <div className="mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "The Cherry Blossom Roll was a revelation. The combination of flavors and textures was unlike anything I've experienced before. Truly a work of art."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    JT
                  </div>
                  <div>
                    <p className="font-semibold">James Thompson</p>
                    <p className="text-sm text-muted-foreground">Food Critic</p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
          
          <Reveal animation="fade-up" delay={0.2}>
            <Card className="border-none shadow-lg p-8 rounded-xl hover-lift">
              <div className="flex flex-col h-full">
                <div className="mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "From the moment we walked in, we were transported to another world. The attention to detail in both food and service is unmatched. A must-visit."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Lee</p>
                    <p className="text-sm text-muted-foreground">Regular Guest</p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
          
          <Reveal animation="fade-up" delay={0.3}>
            <Card className="border-none shadow-lg p-8 rounded-xl hover-lift">
              <div className="flex flex-col h-full">
                <div className="mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "The Wagyu Nigiri melted in my mouth like butter. Chef Tanaka's creations are the perfect blend of tradition and innovation. An exceptional dining experience."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                    DM
                  </div>
                  <div>
                    <p className="font-semibold">David Miller</p>
                    <p className="text-sm text-muted-foreground">Culinary Enthusiast</p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  )
}



