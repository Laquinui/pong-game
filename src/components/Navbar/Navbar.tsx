import { Cog6ToothIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useRunningGame } from '../../context/RunningGameContext'
import Menu from './Menu'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { gameRunning, setGameRunning } = useRunningGame()

  return (
    <div className="mb-10 flex w-full gap-4">
      <button
        type="button"
        aria-label="Open settings"
        className="btn"
        onClick={() => setGameRunning((prev) => !prev)}
      >
        {gameRunning ? (
          <PauseIcon className="size-6" />
        ) : (
          <PlayIcon className="size-6" />
        )}
      </button>

      <button
        type="button"
        aria-label="Open settings"
        className="btn ms-auto"
        onClick={() => setMenuOpen(true)}
      >
        <Cog6ToothIcon className="size-6" />
      </button>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default Navbar
