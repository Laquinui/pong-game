import { useEffect, useState } from 'react';

function Ball(
  ballPosition: { x: number; y: number },
  setBallPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >,
  leftPosition: number,
  rightPosition: number,
  setLeftPoints: React.Dispatch<React.SetStateAction<number>>,
  setRightPoints: React.Dispatch<React.SetStateAction<number>>,
) {
  const defaultBall = (context: CanvasRenderingContext2D) => {
    const width = 10
    const height = 10

    context.fillStyle = 'white'
    context.fillRect(ballPosition.x, ballPosition.y, width, height)
  }

  const ball = (context: CanvasRenderingContext2D) => defaultBall(context)

  // Ball position update logic
  useUpdateBallPosition(
    setBallPosition,
    leftPosition,
    rightPosition,
    setLeftPoints,
    setRightPoints,
  )

  return { ball }
}

const useUpdateBallPosition = (
  setBallPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >,
  leftPosition: number,
  rightPosition: number,
  setLeftPoints: React.Dispatch<React.SetStateAction<number>>,
  setRightPoints: React.Dispatch<React.SetStateAction<number>>,
) => {
  const angle = Math.random() * 2 * Math.PI
  const speed = 3
  const [ballDirection, setBallDirection] = useState({
    x: speed * Math.cos(angle),
    y: speed * Math.sin(angle),
  })

  useEffect(() => {
    const isHittingWall = {
      left: false,
      right: false,
    }

    const interval = setInterval(() => {
      setBallPosition((prevPosition) => {
        let newX = prevPosition.x + ballDirection.x
        let newY = prevPosition.y + ballDirection.y
        const newDirection = { ...ballDirection }

        // Collision with top and bottom walls
        if (newY <= 0 || newY + 10 >= 500) {
          newDirection.y = -newDirection.y
          newY = prevPosition.y
        }

        // Collision with paddles
        const leftPaddleColision =
          newX <= 20 && newY >= leftPosition && newY <= leftPosition + 50
        const rightPaddleColision =
          newX >= 570 && newY >= rightPosition && newY <= rightPosition + 50

        if (leftPaddleColision || rightPaddleColision) {
          newDirection.x = -newDirection.x
          newX = prevPosition.x
        }

        // Collision with left and right walls
        const leftWallHit = newX <= 1
        const rightWallHit = newX + 10 >= 599

        if (leftWallHit && !isHittingWall.left) {
          setRightPoints((points) => points + 1)
          isHittingWall.left = true
        } else if (rightWallHit && !isHittingWall.right) {
          setLeftPoints((points) => points + 1)
          isHittingWall.right = true
        } else {
          isHittingWall.left = false
          isHittingWall.right = false
        }

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
  }, [setBallPosition, ballDirection, leftPosition, rightPosition])
}

export default Ball
