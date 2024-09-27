export interface UpdateBallPositionProps {
  setBallPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >
  leftPosition: number
  rightPosition: number
  boardHeight: number
  boardWidth: number
  gameRunning: boolean
}

export interface BallProps extends UpdateBallPositionProps {
  ballPosition: { x: number; y: number }
}
