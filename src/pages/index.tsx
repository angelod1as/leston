import { serialize } from 'next-mdx-remote/serialize'
import { getProjects, getAbout } from '@lib/api'
import Home from '@components/pages/Home'
import { About, MdxProjects } from 'src/@types/types'
import { useLocaleContext } from '@components/LocaleContext/LocaleContext'

type ContentProps = {
  projects: MdxProjects[]
  about: About
}

type Props = {
  'pt-BR': ContentProps
  'en-US': ContentProps
}

const Index = (props: Props) => {
  const { locale } = useLocaleContext()
  const { about, projects } = props[locale]
  return <Home projects={projects} about={about} />
}

export default Index

export async function getStaticProps() {
  const getLocaleProjects = async (locale: string) => {
    const projectsData = getProjects(locale, [
      'content',
      'excerpt',
      'images',
      'credits',
    ])

    return await Promise.all(
      projectsData.map(
        async ({ content, data }) => await serialize(content, { scope: data })
      )
    )
  }

  const getLocaleAbouts = async (locale: string) => {
    const aboutData = getAbout(locale, ['content'])

    const [about, contact] = await Promise.all(
      aboutData.map(
        async ({ content, data }) => await serialize(content, { scope: data })
      )
    )

    return [about, contact]
  }

  const props = {
    'pt-BR': {
      projects: await getLocaleProjects('pt'),
      about: await getLocaleAbouts('pt'),
    },
    'en-US': {
      projects: await getLocaleProjects('en'),
      about: await getLocaleAbouts('en'),
    },
  }

  return { props }
}