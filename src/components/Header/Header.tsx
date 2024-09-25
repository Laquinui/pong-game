import { usePoints } from '../../context/PointsContext'

function Header() {
  const { leftPoints, rightPoints } = usePoints()

  return (
    <>
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
    </>
  )
}

export default Header
