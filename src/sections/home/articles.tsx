import Loading from '@/app/artigos/[slug]/loading'
import articleService from '@/services/article-service'
import * as motion from 'framer-motion/client'
import Image from 'next/image'
import Link from 'next/link'

export async function Articles() {
  const articles = await articleService.getAll()

  return (
    <>
      <section id="conteudo" className="container space-y-8 px-3 py-12">
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
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="relative flex flex-col overflow-hidden rounded-lg border transition-shadow hover:shadow-2xl"
            >
              <div className="relative h-[350px] w-full">
                <Image
                  src={`https://os-oito-admin.spookyhouse.site${article.featured_image.url}`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw,"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-y-2 p-4 lg:p-6">
                <div>
                  <strong className="line-clamp-2 font-extrabold md:text-xl">
                    {article.title}
                  </strong>
                  <small>Autor: {article.autore.name}</small>
                </div>
                <Link
                  href={`/artigos/${article.slug}`}
                  className="font-bold transition-all hover:underline"
                >
                  Leia mais
                </Link>
                {article.autore.avatar?.url && (
                  <Image
                    src={`https://os-oito-admin.spookyhouse.site${article.autore.avatar.url}`}
                    alt=""
                    width={80}
                    height={80}
                    quality={100}
                    className="absolute bottom-0 right-0"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
