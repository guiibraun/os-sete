import { Button } from '@/components/ui/button'
import * as motion from 'framer-motion/client'
import Link from 'next/link'

export function Articles() {
  return (
    <section className="container space-y-8 px-3 py-12">
      <motion.h2
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        initial={{
          y: 100,
          opacity: 0
        }}
        transition={{
          duration: 0.5
        }}
        className="text-center text-4xl font-extrabold"
      >
        Conteúdos
      </motion.h2>
      <hr className="mx-auto my-4 max-w-28 border-t-8 border-primary" />
      <div className="grid gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <article
            key={index}
            className="flex min-h-52 overflow-hidden rounded-lg transition-shadow hover:shadow-2xl"
          >
            <div className="jus flex flex-1 flex-col gap-y-8 bg-yellow-950 p-4 lg:p-8">
              <strong className="line-clamp-2 text-2xl font-extrabold text-white">
                O que é programação
              </strong>
              <Link
                href="/"
                className="font-bold text-white transition-all hover:underline"
              >
                Leia mais
              </Link>
            </div>
            <div className="w-full max-w-44 bg-blue-500"></div>
          </article>
        ))}
      </div>
    </section>
  )
}
