import { getCollision } from "@/collision.js";

const navigation = () => {
const vehicule = document.querySelector('.vehicule');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

let moveBy = 30;

window.addEventListener('load', () => {
  vehicule.style.position = 'absolute';
  vehicule.style.left = 0;
  vehicule.style.bottom = 0;
});

let keysPressed = {};

window.addEventListener('keydown', (e) => {
  keysPressed[e.key] = true;
  switch(true) {
    case keysPressed.ArrowRight && keysPressed.ArrowUp && parseInt(vehicule.style.left) < windowWidth - 100 && parseInt(vehicule.style.bottom) < windowHeight - 100:
        vehicule.style.left = parseInt(vehicule.style.left) + moveBy + 'px';
        vehicule.style.bottom = parseInt(vehicule.style.bottom) + moveBy + 'px';
      break;
    case keysPressed.ArrowDown && keysPressed.ArrowRight && parseInt(vehicule.style.left) < windowWidth - 100 && vehicule.style.bottom !== '0px':
        vehicule.style.bottom = parseInt(vehicule.style.bottom) - moveBy + 'px';
        vehicule.style.left = parseInt(vehicule.style.left) + moveBy + 'px';
      break;
    case keysPressed.ArrowDown && keysPressed.ArrowLeft && vehicule.style.bottom !== '0px' && vehicule.style.left !== '0px':
        vehicule.style.bottom = parseInt(vehicule.style.bottom) - moveBy + 'px';
        vehicule.style.left = parseInt(vehicule.style.left) - moveBy + 'px';
      break;
    case keysPressed.ArrowUp && keysPressed.ArrowLeft && vehicule.style.left !== '0px' && parseInt(vehicule.style.bottom) < windowHeight - 100:
        vehicule.style.left = parseInt(vehicule.style.left) - moveBy + 'px';
        vehicule.style.bottom = parseInt(vehicule.style.bottom) + moveBy + 'px';
      break;  
    case e.key === 'ArrowLeft' && vehicule.style.left !== '0px':
        vehicule.style.left = parseInt(vehicule.style.left) - moveBy + 'px';
      break;
    case e.key === 'ArrowRight' && parseInt(vehicule.style.left) < windowWidth - 100:
      vehicule.style.left = parseInt(vehicule.style.left) + moveBy + 'px';
      break;
    case e.key === 'ArrowUp' && parseInt(vehicule.style.bottom) < windowHeight - 100:
      vehicule.style.bottom = parseInt(vehicule.style.bottom) + moveBy + 'px';
      break;
    case e.key === 'ArrowDown' && vehicule.style.bottom !== '0px':
      vehicule.style.bottom = parseInt(vehicule.style.bottom) - moveBy + 'px';
      break;  
    default:
      console.log("Let's go!!!");
  }
  const collision = getCollision();
  if (collision === true) {
    vehicule.style.left = 0;
    vehicule.style.bottom = 0;
  }
});
document.addEventListener('keyup', (e) => {
    delete keysPressed[e.key];
 });
};

export default navigation;
