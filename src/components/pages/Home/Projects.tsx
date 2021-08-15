import { MDXRemote } from 'next-mdx-remote'
import { FrontMatter, MdxProjects } from 'src/@types/types'
import Image from 'next/image'

type Props = {
  projects: MdxProjects[]
}

export default function Projects({ projects }: Props) {
  return (
    <div className="my-16 mx-10">
      {projects.map(({ compiledSource, scope }, idx) => {
        return (
          <div key={'project' + idx}>
            <div className="relative">
              <Image
                src={'/images' + scope.image}
                alt=""
                width={1370}
                height={504}
                layout="responsive"
              />
            </div>
            <div className="grid grid-cols-4">
              <MDXRemote compiledSource={compiledSource} />
              <h2>{scope.title}</h2>
              <div>
                {scope.credits.map(({ name, role, gap }, credIdx) => (
                  <>
                    <p
                      key={'project' + idx + 'credit' + credIdx}
                      className="union"
                    >
                      {name}
                      <span className="times">{role}</span>
                    </p>
                    {gap && <br />}
                  </>
                ))}
              </div>
              <p>{scope.excerpt}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
