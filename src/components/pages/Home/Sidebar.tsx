import ToTop from './ToTop'
import LangSwitcher from '@components/LangSwitcher'
import StoneChange from '@components/StoneChange'

type Props = {
  changeImage: () => void
}

export default function Sidebar({ changeImage }: Props) {
  return (
    <div className="fixed top-0 bottom-0 flex justify-center w-5 h-full right-[10px]">
      <div className="z-50 flex text-right -rotate-90 gap-x-8">
        <ToTop />
        <LangSwitcher />
        <StoneChange changeImage={changeImage} />
      </div>
    </div>
  )
}
