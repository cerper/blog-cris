'use client'

import { AiFillQuestionCircle } from 'react-icons/ai'
import { FcPlus } from 'react-icons/fc'
import { SiEpicgames } from 'react-icons/si'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'

/* data de la persona con iconos  */

const miData = [
  {
    name: 'Quien soy?',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas, impedit nulla consequatur quos exercitationem? Et possimus',
    icon: <AiFillQuestionCircle />,
  },
  {
    name: 'Quien soy?',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas, impedit nulla consequatur quos exercitationem? Et possimus',
    icon: <AiFillQuestionCircle />,
  },
  {
    name: 'Quien soy?',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas, impedit nulla consequatur quos exercitationem? Et possimus',
    icon: <AiFillQuestionCircle />,
  },
]

const AcercaDeMi = () => {
  return (
    <div className=" mt-8">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-4xl text-purple-800">Acerca de mi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-52 mt-16 ">
          {miData.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col justify-center items-center mx-4 gap-4"
              >
                <motion.div
                  variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-8xl text-purple-400"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <motion.h5
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="h5 text-black text-3xl"
                  >
                    {item.name}
                  </motion.h5>
                </div>
                <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-xl text-center"
                >
                  {item.text}
                </motion.p>
              </div>
            )
          })}
        </div>
        <div className=" flex flex-col lg:flex-row lg:w-[800px] justify-center items-center py-16 gap-24 lg:gap-96  text-8xl ">
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <FcPlus className="text-purple-400" />
            <h6 className="text-center text-xl">
              la mejor atencion para el cliente
            </h6>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-center items-center"
          >
            <FcPlus className="text-purple-400" />
            <h6 className="text-center text-xl">
              Las tecnicas mas avanzadas a tu alcance
            </h6>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default AcercaDeMi
