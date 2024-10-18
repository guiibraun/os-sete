import { File } from "@/@types/file"
import { api } from "@/lib/api"
import { BlocksContent } from "@strapi/blocks-react-renderer"
import { notFound } from "next/navigation"

interface Author {
  id: number
  name: string
  avatar: File
}

interface AuthorCollection {
  data: Author[]
}

interface AuthorOne {
  data: Author
}

class Author {

  async findOne(documentId: string) {
    const response = await api<AuthorOne>(`authors/${documentId}?populate=avatar`, {
      next: {
        revalidate: 604800 // 
      }
    })


    if (!response.data) {
      return notFound()
    }

    return response.data
  }
}

export default new Author()