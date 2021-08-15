export default function ToTop() {
  const handleClick = () => {
    const archive = document.getElementById('top')
    if (archive) {
      archive.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
      })
    }
  }

  return (
    <button
      className="fixed -right-7 bottom-20 -rotate-90 z-0"
      onClick={handleClick}
    >
      Back to top
    </button>
  )
}
