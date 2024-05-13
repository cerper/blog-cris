'use client'

import TestimonialSlide from './TestimonialSlide'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'

const Testimonials = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-center gap-8 items-center ">
        <h2 className="text-purple-400 text-4xl">Testimonios</h2>
        <TestimonialSlide />
      </div>
    </div>
  )
}
export default Testimonials
