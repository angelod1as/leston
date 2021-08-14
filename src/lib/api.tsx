import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { FileData, FrontMatter } from 'src/@types/types'

const contentDir = join(process.cwd(), 'src', 'content')
const projectsDir = join(contentDir, 'projects')

function getProjectsSlugs() {
  return fs.readdirSync(projectsDir)
}

type Fields = keyof FrontMatter | 'content'

const getPostBySlug = (slug: string, fields: Array<Fields> = []): FileData => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(projectsDir, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents) as unknown as FileData

  const items: FileData = {
    data: data,
    content: fields.includes('content') ? content : '',
  }

  return items
}

export function getProjects(fields: Fields[] = []) {
  const slugs = getProjectsSlugs()
  const projects = slugs.map(slug => getPostBySlug(slug, fields))
  return projects
}
