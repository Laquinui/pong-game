import { PaddlesProps } from './types';
import useUpdatePaddlePosition from './useUpdatePosition';

function usePaddles({
  leftPosition,
  rightPosition,
  setLeftPosition,
  setRightPosition,
  boardHeight,
  gameRunning,
}: PaddlesProps) {
  const defaultPaddle = (
    position: { x: number; y: number },
    context: CanvasRenderingContext2D,
  ) => {
    const width = 10
    const height = 50

    context.fillStyle = 'white'
    context.fillRect(position.x, position.y, width, height)
  }

  const leftPaddle = (context: CanvasRenderingContext2D) =>
    defaultPaddle({ x: 10, y: leftPosition }, context)

  const rightPaddle = (context: CanvasRenderingContext2D) =>
    defaultPaddle(
      { x: context.canvas.width - 10 * 2, y: rightPosition },
      context,
    )

  // Paddle position update logic
  useUpdatePaddlePosition({
    setLeftPosition,
    setRightPosition,
    boardHeight,
    gameRunning,
  })

  return { leftPaddle, rightPaddle }
}

export default usePaddles
