import * as motion from 'framer-motion/client'
import Image from 'next/image'
import logo from '@/assets/roxo_extensa.png'
import authorService from '@/services/author-service'

export async function About() {
  const author = await authorService.findOne('g3vas99zaxaechsxy82gt12c')

  return (
    <section
      id="sobre-nos"
      className="overflow-hidden bg-zinc-100 py-12 2xl:py-20"
    >
      <div className="container grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="relative order-2 self-center lg:order-1">
          <Image
            src={logo}
            alt="Logo"
            className="w-full max-w-96 lg:max-w-full"
          />
          <Image
            src={`https://os-oito-admin.spookyhouse.site${author.avatar.url}`}
            alt={`Avatar" de ${author.name}`}
            width={100}
            height={100}
            quality={100}
            className="absolute right-0 top-0"
          />
        </div>
        <div className="space-y-8 px-3">
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
            className="text-4xl font-extrabold"
          >
            Sobre nós
          </motion.h2>
          <hr className="my-4 max-w-28 border-t-8 border-primary" />
          <div className="space-y-4">
            <motion.p
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
                duration: 0.8,
                delay: 0.5
              }}
            >
              Nós somos o grupo "Os8", um coletivo de acadêmicos da Universidade
              Católica de Santa Catarina, localizado em Jaraguá do Sul. Nosso
              propósito é inspirar e capacitar a comunidade ao redor por meio da
              educação em programação.
            </motion.p>
            <motion.p
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
                duration: 0.8,
                delay: 0.8
              }}
            >
              Acreditamos que o conhecimento em tecnologia é uma ferramenta
              poderosa que pode transformar vidas e abrir novas oportunidades.
              Por isso, nos dedicamos a fornecer aulas, workshops e atividades
              práticas que tornam o aprendizado de programação acessível a
              todos, independentemente da idade ou nível de experiência.
            </motion.p>
            <motion.p
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
                duration: 0.8,
                delay: 1
              }}
            >
              Nosso grupo é formado por estudantes apaixonados, prontos para
              compartilhar suas habilidades e experiências, criar um ambiente
              acolhedor e estimular a troca de ideias. Juntos, queremos
              construir uma comunidade mais conectada e preparada para os
              desafios do futuro digital.
            </motion.p>
            <motion.p
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
                duration: 0.8,
                delay: 1.1
              }}
            >
              Venha fazer parte da nossa jornada e aprenda a programar conosco!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
