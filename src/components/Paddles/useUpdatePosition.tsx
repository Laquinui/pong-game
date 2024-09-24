import { useEffect } from 'react'
import { UpdatePaddlePositionProps } from './types'

const useUpdatePaddlePosition = ({
  setLeftPosition,
  setRightPosition,
}: UpdatePaddlePositionProps) => {
  const speed: number = 10

  const max = (position: number) => {
    return Math.max(0, position - speed)
  }

  const min = (position: number) => {
    return Math.min(450, position + speed)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
          // Go up
          setLeftPosition((position) => max(position))
          break
        case 's':
          // Go down
          setLeftPosition((position) => min(position))
          break
        case 'ArrowUp':
          // Go up
          setRightPosition((position) => max(position))
          break
        case 'ArrowDown':
          // Go down
          setRightPosition((position) => min(position))
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setLeftPosition, setRightPosition])
}

export default useUpdatePaddlePosition
