export const paddleCollision = (
  newX: number,
  newY: number,
  newDirection: { x: number; y: number },
  prevPosition: { x: number; y: number },
  leftPosition: number,
  rightPosition: number,
) => {
  const leftPdlHit =
    newX <= 20 && newY >= leftPosition && newY <= leftPosition + 50
  const rightPdlHit =
    newX >= 570 && newY >= rightPosition && newY <= rightPosition + 50

  if (leftPdlHit || rightPdlHit) {
    newDirection.x = -newDirection.x
    newX = prevPosition.x
  }
}

export const wallCollision = (
  newX: number,
  newY: number,
  newDirection: { x: number; y: number },
  prevPosition: { x: number; y: number },
  increaseLeftPoint: () => void,
  increaseRightPoint: () => void,
) => {
  const hitLeft = newX <= 0
  const hitTop = newY <= 0
  const hitRight = newX + 10 >= 600
  const hitBottom = newY + 10 >= 500

  const resetBall = () => {
    newX = 300
    newY = 250
    const angle = Math.random() * 2 * Math.PI
    const speed = 3
    newDirection.x = speed * Math.cos(angle)
    newDirection.y = speed * Math.sin(angle)
  }

  // Collision with top and bottom walls
  if (hitTop || hitBottom) {
    newDirection.y = -newDirection.y
    newY = prevPosition.y
  }

  // Collision with left and right walls
  if (hitLeft) {
    increaseRightPoint()
    resetBall()
  } else if (hitRight) {
    increaseLeftPoint()
    resetBall()
  }

  return { newX, newY }
}
