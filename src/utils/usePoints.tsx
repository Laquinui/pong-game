import { useState } from 'react'

function usePoints() {
  const [leftPoints, setLeftPoints] = useState(0)
  const [rightPoints, setRightPoints] = useState(0)

  const increaseLeftPoint = () => setLeftPoints((points) => points + 1)
  const increaseRightPoint = () => setRightPoints((points) => points - 1)

  return { leftPoints, rightPoints, increaseLeftPoint, increaseRightPoint }
}

export default usePoints
