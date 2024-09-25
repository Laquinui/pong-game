import { useEffect, useState } from 'react'
import usePoints from '../../utils/usePoints'
import { UpdateBallPositionProps } from './types'
import { paddleCollision, wallCollision } from './useCollisions'

const useUpdateBallPosition = ({
  setBallPosition,
  leftPosition,
  rightPosition,
}: UpdateBallPositionProps) => {
  const angle = Math.random() * 2 * Math.PI
  const speed = 3
  const [ballDirection, setBallDirection] = useState({
    x: speed * Math.cos(angle),
    y: speed * Math.sin(angle),
  })
  const { increaseLeftPoint, increaseRightPoint } = usePoints()

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPosition((prevPosition) => {
        // Moving the ball in the current direction
        const newX = prevPosition.x + ballDirection.x
        const newY = prevPosition.y + ballDirection.y
        const newDirection = { ...ballDirection }

        // Collision with paddles
        paddleCollision(
          newX,
          newY,
          newDirection,
          prevPosition,
          leftPosition,
          rightPosition,
        )

        // Collision with walls
        const { newX: finalX, newY: finalY } = wallCollision(
          newX,
          newY,
          newDirection,
          prevPosition,
          increaseLeftPoint,
          increaseRightPoint,
        )

        setBallDirection(newDirection)

        return {
          x: finalX,
          y: finalY,
        }
      })
    }, 16) // Update every 16ms for 60fps

    return () => clearInterval(interval)
  }, [
    leftPosition,
    rightPosition,
    setBallPosition,
    ballDirection,
    increaseLeftPoint,
    increaseRightPoint,
  ])
}

export default useUpdateBallPosition
