export interface UpdatePaddlePositionProps {
  setLeftPosition: React.Dispatch<React.SetStateAction<number>>
  setRightPosition: React.Dispatch<React.SetStateAction<number>>
  boardHeight: number
  gameRunning: boolean
}

export interface PaddlesProps extends UpdatePaddlePositionProps {
  leftPosition: number
  rightPosition: number
}
