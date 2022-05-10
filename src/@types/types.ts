import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// API
export type Credits = {
  name: string
  roles: string
  gap?: boolean
  url?: string
  prefix?: string
}

export type Images = {
  path?: string
  width?: number
  height?: number
  alt: string
  video?: string
}

export type FrontMatter = {
  title: string
  excerpt: string
  highlight: boolean
  extraInfo: string
  images: Images[]
  credits: Credits[]
  order: number
}

export type FileData = {
  data: FrontMatter
  content: string
}

export type MdxProject = MDXRemoteSerializeResult<FrontMatter>

export type About = {
  about: MDXRemoteSerializeResult<FrontMatter>
  about2: MDXRemoteSerializeResult<FrontMatter>
  contact: MDXRemoteSerializeResult<FrontMatter>
}

export type Locale = 'pt-BR' | 'en-US'
