import { serialize } from 'next-mdx-remote/serialize'
import { getProjects, getAbout } from '@lib/api'
import Home from '@components/pages/Home'
import { About, MdxProject } from 'src/@types/types'
import { useLocaleContext } from '@components/LocaleContext/LocaleContext'
import useWindowDimensions from '@lib/useWindowDimensions'
import { GetStaticProps } from 'next'

type ContentProps = {
  projects: MdxProject[]
  about: About
}

type Props = {
  'pt-BR': ContentProps
  'en-US': ContentProps
}

const Index = (props: Props) => {
  const { locale } = useLocaleContext()
  const { about, projects } = props[locale]

  const { height, scroll } = useWindowDimensions()
  const dimension = scroll / 1 / height

  return (
    <div className="bg-black">
      <div
        style={{
          backgroundColor: `rgba(240,240,240,${dimension || 0})`,
        }}
      >
        <Home projects={projects} about={about} />
      </div>
    </div>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const getLocaleProjects = async (locale: string) => {
    const projectsData = getProjects(locale, [
      'content',
      'excerpt',
      'images',
      'credits',
    ])

    return await Promise.all(
      projectsData.map(async ({ content, data }) => {
        const parsedData = {
          ...data,
          excerpt: (await serialize(data.excerpt)).compiledSource,
          extraInfo: (await serialize(data.extraInfo)).compiledSource,
        }

        return await serialize(content, { scope: parsedData })
      })
    )
  }

  const getLocaleAbouts = async (locale: string) => {
    const aboutData = getAbout(locale, ['content'])

    const [about, contact] = await Promise.all(
      aboutData.map(
        async ({ content, data }) => await serialize(content, { scope: data })
      )
    )

    return { about, contact }
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
