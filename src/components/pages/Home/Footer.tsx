export default function Footer() {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-[100] max-h-[50%] bg-white overflow-y-scroll`}
    >
      <div
        className={`w-full h-5`}
        style={{
          background:
            'linear-gradient(270deg, #58585B -51.04%, #F0F0F0 -23.96%, #929EA7 63.54%, #0B0C0F 93.75%)',
        }}
      ></div>
    </div>
  )
}
