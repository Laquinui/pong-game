import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import PongBoard from './components/PongBoard/PongBoard'
import { PointsProvider } from './context/PointsContext'
import { RunningGameProvider } from './context/RunningGameContext'

function App() {
  return (
    <RunningGameProvider>
      <PointsProvider>
        <div className="flex h-full flex-col gap-4">
          <Navbar />
          <Header />
          <PongBoard height={500} width={600} />
          <Footer />
        </div>
      </PointsProvider>
    </RunningGameProvider>
  )
}

export default App
