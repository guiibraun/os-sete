import articleService from '@/services/article-service'
import * as motion from 'framer-motion/client'
import Image from 'next/image'
import Link from 'next/link'

export async function Articles() {
  const articles = await articleService.getAll()

  return (
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
            className="flex min-h-36 overflow-hidden rounded-lg transition-shadow hover:shadow-2xl md:min-h-52"
          >
            <div className="flex flex-1 flex-col justify-between gap-y-8 bg-yellow-600 p-4 lg:p-8">
              <strong className="line-clamp-2 text-lg font-extrabold text-white md:text-2xl">
                {article.title}
              </strong>
              <Link
                href={`/artigos/${article.slug}`}
                className="font-bold text-white transition-all hover:underline"
              >
                Leia mais
              </Link>
            </div>
            <div className="relative w-full max-w-32 bg-blue-500 md:max-w-44">
              <Image
                src={`https://os-oito-admin.spookyhouse.site${article.featured_image.url}`}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw,"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
