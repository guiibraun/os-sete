import { Button } from '@/components/ui/button'
import Image from 'next/image'
import hero from '@/assets/hero.png'
import * as motion from 'framer-motion/client'

export function Hero() {
  return (
    <section className="container grid min-h-dvh lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-4">
        <motion.h1
          className="text-balance text-3xl font-extrabold sm:text-5xl lg:text-7xl"
          initial={{
            y: 100,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
        >
          Faça a programação ser divertida
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{
            y: 100,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
        >
          Any subject, in any language, on any device, for all ages!
        </motion.p>
        <motion.div
          initial={{
            y: 100,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            delay: 0.8
          }}
        >
          <Button className="w-fit">Começar</Button>
        </motion.div>
      </div>
      <motion.div
        className="self-center"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 2
        }}
      >
        <Image src={hero} alt="" width={600} />
      </motion.div>
    </section>
  )
}
