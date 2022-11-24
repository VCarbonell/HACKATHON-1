const obstacle = document.querySelector('.obstacle');
const vehicule = document.querySelector('.vehicule__active');

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
      return false;
    } else if (vehicule.left >= obstacle.left && vehicule.left <= obstacle.right) {
      return false;
    } else if (vehicule.left <= obstacle.left && vehicule.right >= obstacle.right) {
      return false;
    }
  }
  return true;
};

export const getCollision = () => {
  const obstaclePos = obstacle.getBoundingClientRect();
  const vehiculePos = vehicule.getBoundingClientRect();
  const obstacleSquare = getAllSquare(obstaclePos);
  const vehiculeSquare = getAllSquare(vehiculePos);
  const collision = collisionTest(obstacleSquare, vehiculeSquare);
  return collision;
};
