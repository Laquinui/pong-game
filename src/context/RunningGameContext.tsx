import { createContext, ReactNode, useContext, useState } from 'react'

interface RunningGameContextType {
  gameRunning: boolean
  setGameRunning: React.Dispatch<React.SetStateAction<boolean>>
}

const RunningGameContext = createContext<RunningGameContextType | undefined>(
  undefined,
)

export const RunningGameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameRunning, setGameRunning] = useState(false)

  return (
    <RunningGameContext.Provider value={{ gameRunning, setGameRunning }}>
      {children}
    </RunningGameContext.Provider>
  )
}

export const useRunningGame = () => {
  const context = useContext(RunningGameContext)
  if (!context) {
    throw new Error('useRunningGame must be used within a RunningGameProvider')
  }
  return context
}
