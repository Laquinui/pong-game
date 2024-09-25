import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Menu from './Menu'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="mb-10 flex justify-end">
      <div className="btn-open-menu" onClick={() => setMenuOpen(true)}>
        <Cog6ToothIcon className="size-6" />
        <div
          className={`absolute right-0 top-0 rounded-full bg-purple-900 transition ${menuOpen ? 'h-[200vh]' : 'w-[100px]'}`}
        ></div>
      </div>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default Navbar
