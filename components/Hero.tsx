'use client'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

const Hero = () => {
  return (
    <div className={`h-full ${roboto.className}`}>
      <div className="flex pt-10 h-full justify-end">
        <div className=" gap-2 h-[400px] lg:h-[600px] w-[300px] lg:w-[900px] ">
          <div className="flex flex-col gap-2 h-full justify-center items-end lg:items-center ">
            <motion.h2
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
              className="h2 text-4xl lg:text-7xl text-purple-400 text-end  uppercase lg:text-center"
            >
              consigue la sorisa soñada
            </motion.h2>
            {/* */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Button
                variant={'ghost'}
                className="z-50 text-white w-[120px] h-[50px]   text-lg lg:w-[150px] hover:text-emerald-400 hover:bg-black bg-purple-600 mt-6 flex "
              >
                Contactame
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
