import { NavLink } from 'react-router-dom'

function Comp() {
  return (
    <nav className="sticky top-0 z-40 bg-cyan-300 shadow">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-2 p-2">
        <p className="text-lg font-semibold">Encrypt and Decrypt Text</p>
        <div className="flex items-center gap-2">
          <NavLink
            to={'/'}
            className="rounded bg-cyan-400 px-2 py-0.5 shadow-sm transition-shadow hover:shadow-md">
            Home
          </NavLink>
          <NavLink
            to={'/aes'}
            className="rounded bg-cyan-400 px-2 py-0.5 shadow-sm transition-shadow hover:shadow-md">
            AES
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Comp
