import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// API
export type Credits = {
  name: string
  roles: string
  gap?: boolean
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
  open: boolean
  extraInfo: string
  images: Images[]
  credits: Credits[]
}

export type FileData = {
  data: FrontMatter
  content: string
}

export type MdxProjects = MDXRemoteSerializeResult<FrontMatter>

export type About = {
  about: MDXRemoteSerializeResult<FrontMatter>
  contact: MDXRemoteSerializeResult<FrontMatter>
}
