import { MDXRemote } from 'next-mdx-remote'
import { ReactNode } from 'react'

type MDXProps = {
  compiledSource: string
}

const components: Record<string, ReactNode> = {
  p: (props: JSX.IntrinsicElements['p']) => <p {...props} className="mb-5" />,
}

export const MDX = ({ compiledSource }: MDXProps) => {
  return <MDXRemote compiledSource={compiledSource} components={components} />
}
