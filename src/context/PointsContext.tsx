import React, { createContext, ReactNode, useContext, useState } from 'react'

interface PointsContextType {
  leftPoints: number
  rightPoints: number
  setLeftPoints: React.Dispatch<React.SetStateAction<number>>
  setRightPoints: React.Dispatch<React.SetStateAction<number>>
}

const PointsContext = createContext<PointsContextType | undefined>(undefined)

export const PointsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [leftPoints, setLeftPoints] = useState(0)
  const [rightPoints, setRightPoints] = useState(0)

  return (
    <PointsContext.Provider
      value={{ leftPoints, rightPoints, setLeftPoints, setRightPoints }}
    >
      {children}
    </PointsContext.Provider>
  )
}

export const usePoints = () => {
  const context = useContext(PointsContext)
  if (!context) {
    throw new Error('usePoints must be used within a PointsProvider')
  }
  return context
}
