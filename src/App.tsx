import { useState } from 'react'
import './App.css'
import Ball from './components/Board/useBall'
import usePaddles from './components/Board/usePaddles'
import Canvas from './components/Canvas'

function App() {
  const [leftPosition, setLeftPosition] = useState(50)
  const [rightPosition, setRightPosition] = useState(50)
  const [ballPosition, setBallPosition] = useState({ x: 300, y: 250 })

  const { leftPaddle, rightPaddle } = usePaddles(
    leftPosition,
    rightPosition,
    setLeftPosition,
    setRightPosition,
  )

  const { ball } = Ball(
    ballPosition,
    setBallPosition,
    leftPosition,
    rightPosition,
  )

  /**
   * A function that animates the canvas.
   * @param context - The canvas rendering context.
   */
  const animate = (context: CanvasRenderingContext2D) => {
    // Clear the canvas
    requestAnimationFrame(() => animate(context))
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)

    // Draw paddles and ball on the canvas
    leftPaddle(context)
    rightPaddle(context)
    ball(context)
  }

  return (
    <div className="flex h-full flex-col">
      <h1>Pong Game</h1>
      <Canvas draw={animate} height={500} width={600} />
    </div>
  )
}

export default App
