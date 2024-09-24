import { useEffect } from 'react';

function usePaddles(
  leftPosition: number,
  rightPosition: number,
  setLeftPosition: React.Dispatch<React.SetStateAction<number>>,
  setRightPosition: React.Dispatch<React.SetStateAction<number>>,
) {
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
  useUpdatePaddlePosition(setLeftPosition, setRightPosition)

  return { leftPaddle, rightPaddle }
}

const useUpdatePaddlePosition = (
  setLeftPosition: React.Dispatch<React.SetStateAction<number>>,
  setRightPosition: React.Dispatch<React.SetStateAction<number>>,
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const speed: number = 10
      switch (e.key) {
        case 'w':
          // Go up
          setLeftPosition((position) => position - speed)
          break
        case 's':
          // Go down
          setLeftPosition((position) => position + speed)
          break
        case 'ArrowUp':
          // Go up
          setRightPosition((position) => position - speed)
          break
        case 'ArrowDown':
          // Go down
          setRightPosition((position) => position + speed)
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setLeftPosition, setRightPosition])
}

export default usePaddles
