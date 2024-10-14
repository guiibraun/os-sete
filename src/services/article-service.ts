import { File } from "@/@types/file"
import { api } from "@/lib/api"
import { BlocksContent } from "@strapi/blocks-react-renderer"
import { notFound } from "next/navigation"

interface Article {
  id: number
  title: string
  slug: string
  content: BlocksContent
  featured_image: File
  createdAt: string
  autore: {
    name: string
    avatar: File
  }
}

interface ArticleCollection {
  data: Article[]
}

class Articles {
  async getAll() {
    const response = await api<ArticleCollection>('articles?populate=*')

    return response.data
  }

  async findOne(slug: string) {
    const response = await api<ArticleCollection>(`articles?filters[slug][$eq]=${slug}&populate=autore.avatar&populate=featured_image`)

    if (response.data.length === 0) {
      return notFound()
    }

    return response.data[0]
  }
}

export default new Articles()