const allObstacle = document.querySelectorAll('.obstacle');
const vehicule = document.querySelector('.vehicule');
console.log(vehicule)

const getAllSquare = (myPos) => {
  const allSquareX = {
    top: myPos.top,
    bottom: myPos.bottom,
    left: myPos.left,
    right: myPos.right,
  };
  return allSquareX;
};

const collisionTest = (obstacle, vehicule) => {
  if ((vehicule.top >= obstacle.top && vehicule.top <= obstacle.bottom) ||
       (vehicule.bottom <= obstacle.bottom && vehicule.bottom >= obstacle.top) ||
       (vehicule.top <= obstacle.top && vehicule.bottom >= obstacle.bottom)) {
    if (vehicule.right >= obstacle.left && vehicule.right <= obstacle.right) {
      return true;
    } else if (vehicule.left >= obstacle.left && vehicule.left <= obstacle.right) {
      return true;
    } else if (vehicule.left <= obstacle.left && vehicule.right >= obstacle.right) {
      return true;
    }
  }
  return false;
} 

export const getCollision = () => {
  let didHeHit = false;
  const vehiculePos = vehicule.getBoundingClientRect();
  const vehiculeSquare = getAllSquare(vehiculePos);
  allObstacle.forEach(obstacle => {
    const obstaclePos = obstacle.getBoundingClientRect();
    const obstacleSquare = getAllSquare(obstaclePos);
    const collision = collisionTest(obstacleSquare, vehiculeSquare);
    if (collision) {
      didHeHit = true;
    }
  })
  console.log(didHeHit);
  return didHeHit;
};
