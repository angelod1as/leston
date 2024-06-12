import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  p: (props: JSX.IntrinsicElements['p']) => <p {...props} className="mb-5" />,
}

type MDXProps = {
  compiledSource: MDXRemoteProps['compiledSource']
}

export const MDX = ({ compiledSource }: MDXProps) => {
  return (
    <MDXRemote
      compiledSource={compiledSource}
      components={components}
      scope={{}}
      frontmatter={{}}
    />
  )
}
