import { useCallback, useEffect } from 'react'
import { UpdatePaddlePositionProps } from './types'

const useUpdatePaddlePosition = ({
  setLeftPosition,
  setRightPosition,
  gameRunning,
}: UpdatePaddlePositionProps) => {
  const speed: number = 10

  const max = (position: number) => Math.max(0, position - 1 * speed)
  const min = (position: number) => Math.min(450, position + 1 * speed)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
          setLeftPosition((position) => max(position))
          break
        case 's':
          setLeftPosition((position) => min(position))
          break
        case 'ArrowUp':
          setRightPosition((position) => max(position))
          break
        case 'ArrowDown':
          setRightPosition((position) => min(position))
          break
      }
    },
    [setLeftPosition, setRightPosition],
  )

  useEffect(() => {
    if (gameRunning) window.addEventListener('keydown', handleKeyDown)
    else window.removeEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown, gameRunning])
}

export default useUpdatePaddlePosition
