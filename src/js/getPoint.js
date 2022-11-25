import { def } from "@vue/shared";

const vehicule = document.querySelector('.vehicule__active');
const drapeau = document.querySelectorAll('.drapeau__correct');

const getAllSquare = (myPos) => {
  const allSquareX = {
    top: myPos.top,
    bottom: myPos.bottom,
    left: myPos.left,
    right: myPos.right,
  };
  return allSquareX;
};

const hitDrapeau = (drapeau, vehicule) => {
  if (vehicule.right < drapeau.left) {
      return false;
    } else {
  return true;
    }
};

export const getPoint = () => {
  const vehiculePos = vehicule.getBoundingClientRect();
  const vehiculeSquare = getAllSquare(vehiculePos);
  drapeau.forEach(el => {
    const drapeauPos = el.getBoundingClientRect();
    const drapeauSquare = getAllSquare(drapeauPos);
    const point = hitDrapeau(drapeauSquare, vehiculeSquare);
    return point;
    });
};

export default getPoint;