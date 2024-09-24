import { useEffect, useState } from 'react'

function Ball(
  ballPosition: { x: number; y: number },
  setBallPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >,
  leftPosition: number,
  rightPosition: number,
) {
  const defaultBall = (context: CanvasRenderingContext2D) => {
    const width = 10
    const height = 10

    context.fillStyle = 'white'
    context.fillRect(ballPosition.x, ballPosition.y, width, height)
  }

  const ball = (context: CanvasRenderingContext2D) => defaultBall(context)

  // Ball position update logic
  useUpdateBallPosition(setBallPosition, leftPosition, rightPosition)

  return { ball }
}

const useUpdateBallPosition = (
  setBallPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >,
  leftPosition: number,
  rightPosition: number,
) => {
  const angle = Math.random() * 2 * Math.PI
  const speed = 3
  const [ballDirection, setBallDirection] = useState({
    x: speed * Math.cos(angle),
    y: speed * Math.sin(angle),
  })

  useEffect(() => {
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
        if (newX <= 0 || newX + 10 >= 600) {
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
