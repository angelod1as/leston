import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getProjects } from '@lib/api'
import Home from '@components/pages/Home'

type Props = {
  projects: MDXRemoteSerializeResult[]
}

const Index = ({ projects }: Props) => {
  return <Home />
}

export default Index

export async function getStaticProps() {
  const projectsData = getProjects(['content'])

  const projects = await Promise.all(
    projectsData.map(
      async ({ content, data }) => await serialize(content, { scope: data })
    )
  )

  return { props: { projects } }
}
