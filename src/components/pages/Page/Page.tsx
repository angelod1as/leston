import React from 'react'
import { MdxPage } from 'src/@types/types'

type PageProps = {
  pageData: MdxPage
}

export const Page = ({ pageData }: PageProps) => {
  return <div>{pageData.scope?.title}</div>
}
