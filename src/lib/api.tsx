import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { FileData, FrontMatter } from 'src/@types/types'

const contentDir = join(process.cwd(), 'src', 'content')
const projectsDir = join(contentDir, 'projects')
const aboutDir = join(contentDir, 'about')

type Fields = keyof FrontMatter | 'content'

const getContent = (
  slug: string,
  fields: Array<Fields> = [],
  dir: string
): FileData => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(dir, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents) as unknown as FileData

  const items: FileData = {
    data: data,
    content: fields.includes('content') ? content : '',
  }

  return items
}

export function getProjects(fields: Fields[] = []) {
  const slugs = fs.readdirSync(projectsDir)
  const projects = slugs.map(slug => getContent(slug, fields, projectsDir))
  return projects
}

export function getAbout(fields: Fields[] = []) {
  const slugs = fs.readdirSync(aboutDir)
  const [about, contact] = slugs.map(slug => getContent(slug, fields, aboutDir))
  return [about, contact]
}
