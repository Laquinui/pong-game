import { useState } from 'react'
import Ball from '../Ball/useBall'
import Canvas from '../Canvas'
import usePaddles from '../Paddles/usePaddles'

function PongBoard({
  width = 600,
  height = 500,
}: {
  width?: number
  height?: number
}) {
  const [leftPosition, setLeftPosition] = useState(50)
  const [rightPosition, setRightPosition] = useState(50)
  const [ballPosition, setBallPosition] = useState({ x: 300, y: 250 })

  // const [gameRunning, setGameRunning] = useState(false)

  const { leftPaddle, rightPaddle } = usePaddles({
    leftPosition,
    rightPosition,
    setLeftPosition,
    setRightPosition,
  })

  const { ball } = Ball({
    ballPosition,
    setBallPosition,
    leftPosition,
    rightPosition,
  })

  const middleLine = (context: CanvasRenderingContext2D) => {
    context.beginPath()
    context.moveTo(width / 2, 0)
    context.lineTo(width / 2, height)
    context.lineWidth = 3
    context.strokeStyle = '#ffffff20'
    context.setLineDash([20, 20])
    context.stroke()
  }

  /**
   * A function that animates the canvas.
   * @param context - The canvas rendering context.
   */
  const animate = (context: CanvasRenderingContext2D) => {
    requestAnimationFrame(() => animate(context))

    // Clear the canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)

    // Draw paddles and ball on the canvas
    middleLine(context)

    leftPaddle(context)
    rightPaddle(context)
    ball(context)
  }

  return <Canvas draw={animate} height={height} width={width} />
}

export default PongBoard
