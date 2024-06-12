import { Credits as CreditsType } from '@/@types/types'
import { Fragment } from 'react'

type CreditsProps = {
  credits: CreditsType[]
  isOpen: boolean
}

export function Credits({ credits, isOpen }: CreditsProps) {
  if (isOpen) {
    return (
      <>
        {credits.map(({ name, roles, gap, url, prefix }, idx) => {
          const credKey = 'credit' + idx
          return (
            <Fragment key={idx}>
              <p className={`union ${url ? 'url' : ''}`}>
                {prefix && <span className="times">{prefix} </span>}
                <Wrapper key={credKey} url={url}>
                  {name}
                </Wrapper>{' '}
                <span className="times">{roles}</span>
              </p>
              {gap && <br />}
            </Fragment>
          )
        })}
      </>
    )
  }

  const { name, prefix } = credits[0]
  return (
    <p className="union">
      {prefix && <span className="times">{prefix} </span>}
      {name}
    </p>
  )
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
