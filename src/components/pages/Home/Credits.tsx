import { Fragment } from 'react'
import { Credits as CreditsType } from 'src/@types/types'

type CreditsProps = {
  credits: CreditsType[]
  isOpen: boolean
}

export function Credits({ credits, isOpen }: CreditsProps) {
  if (isOpen) {
    return (
      <>
        {credits.map(({ name, roles, gap, url }, idx) => {
          const credKey = 'credit' + idx
          return (
            <Wrapper key={credKey} url={url}>
              <p className={`union ${url ? 'url' : ''}`}>
                {name} <span className="times">{roles}</span>
              </p>
              {gap && <br />}
            </Wrapper>
          )
        })}
      </>
    )
  }

  const { name } = credits[0]
  return <p className="union">{name}</p>
}

type WrapperProps = {
  children: React.ReactNode
  url?: string
}

const Wrapper = ({ children, url }: WrapperProps) => {
  if (url) {
    return <a href={url}>{children}</a>
  }
  return <Fragment>{children}</Fragment>
}
