import { useCallback, useEffect } from 'react'
import { UpdatePaddlePositionProps } from './types'

const useUpdatePaddlePosition = ({
  setLeftPosition,
  setRightPosition,
  boardHeight,
  gameRunning,
}: UpdatePaddlePositionProps) => {
  const speed: number = 10

  const max = useCallback(
    (position: number) => Math.max(0, position - 1 * speed),
    [],
  )
  const min = useCallback(
    (position: number) => Math.min(boardHeight - 50, position + 1 * speed),
    [boardHeight],
  )

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
          e.preventDefault()
          setRightPosition((position) => max(position))
          break
        case 'ArrowDown':
          e.preventDefault()
          setRightPosition((position) => min(position))
          break
      }
    },
    [setLeftPosition, setRightPosition, max, min],
  )

  useEffect(() => {
    if (gameRunning) window.addEventListener('keydown', handleKeyDown)
    else window.removeEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown, gameRunning])
}

export default useUpdatePaddlePosition
