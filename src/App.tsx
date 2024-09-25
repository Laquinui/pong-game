import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import PongBoard from './components/PongBoard/PongBoard'
import { PointsProvider } from './context/PointsContext'

function App() {
  return (
    <PointsProvider>
      <div className="flex h-full flex-col gap-4">
        <Navbar />
        <Header />
        <PongBoard height={500} width={600} />
      </div>
    </PointsProvider>
  )
}

export default App
