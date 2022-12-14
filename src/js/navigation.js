import { getCollision } from "../collision";
import { getFlagChoice } from "../collision";
import { changeVeh } from "./changeVeh";
import { getPoint } from "./getPoint";
import { gsap } from "gsap";
import bgTl from '../main';

const navigation = () => {
const vehicule = document.querySelector('.vehicule__active');
const sprite = document.querySelector('.game__sprite');
const vies = document.querySelector('.vies');
const gameover = document.querySelector('.gameover');
const points = document.querySelector('.points');
const buzzer = document.querySelector('#buzzer');
const correct = document.querySelector('#correct');
const wrong = document.querySelector('#wrong');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const explosion = document.querySelector('.explosion');
const explosionSound = document.querySelector('.explosionSound');
const gameOverAudio = document.querySelector('.gameOverAudio');
const homeAnimation = document.querySelector('.homeAnimation');
const accueilSound = document.querySelector('.accueilSound');
const inGameSound = document.querySelector('.inGameSound');

inGameSound.volume = .7;





let moveBy = 30;

window.addEventListener('load', () => {
  vehicule.style.position = 'absolute';
  vehicule.style.left = "0px";
  vehicule.style.bottom = "350px";
  homeAnimation.play()
  setTimeout(() => {
    accueilSound.play();
  }, 6000);
});

let keysPressed = {};
let number = 5;
let pointCount = 0;

let alreadyHit = false;
let alreadyHitFlag = false;

window.addEventListener('keydown', (e) => {
  keysPressed[e.key] = true;
  switch(true) {
    case keysPressed.ArrowRight && keysPressed.ArrowUp && parseInt(vehicule.style.left) < windowWidth - 100 && parseInt(vehicule.style.bottom) < windowHeight - 100:
        e.preventDefault;
        vehicule.style.left = parseInt(vehicule.style.left) + moveBy + 'px';
        vehicule.style.bottom = parseInt(vehicule.style.bottom) + moveBy + 'px';
      break;
    case keysPressed.ArrowDown && keysPressed.ArrowRight && parseInt(vehicule.style.left) < windowWidth - 100 && vehicule.style.bottom !== '0px':
        e.preventDefault;
        vehicule.style.bottom = parseInt(vehicule.style.bottom) - moveBy + 'px';
        vehicule.style.left = parseInt(vehicule.style.left) + moveBy + 'px';
      break;
    case keysPressed.ArrowDown && keysPressed.ArrowLeft && vehicule.style.bottom !== '0px' && vehicule.style.left !== '0px':
        e.preventDefault;
        vehicule.style.bottom = parseInt(vehicule.style.bottom) - moveBy + 'px';
        vehicule.style.left = parseInt(vehicule.style.left) - moveBy + 'px';
      break;
    case keysPressed.ArrowUp && keysPressed.ArrowLeft && vehicule.style.left !== '0px' && parseInt(vehicule.style.bottom) < windowHeight - 100:
        e.preventDefault;
        vehicule.style.left = parseInt(vehicule.style.left) - moveBy + 'px';
        vehicule.style.bottom = parseInt(vehicule.style.bottom) + moveBy + 'px';
      break;  
    case e.key === 'ArrowLeft' && vehicule.style.left !== '0px':
        e.preventDefault;
        vehicule.style.left = parseInt(vehicule.style.left) - moveBy + 'px';
      break;
    case e.key === 'ArrowRight' && parseInt(vehicule.style.left) < windowWidth - 100:
      e.preventDefault;
      vehicule.style.left = parseInt(vehicule.style.left) + moveBy + 'px';
      break;
    case e.key === 'ArrowUp' && parseInt(vehicule.style.bottom) < windowHeight - 100:
      e.preventDefault;
      vehicule.style.bottom = parseInt(vehicule.style.bottom) + moveBy + 'px';
      break;
    case e.key === 'ArrowDown' && vehicule.style.bottom !== '0px':
      e.preventDefault;
      vehicule.style.bottom = parseInt(vehicule.style.bottom) - moveBy + 'px';
      break;
    default:
      console.log("Let's go!!!");
  };
  const collision = getCollision();
  if (collision === true && alreadyHit === false) {
    vehicule.classList.add("blink");
    alreadyHit = true;
    setTimeout(() => {
      vehicule.classList.remove("blink");
      alreadyHit = false;
    }, 1500);
    if (number > 1) {
      number = number - 1;
      vies.style.backgroundImage = `url('./src/images/${number}vies.png')`;
      buzzer.play();
    } else {
      number = number - 1;
      vies.style.backgroundImage = `url('./src/images/${number}vies.png')`;
      inGameSound.pause();
      explosion.classList.add("explosionAnim");
      vehicule.classList.add("vehiculeDeath");
      explosionSound.play();
      gameover.style.display = "block";
      setTimeout(() => {
        gameOverAudio.play()
      }, 1500);
      bgTl.kill()
    }
  };

  const shake = () => {
  gsap.to('body', {
    x:'-40px',
    repeat: 3,
    duration: 0.05,
    yoyo: true,})};

  const flag = getFlagChoice();
  if (flag && !alreadyHitFlag) {
    alreadyHitFlag = true;
    setTimeout(() => {
      alreadyHitFlag = false;
    }, 1500)
    pointCount += 1;
    points.style.backgroundImage = `url('./src/images/${pointCount}point.png')`;
    correct.play();
  };
  if (flag === false) {
    wrong.play();
    shake();
  };

  const { change2, change3, change4, change5, change6 } = changeVeh();
  if (change2 === true) {
    vehicule.style.backgroundImage = "url('./src/images/montgolfiere.png')";
    sprite.style.width = "calc(0.7*306px)";
    sprite.style.height = "calc(0.7*540px)";
  };
  if (change3 === true) {
    vehicule.style.backgroundImage = "url('./src/images/dirigable.png')";
    sprite.style.width = "calc(0.5*708px)";
    sprite.style.height = "calc(0.5*297px)";
  };
  if (change4 === true) {
    vehicule.style.backgroundImage = "url('./src/images/avion2.png')";
    sprite.style.width = "calc(0.5*871px)";
    sprite.style.height = "calc(0.5*343px)";
  };
  if (change5 === true) {
    vehicule.style.backgroundImage = "url('./src/images/avion.png')";
    sprite.style.width = "calc(0.6*995px)";
    sprite.style.height = "calc(0.6*324px)";
  };
  if (change6 === true) {
    vehicule.style.backgroundImage = "url('./src/images/soucoupe.png')";
    sprite.style.width = "calc(0.9*396px)";
    sprite.style.height = "calc(0.9*235px)";
  };

  const point = getPoint();
  if (point === true) {
    if (pointCount < 4) {
      pointCount++;
      points.style.backgroundImage = `url('./src/images/${pointCount}points.png`;
    }
  }
});
document.addEventListener('keyup', (e) => {
    delete keysPressed[e.key];
 });
};

export default navigation;
