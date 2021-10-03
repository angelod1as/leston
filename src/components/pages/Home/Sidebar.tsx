import ToTop from './ToTop'
import LangSwitcher from '@components/LangSwitcher'

export default function Sidebar() {
  return (
    <div className="fixed z-0 flex -rotate-90 gap-x-8 -right-20 bottom-28">
      <ToTop />
      <LangSwitcher />
    </div>
  )
}
