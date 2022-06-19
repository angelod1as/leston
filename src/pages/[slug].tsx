import { getPages } from '@lib/api'
import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps } from 'next'

const Page = () => {
  return <div>Page</div>
}

export default Page

export async function getStaticPaths() {
  const projectsData = getPages()

  const paths = projectsData.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const getPageData = async () => {
    const projectsData = getPages(['content'])

    return await Promise.all(
      projectsData.map(async ({ content, data }) => {
        return await serialize(content, {
          scope: {
            ...data,
          },
        })
      })
    )
  }

  const props = {
    pageData: await getPageData(),
  }

  return { props }
}
