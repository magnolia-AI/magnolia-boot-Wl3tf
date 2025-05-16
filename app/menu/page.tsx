      'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function MenuPage() {
  return (
    <div className="min-h-full pt-24 pb-16">
      {/* Menu Header */}
      <section className="relative py-16 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">Our Menu</h1>
          <p className="text-white/80 max-w-[600px] mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Explore our carefully crafted selection of modern Japanese cuisine, featuring the freshest ingredients and innovative techniques
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="sushi" className="w-full max-w-[1200px] mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
            <TabsTrigger value="sushi">Sushi</TabsTrigger>
            <TabsTrigger value="sashimi">Sashimi</TabsTrigger>
            <TabsTrigger value="hot">Hot Dishes</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
          </TabsList>
          
          {/* Sushi Menu */}
          <TabsContent value="sushi" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Cherry Blossom Roll"
                price="22"
                description="Fresh salmon, avocado and cucumber wrapped in pink soy paper, topped with tuna and sakura sauce"
                image="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974"
              />
              <MenuCard 
                title="Dragon Fire Roll"
                price="24"
                description="Spicy tuna and tempura shrimp inside, topped with avocado, eel, and a drizzle of spicy mayo and eel sauce"
                image="https://images.unsplash.com/photo-1676037150408-4b59a542f287?q=80&w=2070"
              />
              <MenuCard 
                title="Truffle Toro Roll"
                price="32"
                description="Fatty tuna belly, avocado, and cucumber, topped with seared wagyu beef and black truffle shavings"
                image="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070"
              />
              <MenuCard 
                title="Sakura Signature Roll"
                price="28"
                description="King crab, avocado, and cucumber wrapped in soy paper, topped with seared scallops and yuzu miso sauce"
                image="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2070"
              />
              <MenuCard 
                title="Golden Crispy Roll"
                price="26"
                description="Tempura shrimp, spicy crab, and avocado, wrapped in soy paper and flash fried, topped with gold flakes"
                image="https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1974"
              />
              <MenuCard 
                title="Ocean Garden Roll"
                price="24"
                description="Cucumber, avocado, and microgreens wrapped in rice paper, topped with assorted sashimi and citrus ponzu"
                image="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974"
              />
            </div>
          </TabsContent>
          
          {/* Sashimi Menu */}
          <TabsContent value="sashimi" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Premium Tuna Selection"
                price="38"
                description="Akami, chutoro, and otoro tuna slices, served with fresh wasabi and house-made soy sauce"
                image="https://images.unsplash.com/photo-1579399241633-efe2eb8ea8c6?q=80&w=1974"
              />
              <MenuCard 
                title="Hamachi Jalapeño"
                price="26"
                description="Thinly sliced yellowtail sashimi with jalapeño, cilantro, and yuzu ponzu sauce"
                image="https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=1974"
              />
              <MenuCard 
                title="Salmon Trio"
                price="28"
                description="Norwegian salmon, king salmon, and smoked salmon with three signature sauces"
                image="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070"
              />
              <MenuCard 
                title="Chef's Selection"
                price="42"
                description="Daily selection of the freshest seasonal fish, artfully presented with garnishes"
                image="https://images.unsplash.com/photo-1615361200141-f45961a70238?q=80&w=1964"
              />
            </div>
          </TabsContent>
          
          {/* Hot Dishes Menu */}
          <TabsContent value="hot" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Miso Black Cod"
                price="36"
                description="Marinated for 72 hours in our signature miso blend, then perfectly grilled to caramelized perfection"
                image="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025"
              />
              <MenuCard 
                title="A5 Wagyu Ishiyaki"
                price="48"
                description="Premium Japanese A5 wagyu beef, thinly sliced and served with hot stone for tableside cooking"
                image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
              />
              <MenuCard 
                title="Lobster Tempura"
                price="42"
                description="Maine lobster tail in light tempura batter, served with warm yuzu butter sauce"
                image="https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?q=80&w=1932"
              />
              <MenuCard 
                title="Truffle Mushroom Udon"
                price="28"
                description="Handmade udon noodles in a rich mushroom broth with seasonal mushrooms and black truffle"
                image="https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070"
              />
            </div>
          </TabsContent>
          
          {/* Desserts Menu */}
          <TabsContent value="desserts" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Matcha Tiramisu"
                price="14"
                description="Layers of matcha-soaked ladyfingers and mascarpone cream, dusted with matcha powder"
                image="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127"
              />
              <MenuCard 
                title="Yuzu Crème Brûlée"
                price="12"
                description="Classic crème brûlée infused with yuzu, topped with caramelized sugar and fresh berries"
                image="https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070"
              />
              <MenuCard 
                title="Mochi Ice Cream Platter"
                price="16"
                description="Assortment of seasonal mochi ice cream flavors, served with fruit coulis"
                image="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127"
              />
              <MenuCard 
                title="Sakura Cherry Blossom Cake"
                price="14"
                description="Delicate sponge cake with cherry blossom cream, topped with edible flowers"
                image="https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?q=80&w=2036"
              />
            </div>
          </TabsContent>
          
          {/* Drinks Menu */}
          <TabsContent value="drinks" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard 
                title="Sakura Martini"
                price="16"
                description="Premium vodka, cherry blossom liqueur, and fresh lemon juice, garnished with a floating cherry blossom"
                image="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1972"
              />
              <MenuCard 
                title="Yuzu Highball"
                price="14"
                description="Japanese whisky, yuzu juice, and sparkling water, served over crystal clear ice"
                image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1970"
              />
              <MenuCard 
                title="Premium Sake Flight"
                price="24"
                description="Tasting of three premium sakes: junmai daiginjo, ginjo, and nigori"
                image="https://images.unsplash.com/photo-1531603071569-0dd65ad72d53?q=80&w=1974"
              />
              <MenuCard 
                title="Matcha Latte"
                price="8"
                description="Ceremonial grade matcha whisked with steamed milk, served hot or over ice"
                image="https://images.unsplash.com/photo-1536013455962-2b4de3f2ae15?q=80&w=1974"
              />
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Reservation CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Experience Our Menu</h2>
          <p className="text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join us for an unforgettable dining experience. Reserve your table today.
          </p>
          <Button className="px-8 bg-primary hover:bg-primary/90 text-white animate-fade-in" style={{animationDelay: '0.3s'}}>
            Make a Reservation
          </Button>
        </div>
      </section>
    </div>
  )
}

function MenuCard({ title, price, description, image }: { title: string, price: string, description: string, image: string }) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-32 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        <CardContent className="p-6 w-full md:w-2/3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="text-primary font-semibold">${price}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </div>
    </Card>
  )
}
      EOF