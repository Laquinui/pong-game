import { useEffect, useRef } from 'react'

/**
 * A custom hook that creates a reference to a canvas element.
 * @param draw - A function that draws on the canvas.
 * @returns A reference to the canvas element.
 * @example const ref = useCanvas(draw)
 */
function useCanvas(
  draw: (context: CanvasRenderingContext2D, count: number) => void,
) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const context = canvas.getContext('2d')

    let count = 0
    let animationId: number

    const renderer = () => {
      count += 1
      if (context) draw(context, count)
      animationId = window.requestAnimationFrame(renderer)
    }

    renderer()
    return () => window.cancelAnimationFrame(animationId)
  }, [draw])

  return ref
}

export default useCanvas
