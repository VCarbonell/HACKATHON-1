const allObstacle = document.querySelectorAll('.obstacle');
const allFlag = document.querySelectorAll('.drapeau');
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

const collisionFlagTest = (flag, vehicule) => {
  if (vehicule.right >= flag.left && vehicule.left <= flag.left) {
    return true;
  }
}

const getZone = (flag, vehicule) => {
  let zone;
  if (flag.top === 0) {
    zone = flag.bottom - vehicule.top;
  } else if (flag.bottom === 900) {
    zone = vehicule.bottom - flag.top;
  } else {
    console.log("why")
  }
  return zone;
};

const wichFlag = (firstFlag, secondFlag, vehiculeSquare) => {
  const firstZone = getZone(firstFlag, vehiculeSquare);
  const secondZone = getZone(secondFlag, vehiculeSquare);
  if (firstZone > secondZone) {
    return "first";
  } else {
    return "second";
  };
};

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
  return didHeHit;
};

export const getFlagChoice = () => {
  let firstFlag;
  let firstFlagSquare;
  let secondFlag;
  let secondFlagSquare;
  let choosenFlag;
  let result;
  const vehiculePos = vehicule.getBoundingClientRect();
  const vehiculeSquare = getAllSquare(vehiculePos);
  allFlag.forEach(flag => {
    const flagPos = flag.getBoundingClientRect();
    const flagSquare = getAllSquare(flagPos);
    const collisionFlag = collisionFlagTest(flagSquare, vehiculeSquare);
    if (collisionFlag && !firstFlag) {
      firstFlag = flag;
      firstFlagSquare = flagSquare;
    } else if (collisionFlag && firstFlag) {
      secondFlag = flag;
      secondFlagSquare = flagSquare;
    }
    if (firstFlag && secondFlag) {
      choosenFlag = wichFlag(firstFlagSquare, secondFlagSquare, vehiculeSquare);
      if (choosenFlag === "first") {
        choosenFlag = firstFlag;
      } else {
        choosenFlag = secondFlag;
      }
    } else {
      choosenFlag = firstFlag;
    }
  })
  if (choosenFlag) {
    result = choosenFlag.classList.contains("drapeau__correct");
  }
  if (result) {
    return true;
  }
  return false;
};