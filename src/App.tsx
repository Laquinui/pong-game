import './App.css'
import PongBoard from './components/PongBoard/PongBoard'
import usePoints from './utils/usePoints'

function App() {
  const { leftPoints, rightPoints } = usePoints()

  // useEffect(() => {
  //   const startGame = (event: KeyboardEvent) => {
  //     if (event.key === ' ') setGameRunning(true)
  //   }
  //   window.addEventListener('keydown', startGame)
  //   return () => window.removeEventListener('keydown', startGame)
  // }, [])

  return (
    <div className="flex h-full flex-col gap-4">
      <h1>Pong Game</h1>
      <div className="mt-8 flex w-full flex-wrap justify-between">
        <div className="flex flex-col">
          <h2>{leftPoints}</h2>
          <span>Player 1</span>
        </div>
        <div className="flex flex-col">
          <h2>{rightPoints}</h2>
          <span>Player 2</span>
        </div>
      </div>
      <PongBoard height={500} width={600} />
    </div>
  )
}

export default App
