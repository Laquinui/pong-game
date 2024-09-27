import { BallProps } from './types'
import useUpdateBallPosition from './useUpdatePosition'

/**
 * #### Ball - The ball component for the Pong game
 *
 * The Ball component is responsible for rendering the ball on the canvas and updating its position.
 *
 * @param ballPosition - The X and Y positions of the ball
 * @param setBallPosition - A function to set the ball position
 * @param leftPosition - The Y position of the left paddle
 * @param rightPosition - The Y position of the right paddle
 * @param setLeftPoints - A function to set the left player points
 * @param setRightPoints - A function to set the right player points
 */
function Ball({
  ballPosition,
  setBallPosition,
  leftPosition,
  rightPosition,
  boardHeight,
  boardWidth,
  gameRunning,
}: BallProps) {
  const defaultBall = (context: CanvasRenderingContext2D) => {
    const width = 10
    const height = 10

    context.fillStyle = 'white'
    context.fillRect(ballPosition.x, ballPosition.y, width, height)
  }

  const ball = (context: CanvasRenderingContext2D) => defaultBall(context)

  // Ball position update logic
  useUpdateBallPosition({
    setBallPosition,
    leftPosition,
    rightPosition,
    boardHeight,
    boardWidth,
    gameRunning,
  })

  return { ball }
}

export default Ball
