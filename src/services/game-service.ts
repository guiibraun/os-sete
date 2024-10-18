import { File } from "@/@types/file"
import { api } from "@/lib/api"
import { BlocksContent } from "@strapi/blocks-react-renderer"
import { notFound } from "next/navigation"

interface Game {
  id: number
  name: string
  link: string
  featured_image: File
}

interface GameCollection {
  data: Game[]
}

class GamesService {
  async getAll() {
    const response = await api<GameCollection>('games?populate=featured_image', {
      next: {
        revalidate: 3600 // 1 hour
      }
    })

    return response.data
  }


}

export default new GamesService()