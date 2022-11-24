import { def } from "@vue/shared";

const vehicule = document.querySelector('.vehicule__active');
const level2 = document.querySelector('.level2__change');
const level3 = document.querySelector('.level3__change');
const level4 = document.querySelector('.level4__change');
const level5 = document.querySelector('.level5__change');
const level6 = document.querySelector('.level6__change');

const getAllSquare = (myPos) => {
  const allSquareX = {
    top: myPos.top,
    bottom: myPos.bottom,
    left: myPos.left,
    right: myPos.right,
  };
  return allSquareX;
};

const changeLevel = (level, vehicule) => {
  if (vehicule.left < level.left) {
      return false;
    } else {
  return true;
    }
};

export const changeVeh = () => {
  const vehiculePos = vehicule.getBoundingClientRect();
  const vehiculeSquare = getAllSquare(vehiculePos);
  const level2Pos = level2.getBoundingClientRect();
  const level2Square = getAllSquare(level2Pos);
  const level3Pos = level3.getBoundingClientRect();
  const level3Square = getAllSquare(level3Pos);
  const level4Pos = level4.getBoundingClientRect();
  const level4Square = getAllSquare(level4Pos);
  const level5Pos = level5.getBoundingClientRect();
  const level5Square = getAllSquare(level5Pos);
  const level6Pos = level6.getBoundingClientRect();
  const level6Square = getAllSquare(level6Pos);
  const change2 = changeLevel(level2Square, vehiculeSquare);
  const change3 = changeLevel(level3Square, vehiculeSquare);
  const change4 = changeLevel(level4Square, vehiculeSquare);
  const change5 = changeLevel(level5Square, vehiculeSquare);
  const change6 = changeLevel(level6Square, vehiculeSquare);
  return { change2, change3, change4, change5, change6 };
};

export default changeVeh;