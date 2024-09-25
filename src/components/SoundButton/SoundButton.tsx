import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import mainSongTheme from '../../assets/musics/pong_main_theme.wav'

function SoundButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [music] = useState(new Audio(mainSongTheme))
  music.loop = true
  music.volume = 0.3

  const handlePlay = () => {
    setIsPlaying((prevIsPlaying) => {
      if (prevIsPlaying) music.pause()
      else music.play()

      return !prevIsPlaying
    })
  }

  return (
    <div className="mb-10 flex justify-end">
      <div
        className="cursor-pointer rounded-full p-2 duration-300 hover:bg-[#ffffff20]"
        onClick={handlePlay}
      >
        {isPlaying ? (
          <SpeakerWaveIcon className="size-6" />
        ) : (
          <SpeakerXMarkIcon className="size-6" />
        )}
      </div>
    </div>
  )
}

export default SoundButton
