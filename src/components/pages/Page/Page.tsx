import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import { ReactNode } from 'react'
import { MdxPage } from 'src/@types/types'

type PageProps = {
  pageData: MdxPage
}

const columnGrid =
  'mb-8 md:m-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-8 md:col-span-full'

const components: Record<string, ReactNode> = {
  p: (props: JSX.IntrinsicElements['p']) => <p {...props} className="mb-5" />,
  Title: (props: JSX.IntrinsicElements['h1']) => (
    <h1 {...props}>{props.children}</h1>
  ),
  Subtitle: (props: JSX.IntrinsicElements['p']) => <p {...props} />,

  // COLUMNS
  Row: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className={columnGrid} />
  ),
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
      <figure>
        <Image alt={alt} src={'/images' + path} height={height} width={width} />
        <figcaption>{children}</figcaption>
      </figure>
    )
  },
  Link: (props: JSX.IntrinsicElements['a']) => (
    <a {...props} target="_blank" rel="noreferrer noopener">
      {props.children}
    </a>
  ),
}

export const Page = ({ pageData }: PageProps) => {
  return (
    <div className="m-8 mb-12">
      <div className={columnGrid}>
        <MDXRemote
          compiledSource={pageData.compiledSource}
          components={components}
        />
      </div>
    </div>
  )
}
