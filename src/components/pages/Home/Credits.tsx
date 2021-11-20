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
            <Fragment key={credKey}>
              <p className="union">
                {url ? (
                  <a href={url} title={name} className="union">
                    {name}
                  </a>
                ) : (
                  name
                )}
                <span className="times">
                  {roles.split(' ').map((role, idx) => {
                    return (
                      <span
                        className="inline-block"
                        key={credKey + 'role' + idx}
                      >
                        {role}
                      </span>
                    )
                  })}
                </span>
              </p>
              {gap && <br />}
            </Fragment>
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
