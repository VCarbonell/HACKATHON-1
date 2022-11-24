import { getCollision } from "@/collision.js";

const vehicule = document.querySelector('.vehicule');
const screenWidth = screen.width;
const screenHeight = screen.height;

let moveBy = 30;

window.addEventListener('load', () => {
  vehicule.style.position = 'absolute';
  vehicule.style.left = 0;
  vehicule.style.bottom = 0;
});

window.addEventListener('keydown', (e) => {
  switch(true) {
    case e.key === 'ArrowLeft' && vehicule.style.left !== "0px":
        vehicule.style.left = parseInt(vehicule.style.left) - moveBy + 'px';
      break;
    case e.key === 'ArrowRight' && vehicule.style.left !== screenWidth + "px":
      vehicule.style.left = parseInt(vehicule.style.left) + moveBy + 'px';
      break;
    case e.key === 'ArrowUp' && vehicule.style.top !== "0px":
      vehicule.style.bottom = parseInt(vehicule.style.bottom) + moveBy + 'px';
      break;
    case e. key === 'ArrowDown' && vehicule.style.bottom !== "0px":
      vehicule.style.bottom = parseInt(vehicule.style.bottom) - moveBy + 'px';
      break;    
    default:
      console.log("Let's go!!!");
  }
  const collision = getCollision();
  if (collision === false) {
    vehicule.style.left = 0;
    vehicule.style.bottom = 0;
  }
});