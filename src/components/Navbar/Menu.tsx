import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import mainSongTheme from '../../assets/musics/pong_main_theme.wav'

function Menu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [music] = useState(new Audio(mainSongTheme))
  music.loop = true

  const handlePlay = () => {
    setIsPlaying((prevIsPlaying) => {
      if (prevIsPlaying) music.pause()
      else music.play()

      return !prevIsPlaying
    })
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value))
  }

  useEffect(() => {
    music.volume = volume
  }, [volume, music])

  return (
    <div className={`menu ${menuOpen ? 'show' : 'hide'}`}>
      <div className="relative mx-auto flex w-[600px] flex-col gap-8 py-8 text-start">
        <div
          className="mb-8 ms-auto cursor-pointer rounded-full p-2 duration-300 hover:bg-[#ffffff20]"
          onClick={() => setMenuOpen(false)}
        >
          <XMarkIcon className="size-6" />
        </div>

        <h2>Settings</h2>

        <ColItem title="Music">
          <audio src={mainSongTheme} />
          <div
            className="flex w-fit cursor-pointer items-center gap-2 rounded-full px-4 py-2 duration-300 hover:bg-[#ffffff20]"
            onClick={handlePlay}
          >
            {isPlaying ? (
              <>
                <SpeakerXMarkIcon className="size-6" />
                <span>Mute music</span>
              </>
            ) : (
              <>
                <SpeakerWaveIcon className="size-6" />
                <span>Pay music</span>
              </>
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
            />
            <span>{(volume * 100).toFixed(0)}%</span>
          </div>
        </ColItem>
      </div>
    </div>
  )
}

const ColItem = ({
  title,
  children,
}: {
  title: string
  children: JSX.Element[] | JSX.Element
}) => {
  return (
    <div className="flex w-1/2 flex-col justify-start gap-4 text-start">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Menu
