import { usePoints } from '../../context/PointsContext'
import { useRunningGame } from '../../context/RunningGameContext'

function Header() {
  const { leftPoints, rightPoints } = usePoints()
  const { gameRunning } = useRunningGame()

  return (
    <>
      <h1>Pong Game</h1>

      <span
        className={`text-[#ffffff50] transition ${gameRunning ? 'opacity-0' : 'opacity-100'}`}
      >
        Press Space to play
      </span>

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
    </>
  )
}

export default Header
