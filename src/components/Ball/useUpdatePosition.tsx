import { useEffect, useState } from 'react'
import usePoints from '../../utils/usePoints'
import { UpdateBallPositionProps } from './types'

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
    const isHittingWall = {
      left: false,
      right: false,
    }

    const countPoints = (leftWallHit: boolean, rightWallHit: boolean) => {
      if (leftWallHit && !isHittingWall.left) {
        increaseLeftPoint()
        isHittingWall.left = true
      } else if (rightWallHit && !isHittingWall.right) {
        increaseRightPoint()
        isHittingWall.right = true
      } else {
        isHittingWall.left = false
        isHittingWall.right = false
      }
    }

    const interval = setInterval(() => {
      setBallPosition((prevPosition) => {
        // Moving the ball in the current direction
        let newX = prevPosition.x + ballDirection.x
        let newY = prevPosition.y + ballDirection.y
        const newDirection = { ...ballDirection }

        // Collision with paddles
        const leftPaddleCollision =
          newX <= 20 && newY >= leftPosition && newY <= leftPosition + 50
        const rightPaddleCollision =
          newX >= 570 && newY >= rightPosition && newY <= rightPosition + 50

        if (leftPaddleCollision || rightPaddleCollision) {
          newDirection.x = -newDirection.x
          newX = prevPosition.x
        }

        // Collision with top and bottom walls
        if (newY <= 0 || newY + 10 >= 500) {
          newDirection.y = -newDirection.y
          newY = prevPosition.y
        }

        // Collision with left and right walls
        const leftWallHit = newX <= 1
        const rightWallHit = newX + 10 >= 599

        countPoints(leftWallHit, rightWallHit)

        if (leftWallHit || rightWallHit) {
          newX = 300
          newY = 250
          const angle = Math.random() * 2 * Math.PI
          const speed = 3
          newDirection.x = speed * Math.cos(angle)
          newDirection.y = speed * Math.sin(angle)
        }

        setBallDirection(newDirection)

        return {
          x: newX,
          y: newY,
        }
      })
    }, 16) // Update every 16ms for 60fps

    return () => clearInterval(interval)
  }, [
    setBallPosition,
    ballDirection,
    leftPosition,
    rightPosition,
    increaseLeftPoint,
    increaseRightPoint,
  ])
}

export default useUpdateBallPosition
