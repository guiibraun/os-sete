export interface File {
  id: number
  formats: {
    [key: 'thumbnail' | 'small' | 'medium' | 'large']: {
      name: string
      url: string
    }
  }
  url: string

}