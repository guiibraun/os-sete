import Loading from '@/app/artigos/[slug]/loading'
import GamesService from '@/services/game-service'
import * as motion from 'framer-motion/client'
import Image from 'next/image'

const variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
}

export async function Games() {
  const games = await GamesService.getAll()

  return (
    <>
      <section id="conteudo" className="bg-purple-50 px-3 py-12">
        <div className="container space-y-8">
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
              duration: 0.5,
              once: true
            }}
            className="text-center text-4xl font-extrabold"
          >
            Jogos de Lógica
          </motion.h2>
          <hr className="mx-auto my-4 max-w-28 border-t-8 border-primary" />
          <motion.div
            className="grid gap-4 lg:grid-cols-3"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          >
            {games.map((game, index) => (
              <motion.article
                key={game.id}
                variants={item}
                transition={{
                  once: true
                }}
                className="relative flex flex-col overflow-hidden rounded-lg border transition-shadow hover:shadow-2xl"
              >
                <div className="relative h-[350px] w-full">
                  <Image
                    src={`https://os-oito-admin.spookyhouse.site${game.featured_image.url}`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw,"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-y-2 bg-white p-4 lg:p-6">
                  <div>
                    <strong className="line-clamp-2 font-extrabold md:text-xl">
                      {game.name}
                    </strong>
                  </div>
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold transition-all hover:underline"
                  >
                    Jogar
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
