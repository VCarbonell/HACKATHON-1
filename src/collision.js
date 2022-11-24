const flag = document.querySelector('.flag');
const vehicule = document.querySelector('.vehicule');

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
       (vehicule.bottom <= obstacle.bottom && vehicule.bottom >= obstacle.top)) {
    if (vehicule.right >= obstacle.left && vehicule.right <= obstacle.right) {
      return false;
    } else if (vehicule.left >= obstacle.left && vehicule.left <= obstacle.right) {
      return false;
    }
  }
  return true;
} 

export const getCollision = () => {
  const flagPos = flag.getBoundingClientRect();
  const vehiculePos = vehicule.getBoundingClientRect();
  const flagSquare = getAllSquare(flagPos);
  const vehiculeSquare = getAllSquare(vehiculePos);
  const collision = collisionTest(flagSquare, vehiculeSquare);
  return collision;
};
