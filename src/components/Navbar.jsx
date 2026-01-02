import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-lg tracking-wide font-light">
          Logo
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-10 text-sm tracking-wide">
          <Link to="/" className="hover:opacity-70">Home</Link>
          <Link to="/about" className="hover:opacity-70">About</Link>
          <Link to="/contact" className="hover:opacity-70">Contact</Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden space-y-1"
          onClick={() => setOpen(true)}
        >
          <span className="block w-6 h-[2px] bg-black"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-[9999] flex flex-col items-center justify-center space-y-8 text-white text-lg">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  )
}
