import { CanvasHTMLAttributes } from 'react'
import useCanvas from './useCanvas'

/**
 * A default canvas element.
 * @param draw - A function that draws on the canvas.
 * @param rest - The canvas element's props.
 * @returns A canvas element.
 */
function Canvas({
  draw,
  ...rest
}: {
  draw: (context: CanvasRenderingContext2D, count: number) => void
} & CanvasHTMLAttributes<HTMLCanvasElement>) {
  const ref = useCanvas(draw)

  return <canvas ref={ref} {...rest}></canvas>
}

export default Canvas
