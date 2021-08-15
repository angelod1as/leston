import { MDXRemoteSerializeResult } from 'next-mdx-remote'

// API
export type Credits = {
  name: string
  roles: string
  gap?: boolean
}

type Image = {
  path: string
  width: number
  height: number
}

export type FrontMatter = {
  title: string
  excerpt: string
  open: boolean
  extraInfo: string
  image: Image
  credits: Credits[]
}

export type FileData = {
  data: FrontMatter
  content: string
}

export type MdxProjects = MDXRemoteSerializeResult<FrontMatter>
