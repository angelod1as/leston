import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import React, { ReactNode } from 'react'
import { MdxPage } from 'src/@types/types'

type PageProps = {
  pageData: MdxPage
}

const columnGrid = 'grid grid-cols-4 gap-x-8 gap-y-8 col-span-full'

const components: Record<string, ReactNode> = {
  p: (props: JSX.IntrinsicElements['p']) => <p {...props} className="mb-5" />,
  Title: (props: JSX.IntrinsicElements['h1']) => <h1 {...props} />,
  Subtitle: (props: JSX.IntrinsicElements['p']) => <p {...props} />,
  Row: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className={columnGrid} />
  ),
  Col1: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className="col-span-1" />
  ),
  Col2: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className="col-span-2" />
  ),
  Col3: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className="col-span-3" />
  ),
  Col4: (props: JSX.IntrinsicElements['div']) => (
    <div {...props} className="col-span-4" />
  ),
  Image: (props: { src: string; alt: string; children: ReactNode }) => {
    return (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.children}</figcaption>
      </figure>
    )
  },
  Link: (props: JSX.IntrinsicElements['a']) => (
    <a {...props} target="_blank" rel="noreferrer noopener" />
  ),
}

export const Page = ({ pageData }: PageProps) => {
  return (
    <div className={columnGrid}>
      <MDXRemote
        compiledSource={pageData.compiledSource}
        components={components}
      />
    </div>
  )
}
