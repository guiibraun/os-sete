import BlockRendererClient from '@/components/block-renderer-client'
import ArticleService from '@/services/article-service'
import Image from 'next/image'
import Loading from './loading'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await ArticleService.getAll()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default async function Page({ params }: PageProps) {
  const { slug } = params

  const article = await ArticleService.findOne(slug)

  return (
    <>
      <main className="min-h-dvh">
        <section className="min-h-80 bg-zinc-100 py-6">
          <div className="container flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h1 className="text-pretty text-xl font-bold 2xl:text-4xl">
                {article.title}
              </h1>
              <div className="flex items-center gap-x-1">
                Autor: {article.autore?.name}{' '}
              </div>
            </div>
            <div className="relative h-80 w-full max-w-96">
              {article.autore && article.autore.avatar && (
                <Image
                  src={`https://os-oito-admin.spookyhouse.site${article.autore?.avatar.url}`}
                  alt=""
                  width={80}
                  height={80}
                  quality={100}
                  className="absolute bottom-0 right-0 z-10 md:-left-11 md:top-1/2 md:-translate-y-1/2"
                />
              )}
              <Image
                src={`https://os-oito-admin.spookyhouse.site${article.featured_image.url}`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        {article.video && (
          <>
            <section className="container my-8 min-h-[350px] lg:min-h-[550px]">
              <div
                dangerouslySetInnerHTML={{ __html: article.video }}
                className="h-[380px] *:w-full md:*:h-[550px]"
              ></div>
            </section>
          </>
        )}
        <section className="container my-8">
          <div className="prose prose-base max-w-none">
            <BlockRendererClient content={article.content} />
          </div>
        </section>
      </main>
    </>
  )
}
