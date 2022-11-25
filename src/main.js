import { gsap } from "gsap";
import './style.scss';
import './js/selection'
import './obstacle.js'
import './collision.js';
import navigation from "./js/navigation";

const accueilSound = document.querySelector('.accueilSound');
const inGameSound = document.querySelector('.inGameSound');
const buttonSound = document.querySelector('.buttonClickSound');
const playBtn = document.querySelector('.playBtn');

accueilSound.play();

const bgTl = gsap.timeline();


 gsap.to('.game__sprite',{
   y:'10px',
   repeat:-1,
   yoyo:true
 })

const play = () => {
  buttonSound.play();
  accueilSound.pause();
  inGameSound.play();
  playBtn.style.display = "none";
  bgTl.to('.game', {
    x:'-90%',
    duration:80,
    delay:1,
    ease:'linear',
  })

.to('.congrats',{
  opacity:1,
  duration:1,
  y:'10%',

  
}, '=-.1')
.to('.credit', {
  delay:4,
  y:'-1172px',
  duration:10
})
// .to('.credit', {
//   delay:4,
//   y:'-3000px',
//   duration:10
// })





}




playBtn.addEventListener('click', play);






navigation();

export default bgTl;


