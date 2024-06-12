import { MDXRemote } from 'next-mdx-remote'
import Image from "next/image"
import { ReactNode } from 'react'
import Footer from '../Home/Footer'
import { MdxPage } from '@/@types/types'
import { MDXComponents } from 'mdx/types'

type PageProps = {
  pageData: MdxPage
}

const titleGrid =
  'mb-8 md:m-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-8 md:col-span-full'
const columnGrid =
  'gap-y-4 grid md:grid-cols-4 md:gap-x-8 md:gap-y-8 md:col-span-full'

const components: MDXComponents = {
  p: (props: JSX.IntrinsicElements['p']) => (
    <p {...props} className="mb-4 last:mb-0" />
  ),
  Title: (props: JSX.IntrinsicElements['h1']) => (
    <h1 {...props} className="page-title">
      {props.children}
    </h1>
  ),
  Subtitle: (props: JSX.IntrinsicElements['p']) => (
    <p className="pb-1 mt-4 mb-4 md:m-0 times" {...props} />
  ),
  em: (props: JSX.IntrinsicElements['em']) => (
    <em className="not-italic times" {...props} />
  ),
  i: (props: JSX.IntrinsicElements['i']) => <i className="times" {...props} />,

  // COLUMNS
  Row: (props: JSX.IntrinsicElements['div'] | { title: boolean }) => {
    const { title, ...rest } = props
    return <div {...rest} className={title ? titleGrid : columnGrid} />
  },
  Col1: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className="md:col-span-1" />
  ),
  Col2: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className="md:col-span-2" />
  ),
  Col3: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className="md:col-span-3" />
  ),
  Col4: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className="md:col-span-4" />
  ),
  Image: (props: {
    alt: string
    path: string
    width: number
    height: number
    children: ReactNode
  }) => {
    const { alt, width, height, path, children } = props
    return (
      <figure className="my-4 md:my-0">
        <Image
          alt={alt}
          src={'/images' + path}
          height={height}
          width={width}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        {children && <figcaption className="mt-1">{children}</figcaption>}
      </figure>
    );
  },
  Link: (props: JSX.IntrinsicElements['a']) => (
    <a {...props} target="_blank" rel="noreferrer noopener">
      {props.children}
    </a>
  ),
}

export const Page = ({ pageData }: PageProps) => {
  return (
    <>
      <div className="m-8 mb-12">
        <div className={columnGrid}>
          <MDXRemote
            compiledSource={pageData.compiledSource}
            components={components}
            frontmatter={{}}
            scope={{}}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
