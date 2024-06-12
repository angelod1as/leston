import StoneChange from '@/components/StoneChange'
import ToTop from './ToTop'

type Props = {
  changeImage: () => void
}

export default function Sidebar({ changeImage }: Props) {
  return (
    <div className="fixed top-0 bottom-0 flex justify-center w-5 h-full right-[10px]">
      <div className="z-50 flex text-right -rotate-90 gap-x-8">
        <ToTop />
        <StoneChange changeImage={changeImage} />
      </div>
    </div>
  )
}
