export interface UpdatePaddlePositionProps {
  setLeftPosition: React.Dispatch<React.SetStateAction<number>>
  setRightPosition: React.Dispatch<React.SetStateAction<number>>
}

export interface PaddlesProps extends UpdatePaddlePositionProps {
  leftPosition: number
  rightPosition: number
}
