import { useEffect, useState } from 'react'
import { usePoints } from '../../context/PointsContext'
import { UpdateBallPositionProps } from './types'
import { paddleCollision, wallCollision } from './useCollisions'

const useUpdateBallPosition = ({
  setBallPosition,
  leftPosition,
  rightPosition,
}: UpdateBallPositionProps) => {
  const { setLeftPoints, setRightPoints } = usePoints()
  const [hasPoint, setHasPoint] = useState({ l: false, r: false })

  const angle = Math.random() * 2 * Math.PI
  const speed = 3
  const [ballDirection, setBallDirection] = useState({
    x: speed * Math.cos(angle),
    y: speed * Math.sin(angle),
  })

  // Update points
  useEffect(() => {
    if (hasPoint.l) setRightPoints((prev) => prev + 1)
    else if (hasPoint.r) setLeftPoints((prev) => prev + 1)
  }, [hasPoint, setLeftPoints, setRightPoints])

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
        const {
          hitLeft,
          hitRight,
          newX: finalX,
          newY: finalY,
        } = wallCollision(newX, newY, newDirection, prevPosition)

        setHasPoint({ l: hitLeft, r: hitRight })

        setBallDirection(newDirection)

        return {
          x: finalX,
          y: finalY,
        }
      })
    }, 16) // Update every 16ms for 60fps

    return () => clearInterval(interval)
  }, [setBallPosition, ballDirection, leftPosition, rightPosition])
}

export default useUpdateBallPosition
