import ballDesintegrates from '../../assets/sound_fx/ball_desintegrates.wav';

const ballDesintegratesSound = new Audio(ballDesintegrates)

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
  boardHeight: number,
  boardWidth: number,
) => {
  const hitLeft = newX <= 5
  const hitTop = newY <= 0
  const hitRight = newX + 10 >= boardWidth - 5
  const hitBottom = newY + 10 >= boardHeight

  const resetBall = () => {
    newX = boardWidth / 2 - 5
    newY = boardHeight / 2 - 5

    console.log(newX, newY)
    const angle = Math.random() * 2 * Math.PI
    const speed = 5
    newDirection.x = speed * Math.cos(angle)
    newDirection.y = speed * Math.sin(angle)
    ballDesintegratesSound.play()
    ballDesintegratesSound.volume = 0.2
    ballDesintegratesSound.currentTime = 0
  }

  // Collision with top and bottom walls
  if (hitTop || hitBottom) {
    newDirection.y = -newDirection.y
    newY = prevPosition.y
  }
  // Collision with left and right walls
  if (hitLeft) {
    resetBall()
  } else if (hitRight) {
    resetBall()
  }

  return { newX, newY, hitLeft, hitRight }
}
