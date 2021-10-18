import ToTop from './ToTop'
import LangSwitcher from '@components/LangSwitcher'
import StoneChange from '@components/StoneChange'

type Props = {
  changeImage: () => void
}

export default function Sidebar({ changeImage }: Props) {
  return (
    <div className="fixed z-40 flex -rotate-90 gap-x-8 -right-20 bottom-40">
      <ToTop />
      <LangSwitcher />
      <StoneChange changeImage={changeImage} />
    </div>
  )
}
