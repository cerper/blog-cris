import { Button } from './ui/button'
import * as React from 'react'
import Image from 'next/image'
import foto from '@/public/portada-cris.jpg'
import logo from '@/public/logo-a-color-1536x690.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-lg"
    >
      <CarouselContent className="mt-8">
        <CarouselItem className="md:basis-1/2 lg:basis-full">
          <Image
            src={foto}
            alt="foto"
            className="w-full h-3/4"
            width={300}
            height={300}
          />
        </CarouselItem>{' '}
        <CarouselItem className="md:basis-1/2 lg:basis-full">
          <Image
            src={logo}
            alt="foto"
            className="w-full"
            width={300}
            height={300}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D"
            alt="foto"
            width={300}
            height={200}
            className="w-full h-3/4"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
