import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Menu from './Menu'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="mb-10 flex justify-end">
      <button
        type="button"
        aria-label="Open settings"
        className="btn"
        onClick={() => setMenuOpen(true)}
      >
        <Cog6ToothIcon className="size-6" />
      </button>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default Navbar
