type Props = {
  changeImage: () => void
}

export default function index({ changeImage }: Props) {
  return (
    <button onClick={changeImage} className="times">
      Stone
    </button>
  )
}
