import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// API
export type Credits = {
  name: string
  role: string
  gap?: boolean
}

export type FrontMatter = {
  title: string
  excerpt: string
  image: string
  credits: Credits[]
}

export type FileData = {
  data: FrontMatter
  content: string
}

export type MdxProjects = MDXRemoteSerializeResult<FrontMatter>
