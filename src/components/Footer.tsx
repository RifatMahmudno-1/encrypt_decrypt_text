import HeartIcon from '@/Icons/HeartIcon'

function Comp() {
  return (
    <footer className="bg-cyan-300">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center gap-1 p-2">
        Made with
        <span className="text-rose-500">
          <HeartIcon />
        </span>
        by
        <strong className="font-semibold">Rifat Mahmud</strong>
      </div>
    </footer>
  )
}

export default Comp
