export interface UpdateBallPositionProps {
  setBallPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >
  leftPosition: number
  rightPosition: number
  setLeftPoints: React.Dispatch<React.SetStateAction<number>>
  setRightPoints: React.Dispatch<React.SetStateAction<number>>
}

export interface BallProps extends UpdateBallPositionProps {
  ballPosition: { x: number; y: number }
}
