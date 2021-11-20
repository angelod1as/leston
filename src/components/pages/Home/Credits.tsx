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
              <p className="union">
                {name}
                {/* {url ? (
                  <a href={url} title={name} className="union">
                    {name}
                  </a>
                ) : (
                  name
                )} */}
                <span className="times">
                  {roles.split(' ').map((role, idx) => {
                    return (
                      <span
                        className={`inline-block ${url ? 'underline' : ''}`}
                        key={credKey + 'role' + idx}
                      >
                        {role}
                      </span>
                    )
                  })}
                </span>
              </p>
              {gap && <br />}
            </Wrapper>
          )
        })}
      </>
    )
  }

  const { name, roles } = credits[0]
  return (
    <p className="union">
      {name}
      <span className="times">
        {roles.split(' ').map((role, idx) => {
          return (
            <span className="inline-block" key={'role' + idx}>
              {role}
            </span>
          )
        })}
      </span>
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
