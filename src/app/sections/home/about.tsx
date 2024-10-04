import * as motion from 'framer-motion/client'

export function About() {
  return (
    <section className="overflow-hidden bg-zinc-100 py-12 2xl:py-20">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-3">
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
          Sobre nós
        </motion.h2>
        <hr className="mx-auto my-4 max-w-28 border-t-8 border-primary" />
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
            Nós somos o grupo "Os7", um coletivo de acadêmicos da Universidade
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
            poderosa que pode transformar vidas e abrir novas oportunidades. Por
            isso, nos dedicamos a fornecer aulas, workshops e atividades
            práticas que tornam o aprendizado de programação acessível a todos,
            independentemente da idade ou nível de experiência.
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
            acolhedor e estimular a troca de ideias. Juntos, queremos construir
            uma comunidade mais conectada e preparada para os desafios do futuro
            digital.
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
    </section>
  )
}
