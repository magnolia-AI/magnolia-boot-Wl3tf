      'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Reveal } from '@/components/reveal'
import { TextReveal } from '@/components/text-reveal'
import { Magnetic } from '@/components/magnetic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function MenuPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  })
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  
  return (
    <div className="min-h-full pt-20 pb-16">
      {/* Menu Header */}
      <section ref={headerRef} className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070')] bg-cover bg-fixed bg-center"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-white/10 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full border border-white/5 animate-rotate-reverse"></div>
        </div>
        
        <motion.div 
          className="relative container mx-auto px-4 text-center z-10"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <Reveal animation="scale">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display text-glow">
              Our Menu
            </h1>
          </Reveal>
          
          <Reveal animation="fade-up" delay={0.2}>
            <p className="text-white/80 max-w-[700px] mx-auto text-xl">
              Explore our carefully crafted selection of modern Japanese cuisine, featuring the freshest ingredients and innovative techniques
            </p>
          </Reveal>
        </motion.div>
      </section>

      {/* Menu Categories */}
      <section className="container mx-auto px-4 py-24 relative">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 opacity-5 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-float-slow"></div>
        </div>
        
        <Tabs defaultValue="sushi" className="w-full max-w-[1200px] mx-auto relative z-10" 
          onValueChange={(value) => setActiveCategory(value)}
        >
          <Reveal animation="fade-up">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-16 p-1 rounded-full bg-muted/50 backdrop-blur-sm">
              {['sushi', 'sashimi', 'hot', 'desserts', 'drinks'].map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white py-3 capitalize font-medium text-base"
                >
                  {category === 'hot' ? 'Hot Dishes' : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>
          
          {/* Sushi Menu */}
          <TabsContent value="sushi" className="space-y-12">
            <Reveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">Signature Rolls</h2>
                <p className="text-muted-foreground">Expertly crafted rolls featuring premium ingredients and creative flavor combinations</p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Cherry Blossom Roll"
                price="22"
                description="Fresh salmon, avocado and cucumber wrapped in pink soy paper, topped with tuna and sakura sauce"
                image="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974"
                delay={0.1}
              />
              <MenuCard 
                title="Dragon Fire Roll"
                price="24"
                description="Spicy tuna and tempura shrimp inside, topped with avocado, eel, and a drizzle of spicy mayo and eel sauce"
                image="https://images.unsplash.com/photo-1676037150408-4b59a542f287?q=80&w=2070"
                delay={0.2}
              />
              <MenuCard 
                title="Truffle Toro Roll"
                price="32"
                description="Fatty tuna belly, avocado, and cucumber, topped with seared wagyu beef and black truffle shavings"
                image="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070"
                delay={0.3}
              />
              <MenuCard 
                title="Sakura Signature Roll"
                price="28"
                description="King crab, avocado, and cucumber wrapped in soy paper, topped with seared scallops and yuzu miso sauce"
                image="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2070"
                delay={0.4}
              />
              <MenuCard 
                title="Golden Crispy Roll"
                price="26"
                description="Tempura shrimp, spicy crab, and avocado, wrapped in soy paper and flash fried, topped with gold flakes"
                image="https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1974"
                delay={0.5}
              />
              <MenuCard 
                title="Ocean Garden Roll"
                price="24"
                description="Cucumber, avocado, and microgreens wrapped in rice paper, topped with assorted sashimi and citrus ponzu"
                image="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974"
                delay={0.6}
              />
            </div>
          </TabsContent>
          
          {/* Sashimi Menu */}
          <TabsContent value="sashimi" className="space-y-12">
            <Reveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">Premium Sashimi</h2>
                <p className="text-muted-foreground">The freshest cuts of fish, expertly sliced and artfully presented</p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Premium Tuna Selection"
                price="38"
                description="Akami, chutoro, and otoro tuna slices, served with fresh wasabi and house-made soy sauce"
                image="https://images.unsplash.com/photo-1579399241633-efe2eb8ea8c6?q=80&w=1974"
                delay={0.1}
              />
              <MenuCard 
                title="Hamachi Jalapeño"
                price="26"
                description="Thinly sliced yellowtail sashimi with jalapeño, cilantro, and yuzu ponzu sauce"
                image="https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=1974"
                delay={0.2}
              />
              <MenuCard 
                title="Salmon Trio"
                price="28"
                description="Norwegian salmon, king salmon, and smoked salmon with three signature sauces"
                image="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070"
                delay={0.3}
              />
              <MenuCard 
                title="Chef's Selection"
                price="42"
                description="Daily selection of the freshest seasonal fish, artfully presented with garnishes"
                image="https://images.unsplash.com/photo-1615361200141-f45961a70238?q=80&w=1964"
                delay={0.4}
              />
            </div>
          </TabsContent>
          
          {/* Hot Dishes Menu */}
          <TabsContent value="hot" className="space-y-12">
            <Reveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">Hot Specialties</h2>
                <p className="text-muted-foreground">Warm, comforting dishes that showcase the depth of Japanese cuisine</p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Miso Black Cod"
                price="36"
                description="Marinated for 72 hours in our signature miso blend, then perfectly grilled to caramelized perfection"
                image="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025"
                delay={0.1}
              />
              <MenuCard 
                title="A5 Wagyu Ishiyaki"
                price="48"
                description="Premium Japanese A5 wagyu beef, thinly sliced and served with hot stone for tableside cooking"
                image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
                delay={0.2}
              />
              <MenuCard 
                title="Lobster Tempura"
                price="42"
                description="Maine lobster tail in light tempura batter, served with warm yuzu butter sauce"
                image="https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?q=80&w=1932"
                delay={0.3}
              />
              <MenuCard 
                title="Truffle Mushroom Udon"
                price="28"
                description="Handmade udon noodles in a rich mushroom broth with seasonal mushrooms and black truffle"
                image="https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070"
                delay={0.4}
              />
            </div>
          </TabsContent>
          
          {/* Desserts Menu */}
          <TabsContent value="desserts" className="space-y-12">
            <Reveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">Sweet Finales</h2>
                <p className="text-muted-foreground">Delicate desserts that balance sweetness with Japanese flavors</p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Matcha Tiramisu"
                price="14"
                description="Layers of matcha-soaked ladyfingers and mascarpone cream, dusted with matcha powder"
                image="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127"
                delay={0.1}
              />
              <MenuCard 
                title="Yuzu Crème Brûlée"
                price="12"
                description="Classic crème brûlée infused with yuzu, topped with caramelized sugar and fresh berries"
                image="https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070"
                delay={0.2}
              />
              <MenuCard 
                title="Mochi Ice Cream Platter"
                price="16"
                description="Assortment of seasonal mochi ice cream flavors, served with fruit coulis"
                image="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127"
                delay={0.3}
              />
              <MenuCard 
                title="Sakura Cherry Blossom Cake"
                price="14"
                description="Delicate sponge cake with cherry blossom cream, topped with edible flowers"
                image="https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?q=80&w=2036"
                delay={0.4}
              />
            </div>
          </TabsContent>
          
          {/* Drinks Menu */}
          <TabsContent value="drinks" className="space-y-12">
            <Reveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">Libations</h2>
                <p className="text-muted-foreground">Handcrafted cocktails and premium beverages to complement your meal</p>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Sakura Martini"
                price="16"
                description="Premium vodka, cherry blossom liqueur, and fresh lemon juice, garnished with a floating cherry blossom"
                image="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1972"
                delay={0.1}
              />
              <MenuCard 
                title="Yuzu Highball"
                price="14"
                description="Japanese whisky, yuzu juice, and sparkling water, served over crystal clear ice"
                image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1970"
                delay={0.2}
              />
              <MenuCard 
                title="Premium Sake Flight"
                price="24"
                description="Tasting of three premium sakes: junmai daiginjo, ginjo, and nigori"
                image="https://images.unsplash.com/photo-1531603071569-0dd65ad72d53?q=80&w=1974"
                delay={0.3}
              />
              <MenuCard 
                title="Matcha Latte"
                price="8"
                description="Ceremonial grade matcha whisked with steamed milk, served hot or over ice"
                image="https://images.unsplash.com/photo-1536013455962-2b4de3f2ae15?q=80&w=1974"
                delay={0.4}
              />
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Reservation CTA */}
