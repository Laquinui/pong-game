import { useState } from 'react'
import './App.css'
import mainSongTheme from './assets/musics/pong_main_theme.wav'
import Header from './components/Header/Header'
import PongBoard from './components/PongBoard/PongBoard'
import { PointsProvider } from './context/PointsContext'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const music = new Audio(mainSongTheme)
  music.loop = true
  music.volume = 0.3

  return (
    <PointsProvider>
      <div className="flex h-full flex-col gap-4">
        <Header />
        <div className="flex justify-center">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => {
              if (isPlaying) {
                music.pause()
                setIsPlaying(false)
              } else {
                music.play()
                setIsPlaying(true)
              }
            }}
          >
            {isPlaying ? 'Pause song' : 'Play song'}
          </button>
        </div>
        <PongBoard height={500} width={600} />
      </div>
    </PointsProvider>
  )
}

export default App
