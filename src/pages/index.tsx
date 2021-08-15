import { serialize } from 'next-mdx-remote/serialize'
import { getProjects } from '@lib/api'
import Home from '@components/pages/Home'
import { MdxProjects } from 'src/@types/types'

type Props = {
  projects: MdxProjects[]
}

const Index = ({ projects }: Props) => {
  return <Home projects={projects} />
}

export default Index

export async function getStaticProps() {
  const projectsData = getProjects(['content', 'excerpt', 'image', 'credits'])

  const projects = await Promise.all(
    projectsData.map(
      async ({ content, data }) => await serialize(content, { scope: data })
    )
  )

  return { props: { projects } }
}
