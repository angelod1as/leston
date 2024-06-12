import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { MdxPage, PageData } from '@/@types/types'
import { Page } from '@/components/pages/Page'
import { getPages } from '@/lib/api'

type SlugPageProps = {
  pageData: MdxPage
}

const SlugPage = ({ pageData }: SlugPageProps) => {
  return (
    <>
      <Head>
        {pageData.scope?.title && (
          <title key="title">{pageData.scope.title}</title>
        )}
      </Head>
      <Page pageData={pageData} />
    </>
  )
}

export default SlugPage

export async function getStaticPaths() {
  const projectsData = getPages()

  const paths = projectsData.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const getPageData = async () => {
    const projectsData: PageData[] = getPages(['content'])

    const pages = (await Promise.all(
      projectsData.map(async ({ content, data, slug }) => {
        return await serialize(content, {
          scope: {
            ...data,
            slug,
          },
        })
      })
    )) as MdxPage[]

    return pages
  }

  const allPages = await getPageData()
  const pageData = allPages.find(page => page.scope?.slug === params?.slug)

  const props = {
    pageData,
  }

  return { props }
}
