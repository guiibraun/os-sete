import { api } from "@/lib/api"

interface Article {
  id: number
  title: string
  content: string
  featured_image: string
}

interface ArticleCollection {
  data: Article[]
}

class Articles {
  async getAll() {
    const response = await api<ArticleCollection>('articles')

    return response.data
  }
}

export default new Articles()