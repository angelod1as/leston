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

  return <button onClick={handleClick}>Back to top</button>
}
