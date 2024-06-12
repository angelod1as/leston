import { FileData, FrontMatter, PageData } from '@/@types/types'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const contentDir = join(process.cwd(), 'src', 'content')
// const localesDir = [join(contentDir, 'en'), join(contentDir, 'pt')]

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

export function getProjects(locale: string, fields: Fields[] = []) {
  const dir = join(contentDir, locale, 'projects')
  const slugs = fs.readdirSync(dir)
  const projects = slugs
    .filter(slug => !slug.startsWith('.'))
    .map(slug => getContent(slug, fields, dir))
  return projects
}

export function getAbout(locale: string, fields: Fields[] = []) {
  const dir = join(contentDir, locale, 'about')
  const slugs = fs.readdirSync(dir)
  const [about, about2, contact] = slugs.map(slug =>
    getContent(slug, fields, dir)
  )
  return [about, about2, contact]
}

export function getStoneNumber() {
  const dir = join(process.cwd(), 'public', 'images', 'stone')
  const number = fs
    .readdirSync(dir)
    .filter(item => item.includes('.png')).length
  return number
}

export function getPages(fields: Fields[] = []): PageData[] {
  const dir = join(contentDir, 'pages')
  const slugs = fs.readdirSync(dir)
  const projects = slugs
    .filter(slug => !slug.startsWith('.'))
    .map(slug => ({
      ...getContent(slug, fields, dir),
      slug: slug.replace('.mdx', ''),
    }))
  return projects
}
