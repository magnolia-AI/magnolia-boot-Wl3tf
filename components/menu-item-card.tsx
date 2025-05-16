      'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type MenuItemProps = {
  name: string
  description: string
  price: string
  image: string
  category?: string
  isNew?: boolean
  isPopular?: boolean
  isVegetarian?: boolean
}

export default function MenuItemCard({
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  isPopular = false,
  isVegetarian = false,
}: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="overflow-hidden group cursor-hover transition-all duration-500 border-0 bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div 
          className="aspect-[4/3] bg-cover bg-center transition-all duration-700 transform group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-white dark:bg-black/80 text-foreground px-3 py-1 rounded-full font-semibold">
          {price}
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <Badge variant="secondary" className="bg-secondary text-white">
              New
            </Badge>
          )}
          {isPopular && (
            <Badge variant="default" className="bg-primary text-white">
              Popular
            </Badge>
          )}
          {isVegetarian && (
            <Badge variant="outline" className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500">
              Vegetarian
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="pt-4 pb-5 px-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{name}</h3>
          {category && (
            <span className="text-xs text-muted-foreground">{category}</span>
          )}
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
