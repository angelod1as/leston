import ToTop from './ToTop'
import LangSwitcher from '@components/LangSwitcher'
import StoneChange from '@components/StoneChange'

type Props = {
  changeImage: () => void
}

//

export default function Sidebar({ changeImage }: Props) {
  return (
    <div className="fixed flex text-right -rotate-90 gap-x-8 -right-24 md:-right-28 bottom-44">
      <ToTop />
      <LangSwitcher />
      <StoneChange changeImage={changeImage} />
    </div>
  )
}
