import './App.css'
import Canvas from './components/Canvas'

function App() {
  const draw = (context: CanvasRenderingContext2D, count: number) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = 'black'
    const delta = count % 100
    context.fillRect(10 + delta, 0, context.canvas.width, context.canvas.height)
  }

  return (
    <>
      <h1>Pong Game</h1>
      <Canvas draw={draw} height={180} width={90} />
    </>
  )
}

export default App
