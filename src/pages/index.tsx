import { serialize } from 'next-mdx-remote/serialize'
import { getProjects, getAbout } from '@lib/api'
import Home from '@components/pages/Home'
import { About, MdxProjects } from 'src/@types/types'

type Props = {
  projects: MdxProjects[]
  about: About
}

const Index = ({ projects, about }: Props) => {
  return <Home projects={projects} about={about} />
}

export default Index

export async function getStaticProps() {
  const projectsData = getProjects(['content', 'excerpt', 'image', 'credits'])

  const projects = await Promise.all(
    projectsData.map(
      async ({ content, data }) => await serialize(content, { scope: data })
    )
  )

  const aboutData = getAbout(['content'])

  const [about, contact] = await Promise.all(
    aboutData.map(
      async ({ content, data }) => await serialize(content, { scope: data })
    )
  )

  return { props: { projects, about: { about, contact } } }
}
