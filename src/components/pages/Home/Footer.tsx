import { MDXRemote } from 'next-mdx-remote'
import { useState } from 'react'
import { About } from 'src/@types/types'

type Props = {
  about: About
  handleToggleAbout: () => void
  aboutOpen: boolean
}

export default function Footer({
  about: { about, contact },
  aboutOpen,
  handleToggleAbout,
}: Props) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-10">
      <button
        onClick={handleToggleAbout}
        className="w-full h-5 block"
        style={{
          background:
            'linear-gradient(270deg, #58585B -51.04%, #F0F0F0 -23.96%, #929EA7 63.54%, #0B0C0F 93.75%)',
        }}
      />
      {aboutOpen && (
        <div className="grid grid-cols-3 my-4 mx-10">
          <MDXRemote compiledSource={about.compiledSource} />
          <div className="col-start-3">
            <MDXRemote compiledSource={contact.compiledSource} />
          </div>
        </div>
      )}
    </div>
  )
}
